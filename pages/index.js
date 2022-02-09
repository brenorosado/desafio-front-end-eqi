import { MainContent, RadioInputsDiv, RadioInput, RadioLabel, FormElement, InputButton, NumberInput } from "../src/styles/homepage";
import { BsCheck, BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

const Home = ({ cdi, ipca }) => {
  const [incomeType, setIncomeType] = useState('Gross');
  const [indexingType, setIndexingType] = useState('Post');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainContent>
      <h1>Simulador de Investimentos</h1>
      <section>
        <h2>Simulador</h2>
        <form onSubmit={handleSubmit}>
          <FormElement>
            <span>Rendimento <BsInfoCircle /></span>
            <RadioInputsDiv>
              <RadioInput type="radio" id="grossIncome" name="incomeType" value="Gross" onChange={(e) => setIncomeType('Gross')} />
              <RadioLabel for="grossIncome"
                background={incomeType === 'Gross' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'Gross' ? 'white' : 'black'}>
                {incomeType === 'Gross' ? <><BsCheck />Bruto</> : 'Bruto'}
              </RadioLabel>
              <RadioInput type="radio" id="liquidIncome" name="incomeType" value="Liquid" onChange={(e) => setIncomeType('Liquid')} />
              <RadioLabel for="liquidIncome"
                background={incomeType === 'Liquid' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'Liquid' ? 'white' : 'black'}>
                {incomeType === 'Liquid' ? <><BsCheck />Líquido</> : 'Líquido'}
              </RadioLabel>
            </RadioInputsDiv>
          </FormElement>
          <FormElement>
            <span>Tipos de indexação <BsInfoCircle /></span>
            <RadioInputsDiv>
              <RadioInput type="radio" id="preIndexing" name="indexingType" value="Pre" onChange={(e) => setIndexingType('Pre')} />
              <RadioLabel for="preIndexing"
                background={indexingType === 'Pre' ? '#ed8e53' : '#efefef'}
                color={indexingType === 'Pre' ? 'white' : 'black'}>
                {indexingType === 'Pre' ? <><BsCheck />PRÉ</> : 'PRÉ'}
              </RadioLabel>
              <RadioInput type="radio" id="postIncome" name="indexingType" value="Post" onChange={(e) => setIndexingType('Post')} />
              <RadioLabel for="postIncome"
                background={indexingType === 'Post' ? '#ed8e53' : '#efefef'}
                color={indexingType === 'Post' ? 'white' : 'black'}>
                {indexingType === 'Post' ? <><BsCheck />PÓS</> : 'PÓS'}
              </RadioLabel>
              <RadioInput type="radio" id="fixedIncome" name="indexingType" value="Fixed" onChange={(e) => setIndexingType('Fixed')} />
              <RadioLabel for="fixedIncome"
                background={indexingType === 'Fixed' ? '#ed8e53' : '#efefef'}
                color={indexingType === 'Fixed' ? 'white' : 'black'}>
                {indexingType === 'Fixed' ? <><BsCheck />FIXADO</> : 'FIXADO'}
              </RadioLabel>
            </RadioInputsDiv>
          </FormElement>
          <FormElement>
            <label>Aporte Inicial</label>
            <NumberInput type="text" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Aporte Mensal</label>
            <NumberInput type="text" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Prazo (em meses)</label>
            <NumberInput type="text" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Rentabilidade</label>
            <NumberInput type="text" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>IPCA (% ao ano)</label>
            <NumberInput type="number" id="inicialContribution" min="1" readOnly value={ipca[0].valor} />
          </FormElement>
          <FormElement>
            <label>CDI (% ao ano)</label>
            <NumberInput type="number" id="inicialContribution" step="0.01" readOnly min="1" value={cdi[0].valor} />
          </FormElement>
          <InputButton type="reset" value="Limpar os campos" border="1px solid black"/>
          <InputButton type="submit" value="Simular" color="#ed8e53" border="none"/>
        </form>
      </section>
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