const { expect } = require("chai");
const sinon = require("sinon");

const productsServices = require("../../../src/services/products.service");
const productsModel = require('../../../src/models/products.model');
const serviceResponse = require("./mocks/productsService.mock");

describe('Testing service functions', function () {
   afterEach(function () {
    sinon.restore();
  });
  it('Testing getWaitingProducts', async function () {
    sinon.stub(productsModel, "getProducts").resolves(serviceResponse);

    const response = await productsServices.getWaitingProducts();

    expect(response).to.deep.equal(serviceResponse);
  })
  it('Testing getById', async function () {
    sinon.stub(productsModel, 'getById').resolves([{
          id: 1,
          name: 'Martelo de Thor',
    }]);
    
      const expected = [
        {
          id: 1,
          name: 'Martelo de Thor',
        },
      ];

      const response = await productsServices.getWaitingProductsId(1);

      expect(response).to.deep.equal(expected);
  });
  it('Testing createProduct', async function () {
    sinon.stub(productsModel, "insertProducts").resolves([
      {
        id: 1,
        name: 'lança teia',
      },
    ]);

    const response = await productsServices.createProduct();

    expect(response).to.deep.equal([
      {
        id: 1,
        name: 'lança teia',
      },
    ]);
  });
  it('Testando a função updateProdutcIdServices', async function () {
    sinon.stub(productsModel, "updateProductIdModel").resolves(2, "João");

    const response = await productsServices.updateProdutcIdServices(2, "João");

    expect(response).to.deep.equal(2, "João");
  });
  it("Testando a função deleteProdutcIdServices", async function () {
    sinon.stub(productsModel, "deleteProductId").resolves();

    const result = await productsServices.deleteProdutcIdServices(1);

    expect(result).to.deep.equal();
  });
})
