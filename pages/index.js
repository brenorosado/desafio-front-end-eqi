import { MainContent, RadioInputsDiv, RadioInput, RadioLabel } from "../src/styles/homepage";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
  const [incomeType, setIncomeType] = useState('Gross')

  return (
    <MainContent>
      <h1>Simulador de Investimentos</h1>
      <section>
        <div>
          <h2>Simulador</h2>
          <form>
              <span>Rendimento</span>
            <RadioInputsDiv>
              <RadioInput type="radio" id="grossIncome" name="incomeType" value="Gross" className="radio__input" checked onClick={(e) => setIncomeType('Gross')} />
              <RadioLabel for="grossIncome" className="radio__label" 
                background={incomeType === 'Gross' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'Gross' ? 'white' : 'black'}>
                {incomeType === 'Gross' ? <><BsCheck/>Bruto</> : 'Bruto'}
              </RadioLabel>
              <RadioInput type="radio" id="liquidIncome" name="incomeType" value="Liquid" className="radio__input" onClick={(e) => setIncomeType('Liquid')} />
              <RadioLabel for="liquidIncome" className="radio__label"
                background={incomeType === 'Liquid' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'Liquid' ? 'white' : 'black'}>
                {incomeType === 'Liquid' ? <><BsCheck/>Líquido</> : 'Líquido'}
              </RadioLabel>
            </RadioInputsDiv>
          </form>
        </div>
      </section>
    </MainContent>
  );
};

export default Home;
