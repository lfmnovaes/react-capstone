import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/Nav';
import CryptoList from './components/CryptoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<CryptoList />} exact />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
