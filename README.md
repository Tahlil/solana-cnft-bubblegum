# solana-nft-bubblegum
Create compressed NFT with bubblegum v3 program.

# Creating a new devnet solana account and import it in a wallet
1. Install Solana Tool Suite (solana-cli): You can install it using the command below:
```
curl -sSf https://install.solana.com/ | sh
```
2. Create a JSON wallet file from your private key: You can use the `solana-keygen new` command to create a new JSON wallet file from your private key. Here’s the command you can use:
```
solana-keygen new --outfile ./solana-wallet.json
```
This command will create a new JSON wallet file `solana-wallet.json`.
3. Set Solana Config to testnet: Before you request SOL from the Devnet faucet, you need to set your Solana config to Devnet using the command below:
```
solana config set --url https://api.testnet.solana.com
```
4. Get Public Key of your Account: You can get the public key of your account using the command below:
```
solana-keygen pubkey ./solana-wallet.json
```
5. Copy the public key.
6. Request SOL from Devnet Faucet: Finally, you can request SOL from the Devnet faucet. Replace <your-public-key> with the public key you got from the previous step:
```
solana airdrop 10 <your-public-key>
```
This will request 10 SOL from the Devnet faucet to be added to your account.
Replace `<your-public-key>` with your actual wallet file path and your actual public key. Also, ensure that you have sufficient permissions to install and run these commands on your machine.
Note: If you get insufficient fund then try requesting less sol as airdrop.

7. Open the browser and install [phantom wallet](https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?pli=1) or any other wallet that support solana.

8. In `solana-wallet.json` file copy the private key (it should be an array of numbers). 
9. Click on the three bar icon and then click the plus icon to add a new wallet.
10. Click on `Import Private Key`.
11. Give a key name and paste the private key. Then click `Import`. The new address would be imported.

Alternative to airdrop we can add test Sol with faucet:
1. https://solfaucet.com/
2. https://faucet.solana.com/
3. https://faucet.quicknode.com/solana/testnet