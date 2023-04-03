import './App.css';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Auth from './components/Auth';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {

  const auth = useSelector(state=> state.auth.isAuth);
  console.log(auth);

  return (
    <Fragment>
      <Header />
      {!auth && <Auth />}
      {auth && <Profile />}
    </Fragment>
  );
}

export default App;
