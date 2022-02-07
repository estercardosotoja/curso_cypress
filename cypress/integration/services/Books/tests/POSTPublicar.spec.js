import * as POSTPublicar from '../request/POSTPublicar.request';


describe('POST Publicar',()=>{
    it('Publicar o registro no JsonPlaceholder', () => {
        POSTPublicar.publicar().should((response)=> {
           expect(response.status).to.eq(201);
           expect(response.body).to.be.not.null;
           expect(response.body.title).to.eq("foo");
           expect(response.body.body).to.eq("bar");
           expect(response.body.userId).to.eq("1");
        })
    })
})