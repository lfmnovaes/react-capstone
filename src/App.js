import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptos } from './redux/cryptos/cryptos';
import Nav from './components/Nav';
import CryptoList from './components/CryptoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cryptoList = useSelector((store) => store.cryptoReducer);

  useEffect(() => {
    dispatch(getCryptos());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<CryptoList list={cryptoList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
