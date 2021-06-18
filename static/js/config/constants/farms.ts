import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    isOldPsc: true,
    isTokenOnly: true,
    lpSymbol: 'LOCK',
    lpAddresses: {
      97: '',
      56: '0x220D10eCa950C815880CABC55DD982B43D4E36bc', // LOCK-BUSD LP
    },
    tokenSymbol: 'LOCK',
    tokenAddresses: {
      97: '',
      56: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    isOldPsc: true,
    lpSymbol: 'LOCK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x220D10eCa950C815880CABC55DD982B43D4E36bc',
    },
    tokenSymbol: 'LOCK',
    tokenAddresses: {
      97: '',
      56: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    isOldPsc: true,
    lpSymbol: 'LOCK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbADFc714F5ea2bB42a21C080825c9577CA328508',
    },
    tokenSymbol: 'LOCK',
    tokenAddresses: {
      97: '',
      56: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    isOldPsc: true,
    lpSymbol: 'LOCK-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xFB09C9560EB2a598F8e2B7C9F1217856d859f81C',
    },
    tokenSymbol: 'LOCK',
    tokenAddresses: {
      97: '',
      56: '0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4,
    isPsc: true,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    isPsc: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 5,
  //   isPsc: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 6,
  //   isPsc: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 6,
  //   isPsc: true,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
