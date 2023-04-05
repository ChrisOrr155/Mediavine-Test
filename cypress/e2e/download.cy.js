describe('file download', () => {

  const path = require('path');
  const downloadsFolder = Cypress.config('downloadsFolder');

  it('Verify file download', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    
      // Trigger page load
      cy.log(`'click' listener to trigger the page load event`)
        .window()
        .document()
        .then((doc) => {
          doc.addEventListener('click', () => {
            setTimeout(() => {
              doc.location.reload();
            }, 3000);
          });
        });
    cy.log('Create downloads folder').exec('mkdir cypress/downloads', {
      log: true,
      failOnNonZeroExit: false,
    });

    //cy.log(
      //`Verify downloads based on count in folder`,)
      //.task('dynamicFiledownload', 'cypress/downloads')
      //.then((before) => {
        //cy.contains('.txt').click();
        //cy.task('dynamicFiledownload', 'cypress/downloads').then((after) => {
          //expect(after.length).to.be.eq(before.length + 1);
          //const downloadedFileName = after.filter(
            //(file) => !before.includes(file),
          //)[0];
          //expect(downloadedFileName).includes('.txt');
        //});
      //});
  });
});