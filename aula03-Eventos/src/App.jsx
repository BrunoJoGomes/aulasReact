import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header.jsx';
import {ListaDeProdutos} from './componentes/ListaDeProdutos.jsx';
import { ListaDeCachorros } from './componentes/ListaDeCachorros.jsx';

function App() {

  const arrFrutas = ["Maçã","Banana","Kiwi","Melância"];

  const arrAulas = [
    {id: 1, nome:"Aula 1", detalhes:"Introdução"},
    {id: 2, nome:"Aula 2", detalhes:"Eventos e .map()"},
    {id: 3, nome:"Aula 3", detalhes:"States e Hooks"}
  ];

  return (
    <>

      {/* <ol>
        {arrFrutas.map((fruta, index) => {return <li key={index}>{fruta}</li>})}
      </ol>

      <ul>
        {arrFrutas.map((fruta, index) => {return <li key={index}><button>{fruta}</button></li>})}
      </ul>

      <ul>
        {arrAulas.map((aula) => {return <li key={aula.id}>{aula.nome}: {aula.detalhes}</li>})}
      </ul> */}

      {/* {arrAulas.map((aula) => {return <p key={aula.id}>{aula.nome}</p>})} */}

      {/* Exercício 3 */}
      {/* <ListaDeProdutos /> */}

      {/* Exercício 4 */}
      <ListaDeCachorros />

      <Header />
    </>
  );
}

export default App
