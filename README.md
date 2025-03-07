Blockchain-Based File Forgery Prevention

Overview

This project leverages blockchain technology to prevent file forgery by uploading documents as NFTs on the chain. The system allows users to verify the authenticity of documents by checking their existence and integrity on the blockchain.

Features

File Integrity Verification: Ensures document authenticity using blockchain immutability.

NFT-Based Storage: Documents are uploaded as NFTs, making them unique and verifiable.

Decentralized Verification: Uses smart contracts to confirm document trustworthiness.

Metamask Integration: Secure authentication and transaction signing.

Next.js & React.js Frontend: A smooth and interactive user interface.

Tech Stack

Blockchain: Ethereum

Smart Contracts: Solidity

Development Framework: Hardhat

Frontend: Next.js, React.js

Wallet Integration: MetaMask

Storage: IPFS or other decentralized storage solutions

Installation & Setup

Prerequisites

Node.js & npm/yarn

MetaMask Extension

Hardhat

Steps to Run Locally

Clone the repository:

git clone https://github.com/your-repo/blockchain-file-forgery.git
cd blockchain-file-forgery

Install dependencies:

npm install

Compile and deploy the smart contract:

npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost

Start the frontend:

npm run dev

Usage

Connect your MetaMask wallet.

Upload a document to be stored as an NFT.

Retrieve and verify the document's authenticity on-chain.

Contributing

Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit changes (git commit -m "Add feature").

Push to your branch (git push origin feature-name).

Open a pull request.

License

This project is licensed under the MIT License.

Contact

For any questions, reach out to us at [sheldonashish2004@gmail.com].
