# Testes Automatizados - Projeto Prático Rubeus (por Rafael Felipe)

Este repositório contém testes automatizados usando Cypress para validação de funcionalidades do site, desenvolvido por **Rafael Felipe**.

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Instale as dependências:
   ```
   npm install
   ```

## Execução dos Testes

Para rodar os testes em modo headless:

```
npx cypress run
```

Para abrir o Cypress e executar os testes pelo painel:

```
npx cypress open
```

## Estrutura do Projeto

- `cypress/e2e/`: Contém os arquivos de teste.
- `cypress.config.js` ou `cypress.json`: Configuração do Cypress.

## BaseUrl

A baseUrl está configurada em `cypress.config.js` para facilitar o acesso ao site testado.

## Contribuição

Pull requests são bem-vindos!

## Licença

Este projeto está sob a licença MIT.
