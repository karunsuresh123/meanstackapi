const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const server = require('../server/index.js');
const pinger = require('../utils/pinger.js');
const lab = exports.lab = Lab.script();

// lab.test('It will return Hello World', (done) => {
//     server.inject('/', (res) => {
//         Code.expect(res.statusCode).to.equal(200);
//         Code.expect(res.result).to.equal('Hello World!');
//         done();
//     });
// });
// lab.test('It will return Hello World', (done) => {
//     server.inject('/ping', (res) => {
//         Code.expect(res.statusCode).to.equal(200);
//         Code.expect(res.result).to.equal('pong');
//         done();
//     });
// });
lab.test('It will return Hello World', () => {
        Code.expect(pinger.sayPong()).to.equal('pong');
});