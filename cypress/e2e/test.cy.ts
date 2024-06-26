describe(('Page loaded'), () => {
  before(() => {
    cy.visit('/')
  })

  it('should load the page', () => {
    cy.contains('Next')
  })
})
