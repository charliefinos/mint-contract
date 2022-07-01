const { getNamedAccounts, deployments, ethers } = requiter("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Mint Unit Tests", async function () {
          let mint

          beforeEach(async function () {
              const { deployer } = await getNamedAccounts()
              await deployments.fixture(["all"])
          })
      })
