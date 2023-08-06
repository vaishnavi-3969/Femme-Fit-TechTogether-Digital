import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
    <div>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
      </Routes>
    </BrowserRouter>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
