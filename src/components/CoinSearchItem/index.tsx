import React, { FC } from 'react'
import { Approved, List } from '../icons'
import './style.scss'

type CoinSearchItemProps = {
  img: string
  name: string
  approved: boolean
  active: boolean
  count: number
  fullName: string
  nameID: string
  capital: number
}

const shorter = (str: string) => {
  if (str.length < 8) return str
  return `${str.slice(0, 4)}...${str.slice(-4)}`
}

const CoinSearchItem: FC<CoinSearchItemProps> = ({
  img,
  name,
  approved,
  active,
  count,
  fullName,
  nameID,
  capital,
}) => {
  return (
    <div className="coin">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className="coin__img" src={img} alt="token" />
        <div className="coin__data">
          <div className="coin__header">
            <div className="coin__name">{name}</div>
            <div className="coin__approved">
              <Approved color={'white'} />
            </div>
            <div className="coin__list">
              <List color={'white'} />
              {count}
            </div>
          </div>
          <div className="coin__about">
            <div className="coin__full-name">{fullName}</div>
            <div>·</div>
            <div className="coin__name-id">{shorter(nameID)}</div>
          </div>
        </div>
      </div>

      <div className="coin__capital">{capital}</div>
    </div>
  )
}

export default CoinSearchItem
