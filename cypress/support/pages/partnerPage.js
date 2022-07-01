const TIMEOUT_REDIRECT = 6000; // 6s
const REGEX_URL_PARCEIRO = /parceiros\/\w*/; // parceiros/*

class PartnerPage {

  redirectPartnerPage() {
    //espera o tempo de renderização da página para pegar a URL.
    cy.location("pathname", { timeout: TIMEOUT_REDIRECT }).should("match", REGEX_URL_PARCEIRO);
  }

  userShouldBeAtPartnerPage() {
    cy.get(".page-parner__content__filter__title p").should('contain', " Todos os Parceiros");
  }
}

export default new PartnerPage()