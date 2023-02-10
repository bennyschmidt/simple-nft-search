import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET
};

console.log(process.env)

const alchemy = new Alchemy(settings);

const PAGE_SIZE = 10;

export default async function searchNFTsByOwner (req, res) {
  try {
    const { ownerAddress } = req.body;

    if (!ownerAddress || !/^([a-zA-Z0-9\.]){2,42}$/.test(ownerAddress)) {
      res.status(400).json({
        error: {
          message: 'Invalid address.'
        }
      });

      return;
    }

    const nftsForOwner = await alchemy.nft.getNftsForOwner(
      ownerAddress,
      {
        pageSize: PAGE_SIZE
      }
    );

    const result = Array.from(
      nftsForOwner.ownedNfts.map(({ tokenId, contract }) => ({
        tokenAddress: contract.address,
        tokenId
      }))
    );

    console.log(result)

    res.status(result ? 200 : 500).json(result || {});
  } catch (error) {
    res.status(500).json(error || {});
  }
}
