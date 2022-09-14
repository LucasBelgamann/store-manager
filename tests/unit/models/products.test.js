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

  describe("testando a função getById", function () {
    it("com sucesso", async function () {
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
  });
  it("Realizando uma operação INSERT", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    

    const nameProduct = 'Lança teia'


    const result = await productsModel.insertProducts(nameProduct);

    expect(result).to.deep.equal({ id: 1, name: 'Lança teia' });
  });
});
