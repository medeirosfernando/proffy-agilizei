/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
const Chance = require('chance')
const chance = new Chance()

class Cadastro {
    acessarPagina() {
        cy.get(el.link).click()
    }

    preencherFormulario() {
        cy.get(el.name).type(chance.first())
        cy.get(el.avatar).type(chance.avatar({protocol: 'https'}))
        cy.get(el.whatsapp).type(chance.phone())
        cy.get(el.bio).type(chance.sentence())
        cy.get(el.subject).select('Artes')
        cy.get(el.cost).type(chance.integer( { min: 50, max: 200}))
        cy.get(el.week_day).select('Segunda-feira')
        cy.get(el.from).type('22:00')
        cy.get(el.to).type('23:00')
    }

    submeterFormulario() {
        cy.get(el.button).click()
    }
}

export default new Cadastro()