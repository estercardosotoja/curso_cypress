/// <reference types="cypress" />

const playloadAlterRegistro = require("../playloads/alterRegistro.json");

function alterRegistro(id){
    return cy.request({
        method: 'PUT', 
        url: `posts/${id}`,
        failOnStatusCode: false, 
        headers: {
            'Content-Type':'application/json',
        },
        body : playloadAlterRegistro
    })
}

export { alterRegistro };
