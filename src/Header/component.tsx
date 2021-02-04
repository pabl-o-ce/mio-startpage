import React from 'react';

import './style.scss';

let time = new Date().toLocaleString();

const Header: React.FC = () => {
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 10 * 1000); // 60 *
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const day = today.toLocaleDateString('en', { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString('en', { month: 'long' })}\n\n`
  const time = today.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });

  return (
  <section className="app-header">
      <div className="header-main d-flex pb-6 border-bottom">
        <div className="header-label">
          <h1 className="text-left mb-1">Benvenuto, sir</h1>
        </div>
        <div className="header-time text-right">
          <h1 className="mb-1">{time}</h1>
          <small><strong>{date}</strong></small>
        </div>
      </div>
  </section>
)};

export default Header;
