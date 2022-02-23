import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.draugrswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.draugrswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Raids',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Forge',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Fantom Scan',
        href: 'https://ftmscan.com/token/0xC48a50A24b0E87fdE6B9a2Dcf427e6564b5F53c9',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/draugr-swap/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/draugr-swap',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/Draugr-Swap/",
      },
      {
        label: "Docs",
        href: "https://draugrswap.gitbook.io/draugr-swap/",
      },
      {
        label: "Blog",
        href: "https://draugr-swap.medium.com/",
      },
    ],
  },
]

export default config
