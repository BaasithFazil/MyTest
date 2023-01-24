/// <reference types="cypress" />


//for every component this will trigger URL..
beforeEach(()=> {
    cy.visit('http://demo.univizer.io/')
})

    describe("Url Test", ()=> {
        it('URL Command', () => {
            cy.url().should('include', "univizer.io").and('eq', 'http://demo.univizer.io/').and('contain', "univizer")

            cy.title().should('include', "IIT").and('eq', "IIT").and('contain', "IT")
        });
    })


    describe("Logo Check", ()=> {
        it("Logo is visible", ()=> {
            cy.get('.imgLogo').should("be.visible");
        })
    })

        //navigation Bar
    describe("Home Button test 01(Home)", ()=> {
        it("Length test", ()=> {
        cy.get(".ant-space-item").should('have.length', 4)
    })

        it("Home button", ()=> {
            // cy.visit('http://demo.univizer.io/')
        cy.get('*[class^="ant-btn ant-btn-default ant-btn-lg ant-btn-background-ghost homeNavBarButton"]').click()
        })
    })

    describe("Navigation dropdown tests - 02 (Share)", () => {

    // facebook tests
    it("Share Dropdown - Facebook", ()=> {

        // cy.visit('http://demo.univizer.io/')
        cy.get('*[class^="ant-btn ant-btn-default ant-btn-lg ant-btn-background-ghost homeNavBarButton"]')
        cy.get('*[class^="ant-dropdown-trigger ant-dropdown-link"]').first().click()
        cy.get('*[class^="ant-dropdown-menu-item ant-dropdown-menu-item-active ant-dropdown-menu-item-only-child"]').eq(0).click()
    })

    it("Share Dropdown - Twitter", ()=> {
        // cy.visit('http://demo.univizer.io/')
        cy.get('*[class^="ant-btn ant-btn-default ant-btn-lg ant-btn-background-ghost homeNavBarButton"]')
        cy.get('*[class^="ant-dropdown-trigger ant-dropdown-link"]').first().click()
        cy.get('*[class^="ant-dropdown-menu-item ant-dropdown-menu-item-active ant-dropdown-menu-item-only-child"]').eq(1).click()
    })

    it("Share Dropdown - Email", ()=> {
        // cy.visit('http://demo.univizer.io/')
        cy.get('*[class^="ant-btn ant-btn-default ant-btn-lg ant-btn-background-ghost homeNavBarButton"]')
        cy.get('*[class^="ant-dropdown-trigger ant-dropdown-link"]').first().click()
        cy.get('*[class^="ant-dropdown-menu-item ant-dropdown-menu-item-active ant-dropdown-menu-item-only-child"]').eq(2).click()

        cy.contains('label', "Email To")
        cy.get("[data-testid=input]").click().type("Baasith@gmail.com")
        cy.contains('label', "Your Email Address")
        cy.get('input[name="senderEmail"]').type('baasith@gmail.com')
        cy.contains('label', "Your Message")

        cy.get('*[class^="ant-input inpt"]').last().type("Hey there, I just wanted to know about some course info!")

        cy.get("[type=submit]").click()
        
    })

    it("Share Dropdown - copy clipboard", ()=> {
        cy.get('*[class^="ant-dropdown-trigger ant-dropdown-link"]').first().click()
        cy.get('*[class^="ant-dropdown-menu-item ant-dropdown-menu-item-active ant-dropdown-menu-item-only-child"]').eq(3).click()
    })



})

describe("Language selecting test - 03", ()=> {
    it("selecting the language", ()=> {
        // cy.visit('http://demo.univizer.io/')
        cy.get('*[class^="ant-select-selection-item"]').click()

        // need to put content for selecting a language.
        cy.get('*[class^="ant-select-selection-item"]').click()

        
    })
})