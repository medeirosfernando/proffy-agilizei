/// <reference types="cypress" />

import cadastro from '../../support/pages/cadastro'


context('Cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('deve cadastrar novo professor', () => {
        cadastro.acessarPagina()
        cadastro.preencherFormulario()
        cadastro.submeterFormulario()               

        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
});