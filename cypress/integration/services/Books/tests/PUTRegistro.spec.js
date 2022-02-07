import * as GETall from '../request/GETall.request';
import * as PUTRegistro from '../request/PUTRegistro.request'
import * as POSTPublicar from '../request/POSTPublicar.request'

describe('PUT Alterar Registro',()=>{
    it('Alterar o registro no JsonPlaceholder', () => {
        GETall.all().then((responseAllRegistro)=> {
            PUTRegistro.alterRegistro(responseAllRegistro.body[0].id).should((responseAlterRegistro)=> {
               expect(responseAlterRegistro.status).to.eq(200);
               expect(responseAlterRegistro.body).to.be.not.null;
               expect(responseAlterRegistro.body.title).to.eq("foot");
               expect(responseAlterRegistro.body.body).to.eq("bars");
               expect(responseAlterRegistro.body.userId).to.eq("1");
            })
        })
    })

})
