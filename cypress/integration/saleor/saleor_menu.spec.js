/// <reference types="cypress" />

context('As a customer I want to go to Apparel web page.', () => {
  beforeEach(() => {
    cy.visit('https://demo.saleor.io')
  })

  it('Go to Apparel page and assert it', () => {

    cy.get(':nth-child(3) > .main-menu__nav-dropdown > :nth-child(1) > a').click()
    cy.get('.breadcrumbs__active > a').contains('Apparel');

  })
})