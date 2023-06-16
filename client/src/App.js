import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Description from './components/Description';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/descrption/:id' element={<Description/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
