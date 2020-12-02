/// <reference types="cypress" />

import React from 'react'
import PageHeader from '../../src/components/PageHeader'
import Input from '../../src/components/Input'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'


context('Input component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Input/style.css'

    it('deve ser renderizado com sucesso', () => {
        const label = 'Nome Completo'

        const title = "Que incrível que você quer dar aulas."
        const description = "O primeiro passo é preencher esse formulário de inscrição."

        mount(
            <Router>
                <Input>
                    <label htmlFor={name}>{label}</label>
                    <input type="text" id={name}/>
                    </Input>
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('form .input-block label').as('label')
        cy.get('@label').then(($elemento) => {
            expect($elemento.css('color')).to.eq('rgb(156, 152, 166)')
        })
    });
});