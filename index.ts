import {
  createSignerFromKeypair,
  generateSigner,
  keypairIdentity,
} from "@metaplex-foundation/umi";
import { createTree, mplBubblegum } from "@metaplex-foundation/mpl-bubblegum";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

const umi = createUmi("https://api.testnet.solana.com")
.use(mplBubblegum());

// Add tree creator
import wallet from "./solana-wallet.json";
const myKeypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const myKeypairSigner = createSignerFromKeypair(umi, myKeypair);
umi.use(keypairIdentity(myKeypairSigner));

async function main() {
    const merkleTree = generateSigner(umi)
    console.log(`Merkle tree account: ${merkleTree.publicKey}`);
    
    const builder = await createTree(umi, {
      merkleTree,
      maxDepth: 14,
      maxBufferSize: 64,
    });
    const createTreeTx = await builder.sendAndConfirm(umi);
    console.log({createTreeTx});
    
}
main();




