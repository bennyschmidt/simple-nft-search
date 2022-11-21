import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: 'demo',
  network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);

export default async function searchNFTMetadata (req, res) {
  try {
    const result = {};

    const { tokenAddress, tokenId } = req.body;

    if (!tokenId || !tokenAddress || !/^([a-zA-Z0-9\.]){2,42}$/.test(tokenAddress)) {
      res.status(400).json({
        error: {
          message: 'Invalid token ID or address.'
        }
      });

      return;
    }

    const response = await alchemy.nft.getNftMetadata(
      tokenAddress,
      tokenId
    );

    result.tokenAddress = tokenAddress;
    result.tokenId = tokenId;
    result.name = response.title;
    result.tokenType = response.tokenType;
    result.tokenUri = response.tokenUri.gateway;
    result.imageUrl = response.rawMetadata.image;
    result.timeLastUpdated = response.timeLastUpdated;

    res.status(result?.name ? 200 : 500).json(result || {});
  } catch (error) {
    res.status(500).json(error || {});
  }
}
