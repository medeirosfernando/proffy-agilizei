/// <reference types="cypress" />

import React from 'react'
import PageHeader from '../../src/components/PageHeader'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/PageHeader/styles.css'

    it('deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "O primeiro passo é preencher esse formulário de inscrição."

        mount(
            <Router>
                <PageHeader 
                title= { title }
                description= { description }
            />
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }            
        )
        // Usando Find e Children
        cy.get('.page-header').as('header')
        cy.get('@header').find('strong').as('title')
        // cy.get('@header').children('p').as('description')

        cy.get('p').as('description')
        
        cy.get('@title').should('have.text', title)
        cy.get('@description').should('have.text', description)

        cy.get('@title').then(($elemento) => {
            cy.log($elemento.css('color'))
            expect($elemento.css('color')).to.eq('rgb(255, 255, 255)')
            expect($elemento.css('max-width')).to.eq('350px')
            expect($elemento.css('font')).to.eq('700 36px / 42px Archivo')
        })

        cy.get('@header').then(($elemento) => {
            cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.eq('rgb(130, 87, 229)')
        })
    });
});