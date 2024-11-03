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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/cadastro' element={<CadastroUser/>}/>
      <Route path='/cep' element={<TestCep/>}/>
      <Route path='/listar-usuario' element={<ListUser/>}/>
      <Route path='/update/:id' element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();