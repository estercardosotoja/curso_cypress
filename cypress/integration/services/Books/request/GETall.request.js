/// <reference types="cypress" />

function all(){
    return cy.request({
        method: 'GET', 
        url:'posts',
        failOnStatusCode: false, 
    })
}

export { all };
