import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 98, // V1
    tokenName: 'BUSD',
    tokenLabel: 'BUSD v1',
    tokenAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    stakingTokenName: QuoteToken.LOCK,
    stakingTokenAddress: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    stakingTokenDecimals: 18,
    contractAddress: {
      97: '',
      56: '0xc2416eDa3Ce3CE5E21DE4Fa03806b824d964c34E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://fishswap.app',
    harvest: true,
    tokenPerBlock: '0.00744047619',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    isLp: false,
    bushVersion: 1,
    getUrl: '/#/swap?outputCurrency=0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
  },
  {
    sousId: 99, // V1
    tokenName: 'WBNB',
    tokenLabel: 'WBNB v1',
    tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    stakingTokenName: QuoteToken.LOCK,
    stakingTokenAddress: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    stakingTokenDecimals: 18,
    contractAddress: {
      97: '',
      56: '0x2fC3E7a9DA69B54E4121f08ffd7024aF9fa433Aa',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.binance.com',
    harvest: true,
    tokenPerBlock: '0.00002703373016',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
    isBush: true,
    isLp: false,
    bushVersion: 1,
    getUrl: '/#/swap?outputCurrency=0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
  },
]

export default pools
