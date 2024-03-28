import React from 'react'
import './Coin.css'

const Coin = ({image,name,price,volume,priceChange,marketCap}) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'></p>
            </div>

            <div className='coin-data'>
                <p className='coin-price'>${price}</p>
                
                {priceChange<0 ? (
                    <p className='coin-percent red'>{priceChange.tofixed(2)}%</p>
                    ) : (
                    <p className='coin-percent green'>{priceChange.tofixed(2)}%</p>
                )}

                <p className='coin-marketcap'>
                    Mkt Cap: ${marketCap.toLocaleString()}
                </p>
            </div>

        </div>
    </div>
  )
}

export default Coin