import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
function App() {

  const [nome, setNome] = useState()
  const meusItens = ["React", "Vue", "Angular"];
  const meusItens2 = [];
  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional />
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={meusItens2} />
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );
};

window.onbeforeunload = () => {
  return "Quer mesmo sair?";
};

export default App;