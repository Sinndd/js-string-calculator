/// <reference types="cypress" />

context('first scenario', () => {

    beforeEach(() => {
        cy.visit('../../src/lightbox.html')
    })

    //Question 1
    it('Lightbox opened when image is clicked', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
    })

    //Question 2
    it('Lightbox closed when you click outside of it', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('lightbox-bg').click('topLeft')
        cy.dataCy('lightbox').should('not.be.visible')
    })

    //Question 3
    it('Adding the "like" and updating the counter in Overlay', () => {

        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('lightbox-likes-count').should('have.text', '0')
        cy.dataCy('like-lightbox-btn').click()
        cy.dataCy('lightbox-likes-count').should('have.text', '1')

        cy.dataCy('lightbox-bg').click('topLeft')
        cy.dataCy('lightbox').should('not.be.visible')
        cy.dataCy('img').trigger('mouseover')
        cy.dataCy('overlay').should('be.visible')
        cy.dataCy('likesCount').should('have.text', '1')
    })

    //Question 4
    it('Removing the "like" and updating the counter in Overlay', () => {

        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('like-lightbox-btn').click()
        cy.dataCy('lightbox-likes-count').should('have.text', '1')
        cy.dataCy('dislike-lightbox-btn').click()
        cy.dataCy('lightbox-likes-count').should('have.text', '0')
        cy.dataCy('lightbox-bg').click('topLeft')
        cy.dataCy('lightbox').should('not.be.visible')
        cy.dataCy('img').trigger('mouseover')
        cy.dataCy('overlay').should('be.visible')
        cy.dataCy('likesCount').should('have.text', '0')
    })

    //Question 5
    it('Adding a comment', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').type('Cypress is awesome!')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('commentSection').should('contain.text', 'Cypress is awesome!')
    })

    //Question 6
    it('The publish button is disabled when the comment input is empty', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').should('have.value', '')
        cy.dataCy('publish-comment-btn').should('be.disabled')
    })

    //Question 7
    it('Hide comments option test', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').type('Cypress is awesome!')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('commentSection').should('be.visible')
        cy.dataCy('toggle-comments-btn').click()
        cy.dataCy('commentSection').should('not.be.visible')
    })

    //Question 8
    it('Comments counters are updated on overlay and lightbox', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').type('First comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('toggle-comments-btn').should('contain.text', '1')
        cy.dataCy('lightbox-bg').click('topLeft')
        cy.dataCy('img').trigger('mouseover')
        cy.dataCy('overlay-comments-count').should('have.text', '1')
    })

    //Question 9
    it('Singular/plural depending on number of comments', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').type('First comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('toggle-comments-btn').should('contain.text', 'Hide 1 comment')
        cy.dataCy('comment-input').type('Second comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('toggle-comments-btn').should('contain.text', 'Hide 2 comments')
    })

    //Question 10
    it('Write three comments and delete the second one', () => {
        cy.dataCy('img').click()
        cy.dataCy('lightbox').should('be.visible')
        cy.dataCy('comment-input').type('First comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('comment-input').type('Second comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('comment-input').type('Third comment')
        cy.dataCy('publish-comment-btn').click()
        cy.dataCy('commentSection').should('contain.text', 'Second comment')
        cy.dataCy('delete-comment-btn').eq(1).click()
        cy.dataCy('commentSection').should('not.contain.text', 'Second comment')
        cy.dataCy('commentSection').should('contain.text', 'First comment')
        cy.dataCy('commentSection').should('contain.text', 'Third comment')
    })

})