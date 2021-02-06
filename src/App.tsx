import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header';
import { Search } from './Search';
import { Bookmark } from './Bookmark';

function App() {
  return (
    <div className="App overflow-hidden">
      <Header/>
      <Search/>
      <Bookmark/>
      <img className="position-absolute top-0 right-0 left-0 bottom-0 rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -10}} width="50%"/>
      <img className="position-absolute top-0 right-0 bottom-0 rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -10}} width="50%"/>
    </div>
  );
}

export default App;
