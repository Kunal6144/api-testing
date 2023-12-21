const request = require("supertest")("https://airportgap.com/api");
const expect = require("chai").expect;
let bearerToken = 'rkR4WR9QSkTB8rhX2U3nHa8d';
describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request.get("/airports").set('Authorization', `Bearer token=${bearerToken}`);
    
    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});