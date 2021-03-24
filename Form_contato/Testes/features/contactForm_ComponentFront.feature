#language: pt
Funcionalidade: Envio de formulário de contato
   
Cenário: Validar mensagens de erros de todos os campos que não houveram preenchimento
   Dado que abro a página "/"
   Quando sou direcionado para o site "http://localhost:3000/"
   E não insiro nenhum valor nos campos nome, email, telefone e mensagem
   E clico em enviar sem preencher os campos
   Então verifico que há alerta nos campos

    
    