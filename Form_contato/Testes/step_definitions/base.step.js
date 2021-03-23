import { Then } from "cypress-cucumber-preprocessor/steps";
const basePage = require('../page_objects/base.page');
const errorPage = require('../page_objects/error.page');

Then('que abro a página {string}', page => {
	basePage.openUrl(page);
});

Then('sou direcionado para o site {string}', url => {
	basePage.verifyUrl(url);
});

Then('insiro o {string} no campo nome', (text) => {
	basePage.insertName(text);
});

Then('insiro o {string} no campo email', (text) => {
	basePage.insertEmail(text);
});

Then('insiro o {string} no campo telefone', (text) => {
	basePage.insertPhoneNumber(text);
});

Then('escrevo a {string} no campo mensagem', (text) => {
	basePage.insertMessage(text);
});


Then('clico em me envie uma cópia', () => {
	basePage.sendMeACopy();
});

Then('clico em enviar', () => {
	basePage.sendBtn();
});

Then('não insiro nenhum valor nos campos nome, email, telefone e mensagem', () => {
	errorPage.validateFields();
});

Then('clico em enviar sem preencher os campos', () => {
	errorPage.sndBtnWithoutInformationInputedInFields();
});

Then('verifico que há alerta nos campos', () => {
	errorPage.validateAlertMessage();
});