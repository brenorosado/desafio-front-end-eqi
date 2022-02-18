import styled from "styled-components";
import media from "./media";

export const MainContent = styled.main`
    background-color: #efefef;
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-row-gap: 40px;
    justify-content: center;


    ${media.widescreen`
        grid-template-columns: 530px 800px;
    `}

    h1 {
        text-align: center;
        ${media.widescreen`
            grid-column-start: 1;
            grid-column-end: 3;
        `}
    }
`;

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    form {
        display: grid;
        grid-template-columns: 220px;
        grid-row-gap: 30px;        
        width: 100%;

        ${media.tablet`
            grid-template-columns: repeat(2, 220px);
            grid-row-gap: 40px;  
            grid-column-gap: 50px;
        `}
    }

    span {
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
    }
`;

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NumberInput = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
    background-color: #efefef;
    font-size: 16px;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    :focus {
        outline: none;
    }
`;

export const SubmitInput = styled.input`
    background-color: ${props => props.color};
    outline: none;
    border: none;
    height: 50px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
`;

export const ResetInput = styled.input`
    outline: none;
    height: 50px;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid black;
`;

export const ErrorMessage = styled.span`
    color: red;
`;

export const NormalLabel = styled.label`
    padding-bottom: 10px;
    color: ${props => props.color};
`;