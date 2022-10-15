const Service = require("./service");
const sinon = require("sinon");
const { deepStrictEqual } = require("assert");
const BASE_URL_1 = "https://swapi.dev/api/planets/1"
const BASE_URL_2 = "https://swapi.dev/api/planets/2"
const BASE_URL_3 = "https://swapi.dev/api/planets/3"

const mocks = {
  tatooine: require("./mocks/tatooine.json"),
  alderaan: require("./mocks/alderaan.json"),
  yavin: require("./mocks/yavin.json"),
}

;(async () => {
  // Vai para internet
  // const response = await new Service().makeRequest(BASE_URL_1)
  // console.log(JSON.stringify(response));

  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name)

  stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.tatooine)
  stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.alderaan)
  stub
    .withArgs(BASE_URL_3)
    .resolves(mocks.yavin)

  {
    const expected = {
      "name": "Tatooine",
      "surfaceWater": "1",
      "appearedIn": 5
    }
    const result = await service.getPlanets(BASE_URL_1)
    deepStrictEqual(result, expected)
  }
  {
    const expected = {
      "name": "Alderaan",
      "surfaceWater": "40",
      "appearedIn": 2
    }
    const result = await service.getPlanets(BASE_URL_2)
    deepStrictEqual(result, expected)
  }
  {
    const expected = {
      "name": "Yavin IV",
      "surfaceWater": "8",
      "appearedIn": 1
    }
    const result = await service.getPlanets(BASE_URL_3)
    deepStrictEqual(result, expected)
  }
})()