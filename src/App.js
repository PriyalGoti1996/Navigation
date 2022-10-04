import logo from './logo.svg';
import './App.css';
import {Route,Routes,Link,NavLink } from 'react-router-dom';
import Home from './Components/Home';
import UserAction from './Components/UserAction';
import Error from './Components/Error';
import Resource from './Components/Resource';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <div className='nav'>
    <NavLink className={"navbar"} to='/'>Home</NavLink>
    <NavLink className={"navbar"} to='/action'>UserAction</NavLink>
    <NavLink className={"navbar"} to='/error'>Error</NavLink>
    <NavLink className={"navbar"} to='/resource'>ResourceCollection</NavLink>
    <NavLink className={"navbar"} to='/contact'>Contact</NavLink>
    </div>
   <Routes>
    <Route path='/' element={<Home/>}>home</Route>
    <Route path='/action' element={<UserAction/>}></Route>
    <Route path='/error' element={<Error/>}></Route>
    <Route path='/resource' element={<Resource/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
