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
        href: 'https://ftmscan.com/token/0xf393E9Ea75befAb72D5063dE4c1b380955E7C560',
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
        href: "https://docs.draugrswap.finance/",
      },
      // {
      //   label: "Blog",
      //   href: "https://draugr-swap.medium.com/",
      // },
    ],
  },
]

export default config
