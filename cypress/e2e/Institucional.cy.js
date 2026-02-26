describe('Site Institucional - Testes Automatizados', () => {

    const baseUrl = 'https://qualidade.apprbs.com.br/site'

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it('CT-010 - Não deve conter texto Lorem Ipsum na página', () => {

        cy.contains('Lorem ipsum', { matchCase: false })
            .should('not.exist')

    })

    it('CT-011 - Botão de eventos não deve redirecionar para página genérica', () => {

        cy.get('#i6b9dk').click()
            .should('have.attr', 'href')
            .and('not.include', '"https://cursos.rubeus.com.br/analista-rubeus/"')
    })

    it.only('CT-012 - Formulário não deve bloquear por Base Legal invisível', () => {

        cy.get('[name="pessoa.nome"]').type('teste teste')
        cy.get('[name="pessoa.emailPrincipal"]').type('teste@email.com')
        cy.get('[name="pessoa.telefonePrincipal"]').type('11999999999')

        cy.contains('button', 'Concluir').click()

        cy.contains('É necessário informar a base legal')
            .should('not.exist')
    })
})
