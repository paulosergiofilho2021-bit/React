import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  const name = "Paulo";

  function sum(a,b){
    return a + b;
  };

  const img = './images.png';

  const nome = "Maria";

  return (
    <div className="App">
      <Evento numero="1"></Evento>
      <Form/>
      <p>Olá, {name}</p>
      <p>Soma: {sum(2, 2)}</p>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" idade="15" Profissão="programador"/>
    </div>
  );
};

window.onbeforeunload = () => {
  return "Quer mesmo sair?";
};

export default App;