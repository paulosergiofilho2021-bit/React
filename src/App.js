import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
function App() {

  const [nome, setNome] = useState()
  const meusItens = ["React", "Vue", "Angular"];
  const meusItens2 = [];
  return (
    <div className="App">
      {/* <h1>Renderização condicional</h1>
      <Condicional />
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={meusItens2} />
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/> */}
      <h1>Página principal</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </div>
  );
};
// window.onbeforeunload = () => {
//   return "Quer mesmo sair?";
// };

export default App;