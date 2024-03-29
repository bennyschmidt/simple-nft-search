# Simple NFT Search

Search NFTs by address (e.g. *0x0bEed7099AF7514cCEDF642CfEA435731176Fb02*) or ENS name (e.g. *vitalik.eth*).

Search all by ENS: https://nftoogle.vercel.app/?search=eumelaninc.eth

![image](https://user-images.githubusercontent.com/45407493/218153558-5da68da6-53cc-4c00-beae-d6e6c8b83cf8.png)

Link to a specific result: https://nftoogle.vercel.app/nft?name=Be+a+Bee&tokenAddress=0x495f947276749ce646f68ac8c248420045cb7b5e&tokenId=74200906326078283434529278345955196052332239189126191305460846805529248399361&imageUrl=https%3A%2F%2Flh3.googleusercontent.com%2Fv1VbSyOaM1m7w2t-xRLPlBP4N6LjQ10dBrIUqIGe6vWB5hpYWtTTHpR5j93g0xJOBYApCCiVDIe6skNwRCxG2ytTGiY0-O_a-vJnag

![image](https://user-images.githubusercontent.com/45407493/218153436-10e2806d-9e9e-4f42-a432-f75a33c97246.png)

# Dev Setup

1. `API_KEY=`_<your [Alchemy API key](https://dashboard.alchemy.com/) here>_
2. `npm i`

### Run a local dev instance

`npm run dev`

### Build static files

`npm run build`

### Run the build

`npm start`

-----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
