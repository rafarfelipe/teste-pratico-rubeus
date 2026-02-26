describe('Página de Certificação - Testes Automatizados', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // Validação de que o botão "Saiba mais" não possui um href válido
    it('CT-001 - Deve validar que o botão não possui href válido', () => {
        cy.contains('Saiba mais')
            .should('not.have.attr', 'href')
    })

    // Validação de campos obrigatórios para avançar no processo de certificação
    it('CT-002 – Não deve permitir avançar sem Nome e Telefone', () => {
        cy.get('[name="pessoa.emailPrincipal"]').type('teste@email.com')
        cy.contains('Avançar').click()

        cy.contains('Nome').should('be.visible')
        cy.contains('Telefone').should('be.visible')
    })

    // Validação de base legal inexistente
    it('CT-003 – Não deve bloquear por base legal inexistente', () => {
        cy.get('[name="pessoa.nome"]').type('Teste')
        cy.get('[name="pessoa.telefonePrincipal"]').type('11999999999')
        cy.get('[name="pessoa.emailPrincipal"]').type('teste@email.com')

        cy.contains('button', 'Avançar').click()

        cy.contains('É necessário informar a base legal')
            .should('be.visible')
    })

    // Botão “Quero me certificar” (barra azul inferior) redireciona para site externo
    it('CT-004 – Validar redirecionamento do botão “Quero me certificar”', () => {
        cy.contains('Quero me certificar').click()
            .should('have.attr', 'href', 'https://rubeus.com.br/')
            .and('have.attr', 'target', '_blank')

    })

    // Validação de máscara dinâmica do telefone
    it('CT-005 – Deve aplicar máscara ao digitar telefone', () => {
        cy.get('[name="pessoa.telefonePrincipal"]')
            .type('11999999999')

        cy.get('[name="pessoa.telefonePrincipal"]')
            .should('have.value', '(11) 99999-9999')

    })

    it('CT-006 – Ao clicar no botão "Quero me certificar", deve redirecionar para o site externo correto', () => {
        cy.get('#i72bga')
            .should('have.attr', 'href', 'https://rubeus.com.br/')
            .and('have.attr', 'target', '_blank')
            .click()
    })

    it('CT-007 – Não deve conter link externo indevido (Google)', () => {
        cy.get('#ixy3u1')
            .should('not.have.attr', 'href', 'https://www.google.com/')
            .click()
    })
})