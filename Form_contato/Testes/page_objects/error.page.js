const errorPage = {
    
    validateFields: () => {
        cy.get(pageObjects.inputName())
            .should('be.empty');
        cy.get(pageObjects.inputEmail())
            .should('be.empty');
        cy.get(pageObjects.inputPhoneNumber())
            .should('be.empty');
        cy.get(pageObjects.inputMessage())
            .should('be.empty');
    },

    sndBtnWithoutInformationInputedInFields: () => {
        cy.get(pageObjects.sendBtn())
            .should('be.enabled')
            .click({ force: true })
    },

    validateAlertMessage: () => {
        cy.get('#name')
            .should('have.attr', 'data-validate', 'Necessário inserir nome')
        cy.get('#email')
            .should('have.attr', 'data-validate', 'É necessário um email válido: ex@abc.xyz')
        cy.get('#phone')
            .should('have.attr', 'data-validate', 'Insira um número de telefone')
        cy.get('#message')
            .should('have.attr', 'data-validate', 'Insira alguma mensagem')
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

module.exports = errorPage;

