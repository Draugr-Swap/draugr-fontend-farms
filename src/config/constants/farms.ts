import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DRAUGR-USDC LP',
    lpAddresses: {
      4002: '',
      250: '0x7d4b803319c500b785cb7e5987c0bd95924f3df4',
    },
    tokenSymbol: 'DRAUGR',
    tokenAddresses: {
      4002: '0x1D34e3fC62bC303aD20e09ef622e2CB9F90d8e8A',
      250: '0x7D572502Bd99f8830F32F2F4CF0fC8767282A992',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DRAUGR-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xe1273b8639ff3921c33985a60911b3581d148c8a',
    },
    tokenSymbol: 'DRAUGR',
    tokenAddresses: {
      4002: '0x1D34e3fC62bC303aD20e09ef622e2CB9F90d8e8A',
      250: '0x7D572502Bd99f8830F32F2F4CF0fC8767282A992',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'TOMB-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
    },
    tokenSymbol: 'TOMB',
    tokenAddresses: {
      4002: '',
      250: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'TSHARE-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x4733bc45ef91cf7ccecaeedb794727075fb209f2',
    },
    tokenSymbol: 'TSHARE',
    tokenAddresses: {
      4002: '',
      250: '0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'ETH-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      4002: '',
      250: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'BOO-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      4002: '',
      250: '0x841fad6eae12c286d1fd18d1d525dffa75c7effe',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'FTM-USDC LP',
    lpAddresses: {
      4002: '',
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      4002: '',
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'BTC-ETH LP',
    lpAddresses: {
      4002: '',
      250: '0xec454eda10accdd66209c57af8c12924556f3abd',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      4002: '',
      250: '0x321162cd933e2be498cd2267a90534a804051b11',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'miMATIC-USDC LP',
    lpAddresses: {
      4002: '',
      250: '0x4de9f0ed95de2461b6db1660f908348c42893b1a',
    },
    tokenSymbol: 'miMATIC',
    tokenAddresses: {
      4002: '',
      250: '0xfb98b335551a418cd0737375a2ea0ded62ea213b',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 9,
    risk: 4,
    lpSymbol: '2OMB-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xbdc7dfb7b88183e87f003ca6b5a2f81202343478',
    },
    tokenSymbol: '2OMB',
    tokenAddresses: {
      4002: '',
      250: '0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 10,
    risk: 4,
    lpSymbol: 'CREDIT-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x06f3cb227781a836fefaea7e686bdc857e80eaa7',
    },
    tokenSymbol: 'CREDIT',
    tokenAddresses: {
      4002: '',
      250: '0x77128dfdd0ac859b33f44050c6fa272f34872b5e',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 11,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DRAUGR',
    lpAddresses: {
      4002: '',
      250: '0x7d4b803319c500b785cb7e5987c0bd95924f3df4',
    },
    tokenSymbol: 'DRAUGR',
    tokenAddresses: {
      4002: '0x1D34e3fC62bC303aD20e09ef622e2CB9F90d8e8A',
      250: '0x7D572502Bd99f8830F32F2F4CF0fC8767282A992',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'TOMB',
    lpAddresses: {
      4002: '',
      250: '0x2a651563c9d3af67ae0388a5c8f89b867038089e',
    },
    tokenSymbol: 'TOMB',
    tokenAddresses: {
      4002: '',
      250: '0x6c021ae822bea943b2e66552bde1d2696a53fbb7',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.wftm,
  },
]

export default farms
