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
    <nav className="bg-dark px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-nowrap items-center justify-center mx-auto">
        <div className="items-center justify-center my-0 mx-auto flex w-full order-1" id="navbar-cta">
          <ul className="w-auto flex justify-center p-4 mt-4 rounded-lg bg-dark flex-row space-x-8 font-bold md:mt-0 md:text-lg">
            <li>
              <span>{time}</span>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <span>{date}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)};

export default Header;
