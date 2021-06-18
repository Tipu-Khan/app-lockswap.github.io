import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade (New with APE)',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href:
  //         'https://swape.fishswap.app/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href:
  //         'https://swape.fishswap.app/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
  //       target: '_blank',
  //     },
  //   ],
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://dex.fishswap.app/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
      },
      {
        label: 'Liquidity',
        href:
          'https://dex.fishswap.app/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Launchpad',
    icon: 'BushIcon',
    href: '/bush',
  },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://fishswap.app/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/fishswap',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'Token',
      //   href: 'https://doc.fishswap.app/tokennomics/fish-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.fishswap.app/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.fishswap.app/transparency/transparency',
      //   target: '_blank',
      // },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x13c2d9b130E0830f79B41FDFb158B83875baf7FF',
        target: '_blank',
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/lockswap',
        target: '_blank',
      },
      {
        label: 'Dappradar.com',
        href: 'https://dappradar.com/binance-smart-chain/defi/lockswap',
        target: '_blank',
      },
      {
        label: 'Bsc.news',
        href: 'https://www.bsc.news/bsc-projects',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/fishswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/fishswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/lockswap',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.fishswap.app/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://twitter.com/Lockswapbsc',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/lockswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/lockswapchat',
        target: '_blank',
      },
    ],
  },
]

export default config
