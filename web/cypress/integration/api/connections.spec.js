/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
    it('GET - obter total de conexões realizadas', () => {
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((resConnections) => {
            expect(resConnections.status).to.eq(200)
            expect(resConnections.duration).to.lessThan(20)
            expect(resConnections.duration).to.lt(20)
            expect(resConnections.body)
            .to.have.property('total')
            .to.be.a('number')
            .gt(5)
            expect(resConnections.body.total)
            .an('number')
            .satisfy((totalValue) => { return totalValue >= 5 })

            expect(resConnections.headers)
            .to.have.property('content-type')
            .an('string')
            .to.eq('application/json; charset=utf-8')
        })
    })    
})