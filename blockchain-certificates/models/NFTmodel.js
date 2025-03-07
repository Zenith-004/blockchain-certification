const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    token_ID: {
        type: Number,
        required: true,
        unique: true
    },
    metadata: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("NFT", NFTSchema);
