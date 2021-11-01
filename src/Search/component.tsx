import React, { InputHTMLAttributes } from 'react';

import './style.scss';

const Search: React.FC = () => {

  const [search, setSearch] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        window.location.href = `https://www.google.com/search?safe=strict&q=${search}`;
        break;
      case 'ArrowUp':
        window.location.href = `https://www.duckduckgo.com/?q=${search}`;
        break;
      case 'ArrowDown':
        window.location.href = `https://www.amazon.com/s?k=${search}`;
        break;
      case 'ArrowRight':
        window.location.href = `https://www.newegg.com/p/pl?d=${search}`;
        break;
      case 'ArrowLeft':
        window.location.href = `https://github.com/search?q=${search}`;
        break;
      default: 
        break;
    }
  };
  return (
    <section className="app-search pb-6 border-bottom">
        <img className="search-icon" src={process.env.PUBLIC_URL + '/assets/img/shuttle.svg'} width="45"/>
        <input className="form-control input-block input-dark" value={search} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="" aria-label="Full-width input" autoFocus/>
        <div className="d-flex flex-justify-center mt-6">
          <a href={`https://www.google.com/search?safe=strict&q=${search}`} className="btn box-shadow-none" type="button">
            <img className="search-google" src={`${process.env.PUBLIC_URL}/assets/img/google.svg`} width="22"/>
          </a>
          <a href={`https://www.duckduckgo.com/?q=${search}`} className="btn box-shadow-none" type="button">
            <img className="search-duckduckgo" src={`${process.env.PUBLIC_URL}/assets/img/duckduckgo.svg`} width="25"/>
          </a>
          <a href={`https://www.amazon.com/s?k=${search}`} className="btn box-shadow-none" type="button">
            <img className="search-amazon" src={`${process.env.PUBLIC_URL}/assets/img/amazon.svg`} width="25"/>
          </a>
        </div>
    </section>
  )};

export default Search;
