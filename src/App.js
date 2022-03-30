import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from './redux/cryptos/cryptos';
import Nav from './components/Nav';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const cryptoList = useSelector((store) => store.cryptoReducer);
  const [data, setData] = useState('');
  const [filteredList, setFilter] = useState(cryptoList);

  useEffect(() => {
    if (cryptoList.length === 0) {
      dispatch(getCryptos());
    }
  }, [cryptoList.length, dispatch]);

  useEffect(() => {
    setFilter(() =>
      cryptoList.filter(
        (e) => e.name.toLowerCase().includes(data) || e.name.includes(data)
      )
    );
  }, [data, cryptoList]);

  return (
    <div className="app">
      <BrowserRouter>
        <Nav sendData={setData} />
        <Routes>
          {filteredList.length === 0 && data === '' ? (
            <Route exact path="/" element={<CryptoList list={cryptoList} />} />
          ) : (
            <Route
              exact
              path="/"
              element={<CryptoList list={filteredList} />}
            />
          )}
          {cryptoList.map((e) => (
            <Route
              key={e.id}
              path={`/${e.id}`}
              element={<CryptoDetails data={e} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
