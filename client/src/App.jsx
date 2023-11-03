import {Routes, Route} from 'react-router-dom';
import Landing from './views/landing/LandingPage';
import Home from './views/home/Home';
import Detail from './views/detail/Detail';
import Form from './views/Form/Form';
import NavBar from './components/NavBar/NavBar';
import Combate from './views/Combate/Combate';
import './App.css'


function App() {
  return (
    <div className='App' >
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Landing /> } />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='/form' element={ <Form /> } />
        <Route path='combate' Component={Combate} />
      </Routes>
    </div>
  )
}

export default App
