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
import OutraLista from './components/OutraLista'
function App() {

  const meusItens = ["React", "Vue", "Angular"];
  const meusItens2 = [];
  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      {/* <Evento numero="1"></Evento>
      <Form/>
      <p>Olá, {name}</p>
      <p>Soma: {sum(2, 2)}</p>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="15" Profissão="programador"/> */}
      <Condicional />
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={meusItens2} />
    </div>
  );
};

window.onbeforeunload = () => {
  return "Quer mesmo sair?";
};

export default App;