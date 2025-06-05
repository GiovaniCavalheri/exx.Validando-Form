  #  Validação de Formulário com JavaScript

Este é um exercício prático de validação de formulário feito com HTML, CSS e JavaScript. O objetivo é garantir que os campos de nome e e-mail sejam preenchidos corretamente antes de permitir o envio do formulário.

  ## Funcionalidades

-  Verificação se o campo **nome** está preenchido.
-  Verificação se o campo **e-mail** está no formato correto:
  - Contém `@`
  - Contém `.` depois do `@`
  - Não termina com `@`
-  Exibe mensagens de erro específicas abaixo de cada campo.
-  Impede o envio do formulário caso existam erros.

  ## Tecnologias usadas

- HTML
- CSS
- JavaScript (puro)

  ## Como funciona

1. O botão de envio (`submit`) é interceptado com `preventDefault()`.
2. Os valores dos campos são verificados com `trim()`, `indexOf()` e `endsWith()`.
3. Se houver erros, as mensagens aparecem abaixo dos campos.
4. Se estiver tudo certo, o formulário pode ser enviado.

  ##  Aprendizados

- Manipulação de DOM com `querySelector` e `addEventListener`
- Técnicas de validação básica de campos
- Feedback visual com mensagens de erro
- Controle de fluxo com `if` e `return`

---

Feito com dedicação no 1º termo da faculdade.


