context("Página inicial", () => {
    it('Visitar a pagina inicial e checar se o IPCA e CDI foram carregados', () => {
        cy.visit('http://localhost:3001');
        cy.get('input').eq(9).should('have.value', '10,06%');
        cy.get('input').eq(10).should('have.value', '9,15%');
    });

    it('Visitar a pagina inicial e testar se os radio inputs estao funcionando', () => {
        cy.visit('http://localhost:3001');
        cy.get('label').eq(1).click().should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('label').eq(0).click().should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('label').eq(2).click().should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('label').eq(3).click().should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('label').eq(4).click().should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Visitar a pagina inicial e testar se as mascaras de todos os inputs type text estao funcionando', () => {
        cy.visit('http://localhost:3001');
        cy.get('input').eq(5).type('12345').should('have.value', 'R$ 123,45');
        cy.get('input').eq(6).type('56789').should('have.value', 'R$ 567,89');
        cy.get('input').eq(7).type('12').should('have.value', '12');
        cy.get('input').eq(8).type('10').should('have.value', '10%');
    });

    it('Visitar a pagina inicial, preencher todos os inputs e checar se o botao de limpar campos esta funcionando', () => {
        cy.visit('http://localhost:3001');
        cy.get('input').eq(5).type('12345');
        cy.get('input').eq(6).type('56789');
        cy.get('input').eq(7).type('12');
        cy.get('input').eq(8).type('10');
        cy.get('input').eq(11).click();
        cy.get('input').eq(5).should('have.value', '');
        cy.get('input').eq(6).should('have.value', '');
        cy.get('input').eq(7).should('have.value', '');
        cy.get('input').eq(8).should('have.value', '');
    });

    it('Visitar a pagina inicial e testar se a simulacao esta carregando ao clicar no botao Simular', () => {
        cy.visit('http://localhost:3001');
        cy.get('input').eq(12).click();
        cy.wait(3000);
        cy.get('h2').eq(1).contains('Resultado da Simulação');
    });
});