import chai from 'chai';
import chaiHttp from 'chai-http';
import database from '../src/lib/database';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

before(function (done) {
    database.connect().then(()=> done()).catch((error)=> done(error));
});

after(function(done ){
    database.disconnect().then(()=> done()).catch((error)=> done(error));
});

describe('Check if server is running', ()=>{
    it('Ok,check if route has been initialized', (done)=>{
        chai.request(app).get('/')
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });
});

