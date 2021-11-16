import React from 'react';
import PropTypes from 'prop-types';
import Figure from 'react-bootstrap/Figure';

export default function Crypto({ data }) {
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        {data.symbol}
        {' | '}
        {data.name}
      </Figure.Caption>
    </Figure>
  );
}

Crypto.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    symbol: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
