const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
require("dotenv").config();
const mongoose = require("mongoose");
const NFT = require("./models/NFTmodel.js");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Path to metadata.json
const metadataFilePath = path.join(__dirname, "metadata.json");

// Load contract ABI
const contractABI = require("./artifacts/contracts/Certificates.sol/CertificateNFT.json").abi;

// Connect to the blockchain
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // Hardhat local network
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with actual contract address
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Function to load existing metadata
function loadMetadata() {
    try {
        if (fs.existsSync(metadataFilePath)) {
            const data = fs.readFileSync(metadataFilePath, "utf-8");
            return JSON.parse(data);
        }
    } catch (error) {
        console.error("❌ Error loading metadata:", error);
    }
    return [];
}

// Function to save metadata
function saveMetadata(metadata) {
    try {
        fs.writeFileSync(metadataFilePath, JSON.stringify(metadata, null, 2));
        console.log("✅ Metadata updated successfully!");
    } catch (error) {
        console.error("❌ Error saving metadata:", error);
    }
}

// Function to save NFT to MongoDB
async function saveNFTToDB(owner, tokenId, metadataURI) {
    try {
        const newNFT = new NFT({
            owner: owner,
            token_ID: Number(tokenId.toString()),
            metadata: metadataURI
        });

        await newNFT.save();
        console.log("✅ NFT saved to MongoDB!");
    } catch (error) {
        console.error("❌ Error saving NFT to MongoDB:", error);
    }
}

// Listen for CertificateMinted event
contract.on("CertificateMinted", async (owner, tokenId, metadataURI) => {
    console.log(`🎉 New NFT Minted! Token ID: ${tokenId.toString()}, Owner: ${owner}, Metadata: ${metadataURI}`);

    let metadata = loadMetadata();
    
    const newEntry = {
        tokenId: Number(tokenId.toString()),
        owner: owner,
        metadataURI: metadataURI,
        timestamp: new Date().toISOString()
    };

    metadata.push(newEntry);
    saveMetadata(metadata);

    // Save NFT data to MongoDB
    await saveNFTToDB(owner, tokenId, metadataURI);
});

console.log("🔄 Listening for new NFT minting events...");
