import * as GETall from '../request/GETall.request';
import * as DELETERegistro from '../request/DELETERegistro.request'
import * as POSTPublicar from '../request/POSTPublicar.request'

describe('DELETE Registros',()=>{
    it('Deletar registro JsonPlaceholder', () => {
        GETall.all().then((responseAllRegistro)=> {
            DELETERegistro.deleteRegistro(responseAllRegistro).should((responseDeleteRegistro) => {
                expect(responseDeleteRegistro.status).to.eq(200);
                expect(responseDeleteRegistro.body).to.be.not.null;
            })
        })
    });

    it(' Criar e Deletar registro JsonPlaceholder', () => {
        POSTPublicar.publicar().then((responseAddRegistro)=> {
            DELETERegistro.deleteRegistro(responseAddRegistro).should((responseDeleteRegistro) => {
                expect(responseDeleteRegistro.status).to.eq(200);
                expect(responseDeleteRegistro.body).to.be.not.null;
            })
        })
    });
})

