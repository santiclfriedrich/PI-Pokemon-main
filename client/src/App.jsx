import {Routes, Route, useLocation} from 'react-router-dom';
import Landing from './views/landing/LandingPage';
import Home from './views/Home/Home';
import Detail from './views/detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import './App.css'


function App() {

  const location = useLocation();

  return (
    <div className='App' >
       {location.pathname !== '/' && <NavBar/> } 
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='/form' element={ <Form /> } />
      </Routes>
    </div>
  )
}

export default App
