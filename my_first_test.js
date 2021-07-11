///<reference types="cypress"/>

it('Google test', function(){
cy.visit('https://www.google.com/')
cy.get('#L2AGLb > .jyfHyd').click()
cy.get('.gLFyf').type('Automation step by step{enter}')
//cy.visit('https://www.altinn.no/')
})

it.only('Altinn test', function(){
cy.visit('https://accounts.google.com/')
cy.wait(2000)
cy.get('body').type('vanithaseeralan@gmail.com')
//cy.wait(1000)
cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click().wait(1000)
//cy.wait(1000)

})

