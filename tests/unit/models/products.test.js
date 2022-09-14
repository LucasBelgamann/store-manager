const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const connection = require("../../../src/models/connection");

describe("Teste da pasta models", () => {
  beforeEach(sinon.restore);
  it("Testando a função getProducts", async () => {
    const response = await productsModel.getProducts();
    expect(response).to.be.an("array");
  });

  it("Testando a função getById", async function () {
    const expected = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
    ];
    sinon.stub(connection, "execute").resolves(expected);

    const response = await productsModel.getById(1);

    expect([response]).to.deep.equal(expected);
  });

  it("Testando a função INSERT", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);

    const nameProduct = "Lança teia";

    const result = await productsModel.insertProducts(nameProduct);

    expect(result).to.deep.equal({ id: 1, name: "Lança teia" });
  });

  it("Testando a função updateProductIdModel", async function () {
    sinon.stub(connection, "execute").resolves([{ id: 2, name: "João" }]);

    const result = await productsModel.updateProductIdModel(2, "João");

    expect(result).to.deep.equal({ id: 2, name: "João" });
  });

  it("Testando a função deleteProductId", async function () {
    sinon.stub(connection, "execute").resolves();

    const result = await productsModel.deleteProductId(1);

    expect(result).to.deep.equal();
  });
});
