
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { CartProvider } from './hooks/cartProvider';

function App() {


  return (
    <>
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </Router>
    </CartProvider>
    </>
  )
}

export default App
