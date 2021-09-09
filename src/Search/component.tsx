import React from 'react';

import './style.scss';

const Search: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      window.location.href = 'https://www.google.com/search?safe=strict&q=' + search;
    }
    if (e.key === 'Shift') {
      window.location.href = 'https://www.duckduckgo.com/?q=' + search;
    }
  };
  return (
    <section className="app-search pb-6 border-bottom">
        <img className="search-icon" src={process.env.PUBLIC_URL + '/assets/img/shuttle.svg'} width="45"/>
        <input className="form-control input-block input-dark" value={search} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="" aria-label="Full-width input" />
        <div className="d-flex flex-justify-center mt-6">
        <a href={'https://www.google.com/search?safe=strict&q=' + search} className="btn btn-outline mr-3 box-shadow-none pt-5 pb-5 pl-7 pr-7" type="button">Google Search</a>
        <a href={'https://duckduckgo.com/?q=' + search} className="btn btn-outline mr-3 box-shadow-none pt-5 pb-5 pl-7 pr-7" type="button">DuckDuckGo Search</a>
        <a href={'https://www.amazon.com/s?k=' + search} className="btn btn-outline box-shadow-none pt-5 pb-5 pl-7 pr-7" type="button">Amazon Search</a>
        </div>
    </section>
  )};

export default Search;
