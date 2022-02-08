import { MainContent, RadioInputsDiv, RadioInput, RadioLabel, FormElement, NumberInput } from "../src/styles/homepage";
import { BsCheck, BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
  const [incomeType, setIncomeType] = useState('Gross');
  const [indexingType, setIndexingType] = useState('Post')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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
            <NumberInput type="number" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Aporte Mensal</label>
            <NumberInput type="number" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Prazo (em meses)</label>
            <NumberInput type="number" id="inicialContribution" min="1"/>
          </FormElement>
          <FormElement>
            <label>Rentabilidade</label>
            <NumberInput type="number" id="inicialContribution" min="1"/>
          </FormElement>
          <button>Limpar campos</button>
          <input type="submit" value="Simular"/>
        </form>
      </section>
    </MainContent>
  );
};

export default Home;
