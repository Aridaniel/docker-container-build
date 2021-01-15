import React, {useState, useEffect} from 'react';

const api = 'https://api.coincap.io/v2/assets';

function Currency({currencyData}) {
  


  
  const top10Curs = currencyData.slice(0, 10);
  const currencyList = top10Curs.map((item) => {

    const change = parseFloat(item.changePercent24Hr).toFixed(2);
    let changeDiv;
    if(change < 0) {
      changeDiv = <div className="negative__change">{change + '%'}</ div>;
    } else {
      changeDiv = <div className="positive__change">{'+' + change + '%'}</div>;
    }

  return <div key={item.id} className="currency__single--wrapper"><div className="currency__name">{'['+item.id+']'}</div><div className="currency__price">{'$' + parseFloat(item.priceUsd).toFixed(2)}</div><div className="currency__volume">{(parseFloat(item.volumeUsd24Hr) / 1000000000).toFixed(3) + 'b'}</div>{changeDiv}</div>
  });




  return (
    <div className="currency__wrapper">
    <h2 id="exchange__header">EXCHANGE</h2>
      <div className="currency__content">
        <div className="currency__hide-top"></div>
        <div className="currencies__info">
          <div className="currency__single--wrapper currency__headers">
            <div className="currency__space"></div>
            <div>PRICE</div>
            <div>VOLUME</div>
            <div>CHANGE</div>
          </div>
          {
            currencyList
          }
        </div>
      </div>
    </div>
  );
}

export default Currency;

