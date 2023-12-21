const request = require("supertest")("https://airportgap.com/api");
const expect = require("chai").expect;




//checking an authenticated endpoint for testing
describe("POST /favorites", function () {
    it("requires authentication", async function () {
      const response = await request.post("/favorites").send({
        airport_id: "JFK",
        note: "My usual layover when visiting family",
      })
  
      expect(response.status).to.eql(401);
    });
  });