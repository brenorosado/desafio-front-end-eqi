import { FormElement, RadioInputsDiv, RadioInput, RadioLabel } from "../styles/selectors";
import { BsCheck, BsInfoCircle } from "react-icons/bs";

const IndexingTypeSelector = ({ indexingType, setIndexingType }) => {
    return (
        <FormElement>
            <span>Tipos de indexação <BsInfoCircle /></span>
            <RadioInputsDiv>
                <RadioInput type="radio" id="preIndexing" name="indexingType" value="pre" onChange={(e) => setIndexingType('pre')} />
                <RadioLabel for="preIndexing"
                    background={indexingType === 'pre' ? '#ed8e53' : '#efefef'}
                    color={indexingType === 'pre' ? 'white' : 'black'}>
                    {indexingType === 'pre' ? <><BsCheck />PRÉ</> : 'PRÉ'}
                </RadioLabel>
                <RadioInput type="radio" id="posIndexing" name="indexingType" value="pos" onChange={(e) => setIndexingType('pos')} />
                <RadioLabel for="posIndexing"
                    background={indexingType === 'pos' ? '#ed8e53' : '#efefef'}
                    color={indexingType === 'pos' ? 'white' : 'black'}>
                    {indexingType === 'pos' ? <><BsCheck />PÓS</> : 'PÓS'}
                </RadioLabel>
                <RadioInput type="radio" id="ipcaIndexing" name="indexingType" value="ipca" onChange={(e) => setIndexingType('ipca')} />
                <RadioLabel for="ipcaIndexing"
                    background={indexingType === 'ipca' ? '#ed8e53' : '#efefef'}
                    color={indexingType === 'ipca' ? 'white' : 'black'}>
                    {indexingType === 'ipca' ? <><BsCheck />FIXADO</> : 'FIXADO'}
                </RadioLabel>
            </RadioInputsDiv>
        </FormElement>
    );
};

export default IndexingTypeSelector;