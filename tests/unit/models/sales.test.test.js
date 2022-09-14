const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/sales.model");
const connection = require("../../../src/models/connection");

describe("Testando sales models", () => {
  beforeEach(sinon.restore);
  it("testando a função getAllSalesModel", async function () {
    const response = await productsModel.getAllSalesModel();
    expect(response).to.be.an("array");
  });
  it("Testando a função getSalesIdModel", async function () {
    const expected = [
      {
        productId: 1,
        quantity: 1,
      },
    ];
    sinon.stub(connection, "execute").resolves(expected);

    const response = await productsModel.getSalesIdModel(1);

    expect([response]).to.deep.equal(expected);
  });
});
