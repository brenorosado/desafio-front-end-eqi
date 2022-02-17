import styled from "styled-components";
import media from "./media";

export const SectionOfResult = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100%;

    span {
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
    }
`;

export const ContentContainer = styled.div`
    max-width: 800px;
`;

export const BoxInformation = styled.div`
    padding: 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 10px #cfcfcf;

    span {
        text-align: center;

        i {
            color: #239410;
            font-style: normal;
        }
    }
`;

export const IndicatorsArticle = styled.article`
    padding: 10px;
    width: 100%;
    max-width: 780px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;

    ${media.tablet`
        grid-template-columns: repeat(3, auto);
    `}
`;

export const GraphicArticle = styled.article`
    max-width: 780px;
    padding: 10px;
    width: 100%;

    h4 {
        font-weight: normal;
    }

    h5 {
        text-align: center;
        font-weight: normal;
        padding: 10px;
    }
`;

export const GraphicCointainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Graphic = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 9%);

    ${media.tablet`
        grid-template-columns: repeat(11, 42px);
    `}
`;

export const SideLegend = styled.h5`
    transform: rotate(-90deg);
    width: 100px;
    margin: 0px -30px;
    text-align: center;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;

export const GraphicColumn = styled.div`
    background-color: ${props => props.color};
    height: ${props => props.height};
    width: 88%;
    margin-top: 3px;
`;

export const LegendContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        align-items: center;
        margin: 0px 10px;
    }
`;

export const ColorSymbol = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;