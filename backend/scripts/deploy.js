const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main() {
    const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
    const metadataURL = METADATA_URL;

    const rh1noContract = await ethers.getContractFactory("Rh1no");

    const deployedRh1noContract = await rh1noContract.deploy(
        metadataURL,
        whitelistContract
    );

    console.log(
        "Rh1no Contract address: ",
        deployedRh1noContract.address
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });