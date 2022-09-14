const { expect } = require("chai");
const sinon = require("sinon");

const productsServices = require("../../../src/services/sales.service");
const productsModel = require("../../../src/models/sales.model");
const serviceResponse = require("./mocks/productsService.mock");

describe("Testando a pasta sales de services", () => {
  beforeEach(sinon.restore);
  it("Testando a função getAllSalesService", async function () {
    sinon
      .stub(productsModel, "getAllSalesModel")
      .resolves(serviceResponse.sales);

    const response = await productsServices.getAllSalesService();

    expect(response).to.deep.equal(serviceResponse.sales);
  });
  it("Testing getSalesByIdService", async function () {
    sinon.stub(productsModel, "getSalesIdModel").resolves([
      {
        saleId: 1,
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2,
      },
    ]);

    const expected = [
      {
        saleId: 1,
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2,
      },
    ];

    const response = await productsServices.getSalesByIdService(1);

    expect(response).to.deep.equal(expected);
  });
});
