const { expect } = require("chai");
const sinon = require("sinon");

const productsControll = require("../../../src/controllers/products.controller");
const productsServices = require("../../../src/services/products.service");
const allResponse = require("./mocks/products-controller.mock");

describe("Testing controller functions", function () {
  afterEach(function () {
    sinon.restore();
  });

  it("testing if it returns status 200", async function () {
    const res = {};
    const req = {};

    sinon.stub(productsServices, "getWaitingProducts").resolves(allResponse);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsControll.getProductsControll(req, res);

    expect(res.json.calledWith(allResponse)).to.be.true;
  });
  it("successfully", async function () {
    const res = {};
    const req = {};

    const expected = [
      {
        id: 1,
        name: "Martelo de Thor",
      },
    ];

    req.params = { id: 1 };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsServices, "getWaitingProductsId").resolves([
      {
        id: 1,
        name: "Martelo de Thor",
      },
    ]);

    await productsControll.getForIdControll(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(expected[0])).to.be.true;
  });
});
