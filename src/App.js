import React from 'react';

function Food({ favorite }) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>HELLO!</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samguopsal" />
      <Food favorite="chukumi" />
    </div>

  );

}

export default App;
