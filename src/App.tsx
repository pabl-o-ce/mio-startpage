import './App.scss';
import { Header } from './Header';
import { Search } from './Search';
import { Bookmark } from './Bookmark';
import { Fragment } from 'react';

const App = () : JSX.Element => {
  return (
    <Fragment>
      <div className="App">
        <Header/>
        <Search/>
        <Bookmark/>
      </div>
      {/* <img className="position-absolute top-0 left-0 fadeOut" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -1}} width="50%"/>
      <img className="position-absolute right-0 bottom-0 fadeOut" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -1}} width="50%"/>
      <img className="position-absolute left-0 bottom-0 fadeOut" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -1}} width="50%"/>
      <img className="position-absolute top-0 right-0 fadeOut" src={process.env.PUBLIC_URL + "/assets/img/stars.svg"} alt="" style={{zIndex: -1}} width="50%"/> */}
    </Fragment>
  );
}

export default App;
