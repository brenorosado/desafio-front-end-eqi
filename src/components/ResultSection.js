import { SectionOfResult } from "../styles/resultSection";

const ResultSection = ({ result }) => {
    const { valorFinalBruto } = result;

    
    return (
        <SectionOfResult>
            <h2>Resultado da Simulação</h2>
            <p>{valorFinalBruto ? valorFinalBruto : 'Ta vindo nao'}</p>
        </SectionOfResult>
    );
};

export default ResultSection;