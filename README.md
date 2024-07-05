# Buy Me A Coffee

A decentralized application (dApp) built with Solidity, Hardhat, Ethers.js, and Alchemy to allow users to buy you a coffee via the Ethereum blockchain.

## Technology Stack

- **Solidity**: For writing the smart contracts.
- **Hardhat**: A development environment for Ethereum.
- **Ethers.js**: A library for interacting with the Ethereum blockchain.
- **Alchemy**: A blockchain developer platform and API provider.

## Set Up

### Prerequisites

1. **Node.js**: Install Node.js from [here](https://nodejs.org/).
2. **npm**: Node Package Manager, which comes with Node.js. Verify installation with:
    ```sh
    npm -v
    ```

### Installation

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/tinniaru3005/buy-me-a-coffee
    cd buy-me-a-coffee
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Create a `.env` File**: In the root directory, create a `.env` file and add the following lines, replacing the placeholders with your actual values:
    ```
    GOERLI_URL=<YOUR_GOERLI_URL>
    GOERLI_API_KEY=<YOUR_GOERLI_API_KEY>
    PRIVATE_KEY=<YOUR_PRIVATE_KEY>
    ```

### Testing Your Contract

1. **Run the Script**:
    ```sh
    npx hardhat run scripts/buy-coffee.js
    ```

2. **Deploy Locally**:
    ```sh
    npx hardhat run scripts/deploy.js
    ```

### Deploying Your Smart Contract


1. **Deploy to Goerli Test Network**:
    ```sh
    npx hardhat run scripts/deploy.js --network goerli
    ```

## Screenshots



## Links

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [Ethers.js Documentation](https://docs.ethers.io/v5/)
- [Alchemy Documentation](https://docs.alchemy.com/)

