/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - cadastrar novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Name Test",
                "avatar": "https://tecnoblog.net/wp-content/uploads/2020/05/avatar-de-facebook-de-mark-zuckerberg-e1589902366337-700x460-340x191.png",
                "whatsapp": "2199990000",
                "bio": "Lorem Ipson",
                "subject": "Inglês",
                "cost": 100,
                "schedule": [
                    {
                        "week_day": 0, 
                        "from": "17:23", 
                        "to": "18:23"
                    }
                ]                    
            }
        }).then((resClasses) => {
            expect(resClasses.status).to.eq(201)
            expect(resClasses.duration).to.lt(50)
            expect(resClasses.duration).to.gt(5)
            expect(resClasses.body[0]).to.have.property('class_id').an('number')
            expect(resClasses.body[0]).to.have.property('week_day').an('number')
            expect(resClasses.body[0]).to.have.property('from').an('number')
            expect(resClasses.body[0]).to.have.property('to').an('number')    
            expect(resClasses.headers)
             .to.have.property('x-powered-by') 
            .an('string') 
        })
    })
})
