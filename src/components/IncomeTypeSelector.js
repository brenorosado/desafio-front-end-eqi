import { FormElement, RadioInputsDiv, RadioInput, RadioLabel } from "../styles/homepage";
import { BsCheck, BsInfoCircle } from "react-icons/bs";

const IncomeTypeSelector = ({ incomeType, setIncomeType }) => {
    return (
        <FormElement>
            <span>Rendimento <BsInfoCircle /></span>
            <RadioInputsDiv>
              <RadioInput type="radio" id="brutoIncome" name="incomeType" value="bruto" onChange={(e) => setIncomeType('bruto')} />
              <RadioLabel for="brutoIncome"
                background={incomeType === 'bruto' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'bruto' ? 'white' : 'black'}>
                {incomeType === 'bruto' ? <><BsCheck />Bruto</> : 'Bruto'}
              </RadioLabel>
              <RadioInput type="radio" id="liquidoIncome" name="incomeType" value="liquido" onChange={(e) => setIncomeType('liquido')} />
              <RadioLabel for="liquidoIncome"
                background={incomeType === 'liquido' ? '#ed8e53' : '#efefef'}
                color={incomeType === 'liquido' ? 'white' : 'black'}>
                {incomeType === 'liquido' ? <><BsCheck />Líquido</> : 'Líquido'}
              </RadioLabel>
            </RadioInputsDiv>
          </FormElement>
    );
};

export default IncomeTypeSelector;