# Bullardcoin (BLD)

Bullardcoin is an ERC20-compatible cryptocurrency token with minting functionality.

## Features

- **Name:** Bullardcoin
- **Symbol:** BLD
- **Decimals:** 18
- **Initial Supply:** 9,000,000 (minted to contract deployer)
- **Minting:** Owner can mint more tokens

## How to Deploy

This contract uses [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/4.x/).
You can deploy using Hardhat or Remix.

### 1. Install Dependencies

```bash
npm install
```

### 2. Compile

```bash
npm run compile
```

### 3. Start Local Blockchain (in another terminal)

```bash
npx hardhat node
```

### 4. Deploy

```bash
npm run deploy
```

### 5. Minting

Only the owner (deployer) can mint new tokens:

```js
// Mint 1000 BLD to an address
await bullardcoin.mint("0xRecipientAddress", ethers.utils.parseUnits("1000", 18));
```

## Security

- Only the contract owner can mint new tokens.
- Uses OpenZeppelin's battle-tested libraries.

## License

MIT
