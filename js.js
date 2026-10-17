import React from "react";

function App() {
  const name = "Paulo";

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Olá</h1>
      <p>Meu primeiro site com react</p>
      <p>Olá, {name}</p>
      <p>Soma: {sum(2, 2)}</p>
    </div>
  );
}
export default App;