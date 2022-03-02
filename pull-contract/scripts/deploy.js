// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PullContract = await hre.ethers.getContractFactory("PullContract");
  const pullContract = await PullContract.deploy();

  // await greeter.deployed();

  console.log("PullContract deployed to:", pullContract.address);

  const createPullTx = await pullContract.createPull(
    "ABC",
    ["a", "b", "c"],
    1234567,
    { value: hre.ethers.utils.parseEther("0.2") }
  );

  await createPullTx.wait();

  console.log((await pullContract.pulls(0)));

  console.log(await pullContract.getVotesByOption(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
