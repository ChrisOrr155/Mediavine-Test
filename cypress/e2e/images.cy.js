describe('broken images', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/broken_images', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog')
        cy.stub(win.console, 'error').as('consoleError')
      }
    }),

    cy.get('.example > img').each((img) => {
      cy.wrap(img)
        .invoke('attr', 'src')
        .then((imgSrc) => {
          if (imgSrc.includes('asdf') || imgSrc.includes('hjkl')) {
            cy.log(`Verify broken image by src: /${imgSrc}`);
            expect(img[0].naturalWidth).to.be.eql(0);
            expect(img[0].naturalHeight).to.be.eql(0);
            cy.request({
              url: imgSrc,
              failOnStatusCode: false,
            }).then((response) => {
              expect(response.status).to.eq(404);
            });
          } else {
            cy.log(
              `Verify image where src is: /${imgSrc}`,
            );
            expect(img[0].naturalWidth).to.be.greaterThan(0);
            expect(img[0].naturalHeight).to.be.greaterThan(0);
            cy.request(imgSrc).then((response) => {
              expect(response.status).to.eq(200);
            });
          }
        });
    });
    //cy.get('img[src="https://the-internet.herokuapp.com/img/avatar-blank.jpg"]').should('be.visible');
    //cy.get('@consoleError').should('be.calledOnce')
  })
})