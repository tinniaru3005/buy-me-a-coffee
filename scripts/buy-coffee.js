const hre = require("hardhat");

// retuns the ETH balance of a given address
async function getBalance(address) {
  const balance = await hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balance);
}

// Logs the ETH balances for a list of addresses
async function printBalances(addresses) {
    for (const address of addresses) {
        const balance = await getBalance(address);
        console.log(`${address} has a balance of ${balance} ETH`);
    }
}

// Logs the memos for a list of memos
async function printMemos(memos) {
    for (const memo of memos) {
        const timestamp = memo.timestamp;
        const tipper = memo.name;
        const tipperAddress = memo.from;
        const message = memo.message;
        console.log(`${timestamp} - ${tipper} (${tipperAddress}): ${message}`);
    }
}

async function main() {
    // Get example accounts
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

    // Get the contract to deploy
    const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    // Deploy the contract.
    await buyMeACoffee.deployed();
    console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);

    // Check balances before the coffee purchase
    const addresses = [owner.address, tipper.address, buyMeACoffee.address];
    console.log("=== Balances before the coffee purchase ===");
    await printBalances(addresses);

    const tip = { value: hre.ethers.utils.parseEther("0.1") };

    await buyMeACoffee.connect(tipper).buyCoffee("Eshi", "Thanks for being awesome!", tip);
    await buyMeACoffee.connect(tipper2).buyCoffee("Sayak", "Thanks for always being there!", tip);
    await buyMeACoffee.connect(tipper3).buyCoffee("DEbdoor", "Inspiration to many!", tip);

    // Check balances after the coffee purchase
    console.log("=== Balances after the coffee purchase ===");
    await printBalances(addresses);

    // Withdraw the funds
    await buyMeACoffee.connect(owner).withdrawTips();
    console.log("=== Withdraw the tips ===");
    console.log("=== Balances after the withdrawal of tips ===");
    await printBalances(addresses);

    // Read all the memos left for the owner
    console.log("=== Memos ===");
    const memos = await buyMeACoffee.getMemos();
    printMemos(memos);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});