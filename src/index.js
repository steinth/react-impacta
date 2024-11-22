import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import TestCep from './components/TestCep'
import CadastroUser from './components/CadastroUser';
import reportWebVitals from './reportWebVitals';
import ListUser from './components/ListUser';
import UpdateUser from './components/UpdateUser';
import CadastroProduto from './components/CadastroProduto';
import ListProduto from './components/ListProduto';
import UpdateProduto from './components/UpdateProduto';
import Compra from './components/Compra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/cadastro-usuario' element={<CadastroUser/>}/>
      <Route path='/cep' element={<TestCep/>}/>
      <Route path='/listar-usuario' element={<ListUser/>}/>
      <Route path='/update-usuario/:id' element={<UpdateUser/>}/>
      <Route path='/cadastro-produto' element={<CadastroProduto/>}/>
      <Route path='/listar-produto' element={<ListProduto/>}/>
      <Route path='/update-produto/:id' element={<UpdateProduto/>}/>
      <Route path='/compra' element={<Compra/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();