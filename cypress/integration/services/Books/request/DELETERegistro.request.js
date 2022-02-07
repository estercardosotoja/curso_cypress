/// <reference types="cypress" />

function deleteRegistro(id){
    return cy.request({
        method: 'DELETE', 
        url:`posts/${id}`,
        failOnStatusCode: false, 
    })
}

export { deleteRegistro };
 