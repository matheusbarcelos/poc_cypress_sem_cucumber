import home from '../support/pages/homePage'
import partner from '../support/pages/partnerPage'

describe('Home Ganhe Online', () => {
    context('Dado que acesso a Home do GDO', () => {
      beforeEach(() => {
        home.go();
        cy.buttonAcceptAllCookies();
      });

      it('Quando clico em cada menu na Home do GDO devo ser redirecionado para a pagina do respectivo menu', () => {
        home.clickOnCuponsAndVerifyPageVisit();
        home.clickOnParceirosAndVerifyPageVisit();
        home.clickOnCategoriasAndVerifyPageVisit();
        home.clickOnDuvidasAndVerifyPageVisit();
        home.clickOnComoFuncionaAndVerifyPageVisit();
        home.clickOnLembradorAndVerifyPageVisit();
        home.clickOnCashbackAndVerifyPageVisit();
      });

    context('Quando clico no banner da Home do GDO', () => {
      beforeEach(() => {
        home.clickOnFirstHomeBanner();
      });

      it('Então devo ser redirecionado para a pagina do parceiro', () => {
        partner.redirectPartnerPage();
      });
    });

    context('Quando clico no no card da oferta imperdivel na Home do GDO', () => {
      beforeEach(() => {
        home.clickOnFirstOfferCard();
      });

      it('Então devo ser redirecionado para a pagina do parceiro', () => {
        partner.redirectPartnerPage();
      });
    });

    context('Quando desejo acessar todos os parceiros', () => {
      beforeEach(() => {
        home.clickAllPartners();
      });

      it('Então devo ser redirecionado para a pagina dos parceiros', () => {
        partner.userShouldBeAtPartnerPage();
      });
    });
  });
});