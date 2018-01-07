const nock = require('nock');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {

  let consoleStub;

  const responseMock = {
    "price": 16082.23,
    "time": "2018-01-07 18:50:41",
    "success": true
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should use currency USD and 1 as amount default', (done) => {
    // https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);

    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 16082.23');
      done();
    }, 300);
  });

  it('should use currency USD and 10 as amount', (done) => {
    // https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=USD&amount=1
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 10 })
      .reply(200, responseMock);

    convertBTC('USD', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('10 BTC to USD = 16082.23');
      done();
    }, 300);
  });
});
