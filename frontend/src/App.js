import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Login from './components/LogIn/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/home' element = {Home}/>
        <Route path='/login' element = {Login}/>
        <Route path='/signup' element = {SignUp} />
      </Routes>
    </div>
  );
}

export default App;
