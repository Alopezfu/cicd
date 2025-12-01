const request = require('supertest');
const server = require('../index');

afterAll((done) => {
  // Cerrar el servidor para liberar el puerto
  if (server && server.close) server.close(done);
  else done();
});

describe('GET /hola', () => {
  it('responde con JSON y el mensaje ¡Hola Mundo!', async () => {
    const res = await request(server)
      .get('/hola')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toEqual({ message: '¡Hola Mundo!' });
  });
});
