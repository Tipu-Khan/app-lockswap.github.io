// https://swape.fishswap.app/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xD9a0DC07D25ed65DA8eD4321C42f7f35De81bf2D
const getSwapUrlPathParts = ({ tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return `#/swap?outputCurrency=${tokenAddresses[chainId]}`
}

export default getSwapUrlPathParts
