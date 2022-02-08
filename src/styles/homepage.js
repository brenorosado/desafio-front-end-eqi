import styled from "styled-components";

export const MainContent = styled.main`
    background-color: #efefef;
    width: 100%;
    padding: 30px;

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display: grid;
        grid-template-columns: repeat(2, 220px);
        grid-column-gap: 50px;
        grid-row-gap: 20px;
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

export const RadioInputsDiv = styled.div`
    display: inline-flex;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid black;
`;

export const RadioInput = styled.input`
    display: none;
`;

export const RadioLabel = styled.label`
    font-size: 14px;
    height: 40px;
    color: ${props => props.color};
    background: ${props => props.background};
    cursor: pointer;
    transition: background 0.1s;
    width: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    :not(:last-of-type) {
        border-right: 1px solid black;
    }
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