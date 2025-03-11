import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import imagem from "./assets/OIP.jpg";

// Aula 04 state e hooks

// STATE - dados no componente que vão determinar certos comportamentos/gatilhos
// Em React, states (ou "estados") são variáveis que armazenam informações dinâmicas de um componente e 
// determinam como ele deve ser renderizado e comportar-se ao longo do tempo. Quando um state muda, 
// o React re-renderiza automaticamente o componente para refletir a nova informação.
// useState: Adicionar estados a um componente funcional / variáveis
// Como usar states em react? 
// Usando useState (em componentes funcionais)
// O useState é um hook que permite criar estados em componentes funcionais:
// import React, { useState } from "react"; importa o hook

// function ExemploState(){
//   const = [variavelX,setVariavelX] = useState(valorInicialX);
//               cria variável chamada variavelX
//                         cria a função que muda a variável chama setVariavelX
//                                                   valor inicial que variavelX tem
// }

// OBS: Só podem ser declarados no começo

// EXEMPLO:
// import { useState } from "react";

// function Contador() {
//     const [contador, setContador] = useState(0); 
            // variável de estado
           //           função para atualizar o state, quando setContador é chamado o componente é re-renderizado com novo valor
              //                       inicia o state com valor 0

//     return (
//         <div>
//             <p>Contador: {contador}</p>
//             <button onClick={() => setContador(contador + 1)}>
//                 Aumentar
//             </button>
//         </div>
//     );
//   }

// Diferença entre State e Props:
// State: Controlado pelo próprio componente e pode ser alterado. (no próprio componente)
// Props: Passado de um componente pai para um filho e é imutável.

// Para passar dados do filho para o pai (lifting state up):
// "Lifting State Up" (ou "elevar o estado") é um padrão do React que consiste em mover o estado de um 
// componente filho para um componente pai. Isso é feito para que múltiplos componentes filhos possam compartilhar 
// e sincronizar um mesmo estado
// Evita estados duplicados: Em vez de cada componente ter seu próprio estado, ele fica centralizado no componente pai.
// Facilita a comunicação entre componentes irmãos: Se dois componentes precisam compartilhar informações, o estado deve ser 
// elevado para o menor ancestral comum.
// Melhora a organização do código: Separar a lógica do estado pode tornar o código mais fácil de manter

// Exemplo Prático:
// Suponha que temos dois componentes, um Input para digitar um nome e um Mensagem que exibe esse nome. Para que ambos compartilhem 
// o mesmo estado, o estado precisa estar no componente pai.

// Com Lifting State Up (estado movido para o componente pai)
// o estado fica no App, e ele passa o valor e a função de atualização para os filhos como props:

// function Input({ nome, setNome }) {
//   return (
//       <input 
//           type="text" 
//           value={nome} 
//           onChange={(e) => setNome(e.target.value)} 
//       />
//   );
// }

// function Mensagem({ nome }) {
//   return <p>Olá, {nome}!</p>;
// }

// function App() {
//   const [nome, setNome] = React.useState("");

//   return (
//       <div>
//           <Input nome={nome} setNome={setNome} />
//           <Mensagem nome={nome} />
//       </div>
//   );
// }

// Agora, o estado está centralizado no App, e tanto Input quanto Mensagem podem acessá-lo.

// O pai tem uma função que sabe lidar com os dados.
// O pai passa essa função para o filho através de uma
// prop.
// O filho chama essa função e envia os dados como
// argumento.
// O pai recebe esses dados e faz o que precisar com 
// eles. 


// Pegar um valor do input usando onClick
// import { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   function handleButtonClick() {
//     alert(`O valor digitado foi: ${inputValue}`);
//   }

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleInputChange} 
//         placeholder="Digite algo..." 
//       />
//       <button onClick={handleButtonClick}>Mostrar valor</button>
//     </div>
//   );
// }

// export default App;




function App() {
  const [temaEscuro,setTemaEscuro] = useState(false);

  const [exibirImagem,setExibirImagem] = useState(false);

  const [contador,setContador] = useState(0);

  function mudarTema(){
    setTemaEscuro(!temaEscuro);
  }

  function mostrarImagem(){
    setExibirImagem(!exibirImagem);
  }

  function decrementar(){
    if (contador > 0){
      setContador(contador-1)
    }
    else{
      setContador(0)
    }
      
  }


  function handleOnClick(){
    const arrOpcoes = ["Não","Sim","Depende","Talvez"];
    const indice = Math.random() * arrOpcoes.length
    const indiceArredondado = Math.floor(indice)
    const resposta = arrOpcoes[indiceArredondado]
    return alert(resposta);
  }


  return (
    <>
      {/* Exercício 1 
        Desenvolva um Botão que  que faça a mudança de estado do tema da sua tela inicial, 
        alternando entre tema claro e escuro – usando useState */}
      {/* <div className={temaEscuro ? 'App' : 'AppLight'}>
        <button onClick={mudarTema}>{temaEscuro ? "Mudar tema para claro" : "Mudar tema para escuro"}</button>
      </div> */}

      {/* Exercício 2 
        Crie um botão que controla a exibição de um conteúdo
        Dica: props e if
      */}
      {/* <div>
        <button onClick={mostrarImagem}>{exibirImagem ? "Esconder imagem" : "Mostrar imagem"}</button>

        {exibirImagem ? <p><img src={imagem}/></p> : null}

      </div> */}

      {/* Exercício 3 
        Desenvolva um contador, que incremente e decremente e renderize seu valor atual na tela, 
        mas impossibilite que o contador fique negativo.
      */}

      {/* <div>
        <p>{contador}</p>
        <button onClick={() => setContador(contador+1)}>Incrementar</button>
        <p></p>
        <button onClick={decrementar}>Decrementar</button>
      </div> */}

      {/* Exercício 4 
        Crie um componente que simula a famosa ‘Bola 8 Mágica’. Ao clicar em um botão “Pergunte 
        à Bola 8”, uma função é acionada e escolhe aleatoriamente uma resposta de um conjunto pré
        definido  (“Sim”, “Não”, “Talvez”, “Depende”...) e exibe a resposta em um alert
        Dica: Utilizar Math.Random() para escolher aleatoriamente a resposta.
      */}
      {/* <div>
        <p>Faça sua pergunta: <input type="text" /></p>
        <button onClick={handleOnClick}>Perguntar</button>
      </div> */}



    </>
  );
}

export default App
