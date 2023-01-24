/// <reference types="cypress" />

beforeEach(()=> {
    cy.visit('http://demo.univizer.io/')
})


describe("banner test 01", ()=> {
    it("Banner first text paragraph", ()=> {
        cy.get('*[class^="bannerText bannerHeaderTextMobile"]').contains('Tertiary Eductaion Institute of The year')
        cy.get('*[class^="bannerSubText bannerHeaderSubTextMobile"]').contains('IIT has reshaped and revolutionize the higher education sector of Sri Lanka by empowering graduates to become innovators, entrepreneurs and business leaders.')
    })
})

