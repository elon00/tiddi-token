const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Tiddi Token ERC-20 Contract & Invariant Verification", function () {
  let Tiddi, tiddi, owner, addr1, addr2;
  const TOTAL_SUPPLY = 2100000000000000n;
  const INITIAL_HOLDER = "0xa4E1f98c20abD77F198b8899b8D97c38CA7bDfCc";

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    Tiddi = await ethers.getContractFactory("Tiddi");
    tiddi = await Tiddi.deploy();
    await tiddi.waitForDeployment();
  });

  it("Should have correct name and symbol", async function () {
    expect(await tiddi.name()).to.equal("Tiddi");
    expect(await tiddi.symbol()).to.equal("TIDDI");
  });

  it("Should have total supply equal to 2,100,000,000,000,000", async function () {
    expect(await tiddi.totalSupply()).to.equal(TOTAL_SUPPLY);
    expect(await tiddi.TOTAL_SUPPLY()).to.equal(TOTAL_SUPPLY);
  });

  it("Should mint entire initial supply to designated initial holder", async function () {
    const holderBalance = await tiddi.balanceOf(INITIAL_HOLDER);
    expect(holderBalance).to.equal(TOTAL_SUPPLY);
  });
});
