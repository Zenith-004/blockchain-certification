const { exec } = require("child_process");
const net = require("net");
const fs = require("fs");

// Function to run a command in a new terminal
function runCommand(command, title) {
    exec(`start cmd /k "${command}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error in ${title}:`, error.message);
            return;
        }
        if (stderr) {
            console.error(`Stderr in ${title}:`, stderr);
            return;
        }

    });
}
runCommand("npx hardhat node", "Hardhat Node");
function waitForHardhatNode(callback) {
    const client = new net.Socket();
    client.connect(8545, "127.0.0.1", () => {
        console.log("Hardhat Node is running!");
        client.destroy();
        callback();
    });

    client.on("error", () => {
        setTimeout(() => waitForHardhatNode(callback), 2000);
    });
}

// **Once Hardhat Node is ready, run the next steps**
waitForHardhatNode(() => {
    runCommand("node SaveMeta.js", "Save Meta Data");

    setTimeout(() => {
        runCommand("npx hardhat run scripts/deploy.js --network localhost", "Deploy Contract");
    }, 5000);

    setTimeout(() => {
        runCommand("npx hardhat console --network localhost", "Hardhat Console");
    }, 10000);

    setTimeout(() => {
        const mintScript = `
        async function main() {
            const [deployer] = await ethers.getSigners();
            const certificateNFT = await ethers.getContractAt("CertificateNFT", "0x5FbDB2315678afecb367f032d93F642f64180aa3");

            const addresses = [
                "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
            ];

            for (let i = 0; i < addresses.length; i++) {
                console.log(\`Minting to: \${addresses[i]}\`);
                await certificateNFT.mintCertificate(addresses[i], "http://localhost:3000/metadata.json");
            }

        }

        main().catch((error) => {
            console.error(error);
            process.exit(1);
        });
        `;

        fs.writeFileSync("mintCertificates.js", mintScript);
        console.log("Created mintCertificates.js");

        setTimeout(() => {
            runCommand("npx hardhat run mintCertificates.js --network localhost", "Mint Certificates");
        }, 5000);
    }, 15000);
});
