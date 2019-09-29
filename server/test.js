import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../server/index';
chai.use(chaiHTTP);
describe('Testing all entries in my dairy', () => {
it('Checking the status of the api', done => {
  chai
    .request(app)
    .get('/api/v1/entries')
    .end((err, res) => {
      expect(res.status).to.equals(200);
      expect(res.body).to.be.an('object');
      done();
    });
});
});

describe('Testing specific entries', () => {
it('Checking the status of the api', done => {
  chai
    .request(app)
    .get('/api/v1/entries/:id')
    .end((err, res) => {
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
      done();
    });
});
});

describe('Testing new entries', () => {
it('Checking the status of the api', done => {
  chai
    .request(app)
    .post('/api/v1/entries')
    .end((err, res) => {
      expect(res.status).to.equals(400);
      expect(res.body).to.be.an('object');
      done();
    });
});
});

describe('Testing updated entries', () => {
it('Checking the status of the api', done => {
  chai
    .request(app)
    .put('/api/v1/entries/:id')
    .end((err, res) => {
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
      done();
    });
});
});

describe('Testing deleted entries', () => {
it('Checking the status of the api', done => {
  chai
    .request(app)
    .delete('/api/v1/entries/:id')
    .end((err, res) => {
      expect(res.status).to.equals(404);
      expect(res.body).to.be.an('object');
      done();
    });
});
}); 