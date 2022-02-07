import * as GETall from '../request/GETall.request';

describe('GET Pesquisar',()=>{
    it('Pesquisando todos os registros no JsonPlaceholder', () => {
        GETall.all().should((response)=> {
            //shoul = then 
           // cy.log(response.status)
           // cy.log(response.statusText)
           // cy.log(response.body)
           expect(response.status).to.eq(200);
           expect(response.body).to.be.not.null;
        })
    })
})