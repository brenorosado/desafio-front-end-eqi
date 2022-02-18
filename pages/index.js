import { MainContent, FormSection, FormElement, SubmitInput, ResetInput, NumberInput, NormalLabel, ErrorMessage } from "../src/styles/homepage";
import { useState } from "react";
import { moneyMask } from "../src/utils/inputMasks";
import ResultSection from "../src/components/resultSection";
import IncomeTypeSelector from "../src/components/IncomeTypeSelector";
import IndexingTypeSelector from "../src/components/IndexingTypeSelector";

const Home = ({ cdi, ipca }) => {
  const [incomeType, setIncomeType] = useState('bruto');
  const [indexingType, setIndexingType] = useState('pos');
  const [submitInputColor, setSubmitInputColor] = useState('#969696');
  const [simultationResult, setSimulationResult] = useState(null);
  const [initialContribution, setInitialContribution] = useState(null);
  const [monthlyContribution, setMonthlyContribution] = useState(null);
  const [deadline, setDeadline] = useState(null);
  const [profitability, setProfitability] = useState(null);

  const handleSubmit = (e) => {
    setSubmitInputColor("#ed8e53");
    e.preventDefault();

    const fetchData = async () => {
      return await fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${indexingType}&tipoRendimento=${incomeType}`)
        .then(response => response.json())
        .then(data => setSimulationResult(data[0]))
        .catch(console.error);
    };

    fetchData();
  };

  const ValidateNumberInput = (userInput, type) => {
    let result = userInput;

    if (result !== null) {
      if (result.includes('%')) result = result.replaceAll('%', '');
      if (result.includes('R$ ')) result = result.replace('R$ ', '');
      if (result.includes('.')) result = result.replaceAll('.', '');
      if (result.includes(',')) result = result.replace(',', '.');

      if ((result !== '') && (!isNaN(result)) && (result > 0)) {
        return { valid: true, isNumber: true, result: (type === 'porcentage') ? `${result}%`: moneyMask(result)};
      };
    };

    if (result === null || result === '') return { valid: true, isNumber: false, result: userInput };

    return { valid: false, isNumber: false, result: userInput };
  };

  return (
    <MainContent>
      <h1>Simulador de Investimentos</h1>
      <FormSection>
        <article>
          <h2>Simulador</h2>
          <form onSubmit={handleSubmit} autocomplete="off">
            <IncomeTypeSelector incomeType={incomeType} setIncomeType={setIncomeType} />
            <IndexingTypeSelector indexingType={indexingType} setIndexingType={setIndexingType} />
            <FormElement>
              <NormalLabel color={(ValidateNumberInput(initialContribution).valid) ? 'black' : 'red'}>Aporte Inicial</NormalLabel>
              <NumberInput type="text" id="initialContribution" value={ValidateNumberInput(initialContribution).result} onChange={(e) => setInitialContribution(e.target.value)} />
              <ErrorMessage><small>{(ValidateNumberInput(initialContribution).valid) ? '' : 'Aporte deve ser um número'}</small></ErrorMessage>
            </FormElement>
            <FormElement>
              <NormalLabel color={(ValidateNumberInput(monthlyContribution).valid) ? 'black' : 'red'}>Aporte Mensal</NormalLabel>
              <NumberInput type="text" id="monthlyContribution" value={ValidateNumberInput(monthlyContribution).result} onChange={(e) => setMonthlyContribution(e.target.value)} />
              <ErrorMessage><small>{(ValidateNumberInput(monthlyContribution).valid) ? '' : 'Aporte deve ser um número'}</small></ErrorMessage>
            </FormElement>
            <FormElement>
              <NormalLabel color={(ValidateNumberInput(deadline).valid) ? 'black' : 'red'}>Prazo (em meses)</NormalLabel>
              <NumberInput type="text" id="deadline" min="1" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
              <ErrorMessage><small>{(ValidateNumberInput(deadline).valid) ? '' : 'Prazo deve ser um número'}</small></ErrorMessage>
            </FormElement>
            <FormElement>
              <NormalLabel color={(ValidateNumberInput(profitability).valid) ? 'black' : 'red'}>Rentabilidade</NormalLabel>
              <NumberInput type="text" step="0.01" id="profitability" min="1" value={(ValidateNumberInput(profitability, 'porcentage').isNumber) ? ValidateNumberInput(profitability, 'porcentage').result : profitability} onChange={(e) => setProfitability(e.target.value)} />
              <ErrorMessage><small>{(ValidateNumberInput(profitability).valid) ? '' : 'Rentabilidade deve ser um número'}</small></ErrorMessage>
            </FormElement>
            <FormElement>
              <NormalLabel>IPCA (ao ano)</NormalLabel>
              <NumberInput type="text" id="ipca" min="1" readOnly value={`${ipca[0].valor.toString()}%`} />
            </FormElement>
            <FormElement>
              <NormalLabel>CDI (ao ano)</NormalLabel>
              <NumberInput type="text" id="cdi" step="0.01" readOnly min="1" value={`${cdi[0].valor.toString()}%`} />
            </FormElement>
            <ResetInput type="reset" value="Limpar os campos" onClick={e => {
              setInitialContribution(null);
              setMonthlyContribution(null);
              setDeadline(null);
              setProfitability(null);
            }}/>
            <SubmitInput type="submit" value="Simular" color={submitInputColor} />
          </form>
        </article>
      </FormSection>
      {
        simultationResult ? (
          <ResultSection result={simultationResult} />
        ) : null
      }
    </MainContent>
  );
};

export default Home;


export async function getServerSideProps() {
  const cdi = await fetch('http://localhost:3000/indicadores?nome=cdi');
  const cdijson = await cdi.json();

  const ipca = await fetch('http://localhost:3000/indicadores?nome=ipca');
  const ipcajson = await ipca.json();

  return {
    props: {
      cdi: cdijson,
      ipca: ipcajson,
    }
  }
}