import { MainContent, FormSection, FormElement, SubmitInput, ResetInput, NumberInput, NormalLabel } from "../src/styles/homepage";
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

  if (simultationResult) console.log(simultationResult);

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
              <NormalLabel>Aporte Inicial</NormalLabel>
              <NumberInput type="text" id="initialContribution" onKeyDown={(e) => e.target.value = moneyMask(e.target.value)} />
            </FormElement>
            <FormElement>
              <NormalLabel>Aporte Mensal</NormalLabel>
              <NumberInput type="text" id="monthlyContribution" onKeyDown={(e) => e.target.value = moneyMask(e.target.value)} />
            </FormElement>
            <FormElement>
              <NormalLabel>Prazo (em meses)</NormalLabel>
              <NumberInput type="number" id="deadline" min="1" />
            </FormElement>
            <FormElement>
              <NormalLabel>Rentabilidade</NormalLabel>
              <NumberInput type="number" step="0.01" id="profitability" min="1" />
            </FormElement>
            <FormElement>
              <NormalLabel>IPCA (ao ano)</NormalLabel>
              <NumberInput type="text" id="ipca" min="1" readOnly value={`${ipca[0].valor.toString()}%`} />
            </FormElement>
            <FormElement>
              <NormalLabel>CDI (ao ano)</NormalLabel>
              <NumberInput type="text" id="cdi" step="0.01" readOnly min="1" value={`${cdi[0].valor.toString()}%`} />
            </FormElement>
            <ResetInput type="reset" value="Limpar os campos" />
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