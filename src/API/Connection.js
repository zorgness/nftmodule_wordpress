import { Connection, PublicKey } from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import axios from "axios"
// NFT is a mint. just like SRM, USDC ..., the only different is that NFT's supply is 1
//
// if we want to get NFT's metadata, first we need to know what is the mint address.
// here I take a random DAPE as an example
// https://explorer.solana.com/address/9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A
//
// tokenmeta is a PDA a which derived by mint address
// the formula is ['metadata', metadata_program_id, mint_id]
// is it totally fine to forget it because sdk already wrapped it for us


// for connection on Mainnet change const connection = new Connection("https://api.mainnet-beta.solana.com/")


const connection = new Connection("https://api.devnet.solana.com");

export default async function NftInfoJson(tokenId) {

        let mintPubkey = new PublicKey(tokenId);
        let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
      
        const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
        const UriPath = tokenmeta.data.data.uri;
        return await axios.get(UriPath)
  
}
