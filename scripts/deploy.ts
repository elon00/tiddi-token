const hre = require("hardhat");

async function main() {
  const Tiddi = await hre.ethers.getContractFactory("Tiddi");
  const tiddi = await Tiddi.deploy();

  await tiddi.waitForDeployment();

  console.log("Tiddi deployed to:", tiddi.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});