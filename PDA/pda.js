const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID } = require('@solana/spl-token');


const userAddress = new PublicKey('EnterUserAddressHere');
const mintAddress = new PublicKey('EnterMintAddressHere');

function getAssociatedTokenAddress(mint, owner) {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from('ata'),
            owner.toBuffer(),
            mint.toBuffer()
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    );
}

const [associatedTokenAddress, bump] = getAssociatedTokenAddress(mintAddress, userAddress);
console.log('Associated Token Address:', associatedTokenAddress.toBase58());
console.log('Bump:', bump);