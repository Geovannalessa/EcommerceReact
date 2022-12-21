import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// pages:
import Home from './pages/Home/Home';
import NovoProduto from './pages/NovoProduto/NovoProduto'
import Login from './pages/Login/Login';
import EditarProduto from './pages/EditarProduto/EditarProduto';
import Cadastrar from './pages/Cadastrar/Cadastrar';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/novoProduto' element={<NovoProduto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/editarProduto' element={<EditarProduto/>}/>
        <Route path='/cadastro' element={<Cadastrar/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
