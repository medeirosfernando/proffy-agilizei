/// <reference types="cypress" />

context('Landing Page', () => {

    // Executando o teste passando o tamanho da página via linha de comando
    // Exemplo: npx cypress open --config viewportWidth=1090 viewportheigth=600 

    // Para gerar o report coverage, executar o comando: npx nyc report --report=html

    beforeEach(() =>{
        cy.visit('/')
    })

    it('Navegar para página de cadastro de aulas', () => {
        cy.get('div a.give-classes').click()
        cy.url().should('contain', 'give-classes')
    });

    it('Navegar para página de pesquisa de professores', () => {
        cy.get('div a.study').click()
        cy.url().should('contain', 'study')
    })
})

