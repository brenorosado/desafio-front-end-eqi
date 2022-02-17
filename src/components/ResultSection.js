import {
    SectionOfResult, ContentContainer, BoxInformation, IndicatorsArticle, GraphicArticle, SideLegend,
    GraphicColumn, GraphicCointainer, Graphic, ColumnContainer, LegendContainer, ColorSymbol
} from "../styles/resultSection";

const ResultSection = ({ result }) => {
    const { valorFinalBruto, aliquotaIR, valorPagoIR, valorTotalInvestido, ganhoLiquido, graficoValores } = result;

    console.log('com aporte', graficoValores.comAporte);

    return (
        <SectionOfResult>
            <ContentContainer>
                <h2>Resultado da Simulação</h2>
                <IndicatorsArticle>
                    <BoxInformation>
                        <span><strong>Valor final Bruto</strong></span>
                        <span>R$ {valorFinalBruto.toString().replace('.', ',')}</span>
                    </BoxInformation>
                    <BoxInformation>
                        <span><strong>Alíquota do IR</strong></span>
                        <span>{aliquotaIR.toString().replace('.', ',')}%</span>
                    </BoxInformation>
                    <BoxInformation>
                        <span><strong>Valor Pago em IR</strong></span>
                        <span>R$ {valorPagoIR.toString().replace('.', ',')}</span>
                    </BoxInformation>
                    <BoxInformation>
                        <span><strong>Valor final Líquido</strong></span>
                        <span><i>R$ {valorFinalBruto.toString().replace('.', ',')}</i></span>
                    </BoxInformation>
                    <BoxInformation>
                        <span><strong>Valor Total Investido</strong></span>
                        <span>R$ {valorTotalInvestido.toString().replace('.', ',')}</span>
                    </BoxInformation>
                    <BoxInformation>
                        <span><strong>Ganho Líquido</strong></span>
                        <span><i>R$ {ganhoLiquido.toString().replace('.', ',')}</i></span>
                    </BoxInformation>
                </IndicatorsArticle>
                <GraphicArticle>
                    <h4>Projeção de Valores</h4>
                    <GraphicCointainer>
                        <SideLegend>Valor (R$)</SideLegend>
                        <div>
                            <Graphic>
                                {
                                    Object.keys(graficoValores.comAporte).map(item => {

                                        return (
                                            <ColumnContainer>
                                                <GraphicColumn color={'#ed8e53'} height={`${Math.floor(graficoValores.comAporte[item] / 18)}px`} />
                                                <GraphicColumn color={'black'} height={`${Math.floor(graficoValores.semAporte[item] / 18)}px`} />
                                                <p>{item}</p>
                                            </ColumnContainer>
                                        )
                                    })
                                }
                            </Graphic>
                            <h5>Tempo (meses)</h5>
                            <LegendContainer>
                                <div>
                                    <ColorSymbol color={'#ed8e53'} />
                                    <span>Com aporte</span>
                                </div>
                                <div>
                                    <ColorSymbol color={'black'} />
                                    <span>Sem aporte</span>
                                </div>
                            </LegendContainer>
                        </div>
                    </GraphicCointainer>
                </GraphicArticle>
            </ContentContainer>
        </SectionOfResult>
    );
};

export default ResultSection;