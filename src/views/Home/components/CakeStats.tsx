import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 2px 12px rgba(25, 19, 38, 0.1);
  border-radius: 32px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let draugrPerBlock = 0;
  if(farms && farms[0] && farms[0].draugrPerBlock){
    draugrPerBlock = new BigNumber(farms[0].draugrPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Egg Stats')}
        </Heading>
        <Row>
          <Text fontSize="20px">{TranslateString(536, 'Total DRAUGR Supply')}</Text>
          {cakeSupply && <CardValue fontSize="20px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(538, 'Total DRAUGR Burned')}</Text>
          <CardValue fontSize="20px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="20px">{TranslateString(540, 'New EGG/block')}</Text>
          <Text bold fontSize="20px">{draugrPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
