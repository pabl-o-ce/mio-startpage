import './App.scss';
import { Header } from './Header';
import { Search } from './Search';
import { Bookmark } from './Bookmark';
import { Fragment } from 'react';

const App = () : JSX.Element => {
  return (
    <Fragment>
      <div className="App relative overflow-hidden">
        <Header/>
        <Search/>
        <Bookmark/>
        <img className="absolute top-0 left-0 animate-pulse rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: 1}} width="50%"/>
        <img className="absolute right-0 bottom-0 animate-pulse rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: 1}} width="50%"/>
        <img className="absolute left-0 bottom-0 animate-pulse rotate0" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: 1}} width="50%"/>
        <img className="absolute top-0 right-0 animate-pulse rotate" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: 1}} width="50%"/>
      </div>
    </Fragment>
  );
}

export default App;
