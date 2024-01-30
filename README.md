# solana-nft-bubblegum
Create compressed NFT with bubblegum v3 program.

# Creating a new devnet solana account
1. Install Solana Tool Suite (solana-cli): You can install it using the command below:
```
curl -sSf https://install.solana.com/ | sh
```
2. Install phantom wallet and create a new account
3. Export private key from phantom wallet.
4. Create a new file with your private key: Open a new file, paste your private key into it, and save it. Let’s say you save it as `~/my-private-key.txt`.
5. Create a JSON wallet file from your private key: You can use the `solana-keygen` new command with the `--force `and `--infile` options to create a new JSON wallet file from your private key. Here’s the command you can use:
```
solana-keygen new --force --infile ~/my-private-key.txt --outfile ~/my-solana-wallet.json
```
This command will create a new JSON wallet file `my-solana-wallet.json` from the private key in `my-private-key.txt`.
5. This will create a new keypair and save it in the file `my-solana-wallet.json`.
6. Set Solana Config to Devnet: Before you request SOL from the Devnet faucet, you need to set your Solana config to Devnet using the command below:
```
solana config set --url https://devnet.solana.com
```
7. Get Public Key of your Account: You can get the public key of your account using the command below:
```
solana-keygen pubkey ~/my-solana-wallet.json
```
Request SOL from Devnet Faucet: Finally, you can request SOL from the Devnet faucet. Replace <your-public-key> with the public key you got from the previous step:
```
solana airdrop 10 <your-public-key>
```
This will request 10 SOL from the Devnet faucet to be added to your account.
Please replace `~/my-solana-wallet.json` and `<your-public-key>` with your actual wallet file path and your actual public key respectively. Also, ensure that you have sufficient permissions to install and run these commands on your machine.