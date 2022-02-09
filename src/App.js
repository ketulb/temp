import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Cart from './components/cart/Cart.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
