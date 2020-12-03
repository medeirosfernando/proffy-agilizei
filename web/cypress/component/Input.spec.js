/// <reference types="cypress" />

import React from 'react'
import Input from '../../src/components/Input'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('Input component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Input/styles.css'

    it('deve ser renderizado com sucesso', () => {
        const label = 'Nome Completo'
        const input = 'name'

        mount(
            <Router> 
                <form id="search-teachers">                      
                    <Input
                        label= { label }
                        input= { name }
                    />
                </form>                
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )
        cy.get('.input-block label').as('label')
        cy.get('@label').then(($elemento) => {
            expect($elemento.css('font')).to.eq('500 14px Poppins')
        })
    })
})