import styled from "styled-components";

export const MainContent = styled.main`
    background-color: #efefef;
    width: 100%;
`;

export const RadioInputsDiv = styled.div`
    display: inline-flex;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
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
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    :not(:last-of-type) {
        border-right: 1px solid black;
    }
`;