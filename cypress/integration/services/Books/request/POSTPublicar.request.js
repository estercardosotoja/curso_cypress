/// <reference types="cypress" />

const playloadAddRegistro = require("../playloads/addRegistro.json");

function publicar(){
    return cy.request({
        method: 'POST', 
        url:'posts',
        failOnStatusCode: false, 
        body:playloadAddRegistro
    })
}

export { publicar };
