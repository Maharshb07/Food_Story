import { Provider } from 'react-redux'
import './App.css';
import Home from './Components/Home/Home';
import store from './store';
import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
