import React from 'react';
import PropTypes from 'prop-types';

export default function CryptoDetails({ data }) {
  return (
    <h1>
      CryptoDetails
      {data.id}
    </h1>
  );
}

CryptoDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
