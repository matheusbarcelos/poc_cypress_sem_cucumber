import coupon from '../support/pages/couponPage'
import partner from '../support/pages/partnerPage'

describe('Cupons Ganhe Online', () => {
    context('Dado que acesso a tela de cupons', () => {
      beforeEach(() =>{
          coupon.go();
          cy.buttonAcceptAllCookies();
      });

    context('Quando clico no primeiro cupom da tela e apresenta a mensagem de código copiado', () => {
      beforeEach(() => {
        coupon.copyCode()
        coupon.checkMessage()
      });

      it('Então sou redirecionado para a tela do parceiro do cupom', () => {
        partner.redirectPartnerPage();
      }); 
    });

    context('Quando clico em descrição e regras do primeiro cupom', () => {
      beforeEach(() => {
        coupon.cardDescription();
      });

      it('Então deve exibir um modal com as informações', () => {
        coupon.checkModal();
      });
    });
  });
});