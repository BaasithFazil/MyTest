/// <reference types="cypress" />


describe("Card Test", ()=> {

    beforeEach(()=> {
        cy.visit("http://demo.univizer.io/")
    })

    it("01-Text & relavant things", ()=> {

    cy.get('*[class^="ant-ribbon-text"]').should('contain', '')
    cy.get('*[class^="title"]').should('contain', '')
    cy.get('*[class^="studiesTitle"]').should('contain', '')
    cy.get('*[class^="buddyAvgResponseTime buddyAvgResponseTimeMobile"]').should('contain', '')
    })


    it("02-Say Hello Button & form", ()=> {

        cy.get('*[class^="ant-btn ant-btn-primary inUserChatButton inUserChatButtonMobile"]').first().click()

        cy.get('*[class^="ant-input textAreaIn"]').type('What are the degree programmes are available?', {delay: 20}).clear()

        cy.get('*[class^="inUserChatText inUserChatTextMobile"]').eq(0).click()
        cy.get('*[class^="inUserChatText inUserChatTextMobile"]').eq(1).click()
        // cy.get('*[class^="ant-input textAreaIn"]').clear()

        cy.get('*[class^="ant-checkbox-input"]').check()
        // cy.get('*[class^="ant-checkbox-input"]').uncheck()

        // terms and condition 
        cy.get('*[class^="termsOfUseText"]').click()

        //pros & cons 
        cy.get('*[class^="chatRulesText popoverLayout"]').click()
    

        cy.get('*[class^="ant-modal sayHelloPopupLayout"]').click( { force:true })

        //close button if continuing no need
        // cy.get('*[class^="ant-btn ant-btn-primary ant-btn-background-ghost btnClose"]').click()

        // continue button
        cy.get('*[class^="ant-btn ant-btn-primary btnContinue"]').click()


        //this is text checking
        cy.get('*[class^="ant-form-item-required"]').eq(0).should('contain', 'Your Name')
        cy.get('*[class^="ant-form-item-required"]').eq(1).should('contain', 'Your Email Address')
        cy.get('*[class^="ant-form-item-required"]').eq(2).should('contain', 'Your Mobile Number')


        cy.get('*[class^="checkBoxMainText"]').should('contain', 'How would you like to get notified?')

        // cy.get('*[class^="ant-checkbox-wrapper ant-checkbox-wrapper-in-form-item ant-checkbox-group-item"]').eq(0).should('contain', 'EMAIL')

        cy.get('*[class^="ant-checkbox-input"]').eq(0).check()
        cy.get('*[class^="ant-checkbox-input"]').eq(1).check()
        cy.get('*[class^="ant-checkbox-input"]').eq(2).check()



        // textbox writing

        cy.get('*[class^="ant-input yourNameInputIn"]').type("Baasith", {delay: 200})
        cy.get('*[class^="ant-input yourEmailAddressIn"]').type("Baasith@gmail.com", {delay: 200})
        cy.get('*[class^="ant-input yourMobileNumberIn"]').type("ramos@321", {delay: 200})

        cy.get('*[class^="ant-btn ant-btn-primary ant-btn-lg btnSendMessage"]').click()
        
        
        cy.get('[data-icon="close"]').eq(1).click()
        
    })

    // it("03-Let us know page",()=> {

    //     cy.get('*[class^="ant-form-item-required"]').should('contain', "Your Name:")
    //     // it("text confirmations", ()=> {
    //     //     cy.get('*[class^="ant-form-item-required"]').should('contain', "Your Name:")


            
    //     // })
    // })


})