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
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Armory',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
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
  {
    label: 'Audit by Hacken',
    icon: 'HelmetIcon',
    href: 'https://www.draugrswap.finance/files/draugrHackenAudit.pdf',
  },
]

export default config
