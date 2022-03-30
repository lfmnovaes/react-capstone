import React from 'react';
import Row from 'react-bootstrap/Row';
import Crypto from './Crypto';

const CryptoList = (data) => {
  const { list } = data;
  return (
    <Row xs={2} lg={4} className="g-2 py-2 px-2">
      {list.map((e) => (
        <Crypto
          key={e.id}
          id={e.id}
          symbol={e.symbol}
          name={e.name}
          price={e.market_data.current_price.usd}
          img={e.image.large}
        />
      ))}
    </Row>
  );
};

export default CryptoList;
