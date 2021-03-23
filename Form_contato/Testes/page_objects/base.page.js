const basePage = {
    openUrl: page => {
        cy.visit(page);
    },
    verifyUrl: url => {
        cy.url().should('include', url);
    },
    
    insertName: (text) => {
        cy.get(pageObjects.inputName())
            .first()
            .focus()
            .type(text)
            .wrap(text)
            .should('eq', text)
    },
    
    insertEmail: (text) => {
        cy.get(pageObjects.inputEmail())
            .first()
            .focus()
            .type(text)
            .wrap(text)
            .should('eq', text)
    },

    insertPhoneNumber: (text) => {
        cy.get(pageObjects.inputPhoneNumber())
            .first()
            .focus()
            .type(text)
            .wrap(text)
            .should('eq', text)
    },

    insertMessage: (text) => {
        cy.get(pageObjects.inputMessage())
            .first()
            .focus()
            .type(text)
            .wrap(text)
            .should('eq', text)
    },

    sendMeACopy: () => {
        cy.get(pageObjects.checkBox())
        .should('not.be.visible') 
        .first().check({ force: true })
        .should('be.checked')
    },

    sendBtn: () => {
        cy.get(pageObjects.sendBtn())
        .should('be.enabled')
            .click({force: true})
        
        cy.on('window:alert', cy.stub().as('alert'))
        cy.get('@alert').should('have.been.calledWithExactly', 'Obrigado, em breve entraremos em contato!')
    },


};

const pageObjects = {
    inputName () { return `[data-test = "input-name"]`},
    inputEmail () { return `[data-test = "input-email"]`},
    inputPhoneNumber () { return `[data-test = "input-phone"]`},
    inputMessage () { return `[data-test = "input-message"]`},
    checkBox () { return `[data-test = "send-copy"]`},
    sendBtn () { return `[data-test = "send-btn"]`},
};

module.exports = basePage;

