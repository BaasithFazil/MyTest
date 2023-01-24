/// <reference types="cypress" />




beforeEach(()=> {
    cy.visit('http://demo.univizer.io/')

})

describe("Body test - filter", ()=> {
    

    //FILTER TESTS first textbox
    it("Filter option test - 01", ()=> {
        //first textbox
        cy.get('*[class^="ant-btn ant-btn-default ant-btn-background-ghost inFilterButton"]').click()
        cy.get('*[class^="ant-select-selector"]').eq(1).type('india{enter}', { delay: 200 }).type('pakistan{enter}', { delay: 200 }).type('Sri Lanks{enter}', { delay: 200 }).type('{esc}')

        //clear filter for first text box
        cy.get('*[class^="ant-typography clear_search"]').click()

        // cy.get('[data-icon="close"]').eq(0).click()
        // cy.get('[data-icon="close"]').eq(1).click()
        // cy.get('[data-icon="close"]').last().click()


        //second textbox
        cy.get('*[class^="ant-select-selector"]').eq(2).type('university{enter}',{ delay: 100 })
        cy.get('[data-icon="close-circle"]').eq(0).click()

        //third textbox
        cy.get('*[class^="ant-select-selection-search-input"]').eq(3).type('university{enter}', { delay: 100 })

        //clear filter
        cy.get('*[class^="ant-typography clear_search"]').click()

    })

})



describe("Header Text test",()=> {
    it("Text contains", ()=> {
        cy.get('*[class^="bannerHeader bannerHeaderMobile"]').contains('Start Chatting with our Experts')
    })

    it("tabs checking", ()=> {

        cy.get('*[id^="rc-tabs-0-tab-0"]').click()
        cy.get('*[id^="rc-tabs-0-tab-1"]').click()

        cy.get('*[id^="rc-tabs-0-tab-0"]').click()
    })


    it("say hello", ()=> {

        //sending messages
        cy.get('*[class^="ant-btn ant-btn-primary inUserChatButton inUserChatButtonMobile"]').eq(0).click()

        cy.get('*[class^="inUserChatText inUserChatTextMobile"]').eq(0).click()
        cy.get('*[class^="inUserChatText inUserChatTextMobile"]').eq(1).click()
        
        cy.get('[type="checkbox"]').check()

        cy.get('*[class^="ant-btn ant-btn-primary btnContinue"]').click()

        cy.get('*[class^="ant-input yourNameInputIn"]').type('Baasith', { delay: 100 })
        cy.get('*[class^="ant-input yourEmailAddressIn"]').type('Baasith@gmail.com', { delay: 100 })
        cy.get('*[class^="ant-input yourMobileNumberIn"]').type('077-2287228', { delay: 100 })

        cy.get('[type="checkbox"]').eq(0).check()
        cy.get('[type="checkbox"]').eq(1).check()
        cy.get('[type="checkbox"]').eq(2).check()

        cy.get('*[class^="sendMessageButtonText"]').click()

        cy.get('[data-icon="close"]').click()
        
        

        
    })
})








