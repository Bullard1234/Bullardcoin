const { ethers } = require("hardhat");

async function main() {
  const Bullardcoin = await ethers.getContractFactory("Bullardcoin");
  const bullardcoin = await Bullardcoin.deploy();
  await bullardcoin.deployed();

  console.log("Bullardcoin deployed to:", bullardcoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});