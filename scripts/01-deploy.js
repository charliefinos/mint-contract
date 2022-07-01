async function main() {
    const [deployer] = await ethers.getSigners()

    console.log("Deploying contracts with the account:", deployer.address)

    const Mint = await ethers.getContractFactory("Mint")
    const mint = await Mint.deploy()

    console.log("Token address:", mint.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
