describe('Browser Actions', () => {    
    it('verify ur Load successfully', () => {
        cy.visit('https://stage.starfishsolutions.com/starfish-stage/support/login.html',{timeout: 5000})
    })
})