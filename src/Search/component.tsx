import React from 'react';

import './style.scss';

const Search = (): JSX.Element => {

  const [search, setSearch] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        window.location.href = `https://www.duckduckgo.com/?q=${search}`;
        break;
      // case 'ArrowUp':
      //   window.location.href = `https://www.duckduckgo.com/?q=${search}`;
      //   break;
      // case 'ArrowDown':
      //   window.location.href = `https://www.amazon.com/s?k=${search}`;
      //   break;
      // case 'ArrowRight':
      //   window.location.href = `https://www.newegg.com/p/pl?d=${search}`;
      //   break;
      // case 'ArrowLeft':
      //   window.location.href = `https://github.com/search?q=${search}`;
      //   break;
      default: 
        break;
    }
  };
  return (
    <section className="app-search pt-10 pb-6 relative z-50 border-bottom mt-4 md:mt-20">
        <img className="search-icon font-bold absolute top-12 left-4" src={process.env.PUBLIC_URL + '/assets/img/shuttle.svg'} width="45" alt='icon'/>
        <input className="w-full h-16 font-bold text-4xl indent-16 rounded caret-transparent bg-[#000600] color-[#29fd2e] block search-input" value={search} onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="" aria-label="Full-width input" autoFocus/>
    </section>
  )};

export default Search;
