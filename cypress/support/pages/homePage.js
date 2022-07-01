class HomePage {

  go() {
    cy.visit('/home')
  }

  clickOnCuponsAndVerifyPageVisit() {
    cy.get('.nav-link')
      .contains('Cupons')
      .click()
    cy.url()
      .should('include', '/cupons') 
    cy.get('.page-coupon__content__filter__title > p')
      .contains('Todos os Cupons')
  }

  clickOnParceirosAndVerifyPageVisit() {
    cy.get('.nav-link')
      .contains('Parceiros')
      .click()
    cy.url()
      .should('include', '/parceiros') 
    cy.get('.page-parner__content__filter__title > p')
      .contains('Todos os Parceiros')
  }

  clickOnCategoriasAndVerifyPageVisit() {
    cy.get('.nav-link')
      .contains('Categorias')
      .click()
    cy.get('.dropdown-menu > :nth-child(1)')
      .click()
    cy.url()
      .should('include', '/parceiros') 
    cy.get('.page-parner__content__filter__category > h3')
      .contains('Categoria')
  }

  clickOnDuvidasAndVerifyPageVisit(){
    cy.clickMenuHamburguer();
    cy.get('#duvidas > span')
      .should('exist')
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/duvidas') 
    cy.get('.doubts__title > h4')
      .contains('Dúvidas')
  }

  clickOnComoFuncionaAndVerifyPageVisit(){
    cy.clickMenuHamburguer();
    cy.get('#como-funciona > span')
      .should('exist')
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/como-funciona') 
    cy.get('.container > h4')
        .contains('Como Funciona')
  }

  clickOnLembradorAndVerifyPageVisit(){
    cy.clickMenuHamburguer();
    cy.get('#lembrador > span')
      .should('exist')
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/lembrador')
  }

  clickOnCashbackAndVerifyPageVisit(){
    cy.clickMenuHamburguer();
    cy.get('#cashback')
      .should('exist')
      .should('be.visible')
      .click()
    cy.url()
      .should('include', '/cashback')
    cy.get('.card-text__content > h2')
      .contains('Cashback')
  }

  clickOnFirstHomeBanner() {
    cy.get('#desktop-image-slide0')
      .click()
  }

  clickOnFirstOfferCard() {
    cy.get('#image-slide0')
      .click()
  }

  clickAllPartners() {
    cy.get(".partners-home .partners-home__content a")
      .contains("Ver Todos")
      .click()
  }

}

export default new HomePage()