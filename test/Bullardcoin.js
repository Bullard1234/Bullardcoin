const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bullardcoin", function () {
  let Bullardcoin, bullardcoin, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    Bullardcoin = await ethers.getContractFactory("Bullardcoin");
    bullardcoin = await Bullardcoin.deploy();
    await bullardcoin.deployed();
  });

  it("Should deploy with correct initial supply", async function () {
    const supply = await bullardcoin.totalSupply();
    expect(supply).to.equal(ethers.parseUnits("9000000", 18));
    expect(await bullardcoin.balanceOf(owner.address)).to.equal(supply);
  });

  it("Owner can mint new tokens", async function () {
    await bullardcoin.mint(addr1.address, ethers.parseUnits("100", 18));
    expect(await bullardcoin.balanceOf(addr1.address)).to.equal(ethers.parseUnits("100", 18));
  });

  it("Non-owner cannot mint", async function () {
    await expect(
      bullardcoin.connect(addr1).mint(addr1.address, ethers.parseUnits("1", 18))
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});
