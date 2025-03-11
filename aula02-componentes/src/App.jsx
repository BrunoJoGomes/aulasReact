import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botao from './componentes/Botao.jsx';
import {Header} from './componentes/Header.jsx'
import {Footer} from './componentes/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  const data = new Date(); 

  // Array
  const vNumeros = [1,2,3,4,5];

  // Objeto
  const objCurso = {
    nome: "BCC",
    detalhes: "Ciência da computação"
  } 

  // Array de objetos 
  // const cursos = [{nome: "", detalhes: ""}, {}]

  return (
    <>
      {/* <p>{objCurso.detalhes}</p>
      <p>{vNumeros[0]}</p> */}

      {/* Exercício 1 
        Crie dois componentes: Header e Footer. 
        O Header deve exibir um título e um subtítulo recebidos por props, e o Footer deve exibir um 
        rodapé com o ano atual e um texto recebido por props.
      */}
      <Header titulo="minha header" subtitulo="meu subtítulo"/>

        {/* Exercício 2 
          Crie um componente que renderize três botões que recebam props para mudar seu texto e 
          sua cor
        */}
        <Botao textDisplay="Botão 1 :)" cor="blue" isDisabled={false}/>
        <Botao textDisplay="Botão 2 :)" cor="pink"/>
        <Botao textDisplay="Botão 3 :)" cor="green"/>

      <Footer textDisplay="Esse é meu footer" ano={data.getFullYear()}/>
    </>
  );
}

export default App
