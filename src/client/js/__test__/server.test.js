const request = require('supertest');
const app = require('../../../server/index');

console.log("Enter the test above");
describe('Express Server Tests', () => {

  console.log("Enter the test down");

  test('should return the index.html file on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toBe('text/html');
  });
});
