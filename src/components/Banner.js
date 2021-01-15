import React from 'react'

export default function Banner({currencyData}) {
    const coinElements = currencyData.map((coin)=> <span className= "coin">{coin.id}: {'$' + parseFloat(coin.priceUsd).toFixed(2)} </span>)
    return (
        <div>
            <marquee>
                {coinElements}
            </marquee>
        </div>
    )
}
