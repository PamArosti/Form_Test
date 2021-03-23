#language: pt
Funcionalidade: Envio de formulário de contato
   
Cenário: Formulário de contato deve ser enviado, após todos os campos estarem preenchidos
   Dado que abro a página "/"
   Quando sou direcionado para o site "http://localhost:3000/"
   E não insiro nenhum valor nos campos nome, email, telefone e mensagem
   E clico em enviar sem preencher os campos
   Então verifico que há alerta nos campos

    
    