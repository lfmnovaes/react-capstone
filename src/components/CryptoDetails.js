import React from 'react';

export default function CryptoDetails(data) {
  const { id } = data;

  return (
    <h1>
      CryptoDetails
      {id}
    </h1>
  );
}
