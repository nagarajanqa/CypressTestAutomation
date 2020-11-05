describe('My first ', () => {
    it('test', () => {
        cy.visit('https://stage.starfishsolutions.com/starfish-stage/support/login.html')
        cy.get('input[id="username"]').type('ygold')
        cy.get('input[id="password"]').type('hawa11')
        cy.injectAxe()
    })

    it('Has no detectable a11y violations on load', () => {
        // Test the page at initial load
        cy.checkA11y() // fail for a11y violations
    })

    it('Has no detectable a11y violations on load (with custom parameters)', () => {
        // Test the page at initial load (with context and options)
        cy.checkA11y('.x-panel-body.x-panel-body-noheader', {
            runOnly: {
                type: 'tag',
                values: ['wcag2a']
            }
        })
    })

    it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
        // Test on initial load, only report and assert for critical impact items
        cy.checkA11y(null, {
            includedImpacts: ['critical']
        })
    })

    it('Has no a11y violations after button click', () => {
        //cy.get('button').contains('Login').click()
        cy.get('table[id="login"] button').click();// Execution speed improves
        cy.injectAxe()
        cy.checkA11y(null, null, cy.axeOutputLogger) // check after a rerender
    })

})

