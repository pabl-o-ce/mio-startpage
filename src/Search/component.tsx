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
        <span className="search-icon"></span>
        <input className="form-control input-block input-dark" value={search} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="" aria-label="Full-width input" />
        <div className="d-flex flex-justify-center mt-6">
        <a href={'https://www.google.com/search?safe=strict&q=' + search} className="btn btn-outline mr-2 box-shadow-none" type="button">Google Search</a>
        <a href={'https://duckduckgo.com/?q=' + search} className="btn btn-outline box-shadow-none" type="button">DuckDuckGo Search</a>
        </div>
    </section>
  )};

export default Search;
