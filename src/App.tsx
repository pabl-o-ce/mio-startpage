import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header';
import { Search } from './Search';

function App() {
  return (
    <div className="App position-relative overflow-x-hidden">
      <Header/>
      <Search/>
      <img className="position-absolute top-0 rigth-0 left-0 bottom-0 rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -10}} width="100%"/>
      <img className="position-absolute top-0 rigth-0 left-0 bottom-0 rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -10}} width="100%"/>
    </div>
  );
}

export default App;
