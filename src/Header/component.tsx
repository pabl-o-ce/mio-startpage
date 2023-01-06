import React, { useEffect } from 'react';

import './style.scss';

// let time = new Date().toLocaleString();

const Header = (): JSX.Element => {
  const [today, setDate] = React.useState<Date>(new Date());

  useEffect(() => {
    return () => clearInterval(setInterval(() => setDate(new Date()), 10 * 1000));
  }, []);

  const day = today.toLocaleDateString('en', { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString('en', { month: 'long' })}\n\n`
  const time = today.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });

  return (
  <section className="app-header pb-2">
      <div className="header-main d-flex border-bottom">
        <div className="header-label">
          <p className="ht h1 text-left mb-1">Bienvenue, monsieur</p>
        </div>
        <div className="header-time text-right">
          <p className="ht h1 mb-1">{time}</p>
          <p className="ht-2 h2 mt-3">{date}</p>
        </div>
      </div>
  </section>
)};

export default Header;
