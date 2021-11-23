#language: pt
Funcionalidade: Envio de formulário de contato
   
Esquema do Cenário: Formulário de contato deve ser enviado, após todos os campos estarem preenchidos
   Dado que abro a página "/"
   Quando sou direcionado para o site "http://localhost:3000/"
   E insiro o "<Nome>" no campo nome
   E insiro o "<Email>" no campo email
   E insiro o "<Telefone>" no campo telefone
   E escrevo a "<Mensagem>" no campo mensagem
   E clico em me envie uma cópia
   Entao clico em enviar
   

   Exemplos:
            | Nome   | Email         | Telefone | Mensagem  |
            | Pamela | pera@pera.com | 1999999999     | Batatinha |

    