
class CouponPage {
  go() {
    cy.visit('/cupons')
  }

  copyCode() {
    cy.get('#card-coupons-0')
    .find('.card-coupon__code')
    .click();
  }

  checkMessage() {
    cy.get("#tooltip-coupon")
      .should("be.visible")
      .contains("Código copiado")
  }

  cardDescription() {
    cy.get('#card-coupons-0')
    .find('.card-coupon__description')
    .click();
  }

  checkModal() {
    cy.get('app-modal-coupon-description')
      .should("be.visible")
      .contains('Cupom')
  }

}

export default new CouponPage()