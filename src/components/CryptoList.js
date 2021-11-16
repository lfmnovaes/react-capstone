import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { getCryptos } from '../redux/cryptos/cryptos';
import Crypto from './Crypto';

const CryptoList = () => {
  const dispatch = useDispatch();
  const cryptoStore = useSelector((store) => store.cryptoReducer);

  useEffect(() => {
    dispatch(getCryptos());
  }, []);

  const cryptoList = cryptoStore.map(
    (crypto) => (
      <Crypto key={crypto.id} data={crypto} />
    ),
  );

  return (
    <Container fluid>
      {cryptoList}
    </Container>
  );
};

export default CryptoList;
