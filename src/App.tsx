import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header';
import { Search } from './Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
    </div>
  );
}

export default App;
