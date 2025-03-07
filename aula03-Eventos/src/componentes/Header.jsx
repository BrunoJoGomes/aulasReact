import React from 'react';
import {Botao} from './Botao.jsx';

function handleOnClick(){
    alert("Função chamada!!");
}


// O parâmetro especial event (ou e) em funções de eventos do React (e do JavaScript) representa o objeto do evento que disparou a função. 
// Ele contém informações sobre o evento ocorrido, como o tipo de evento, o elemento alvo (target), e muito mais.

function handleOnChange(e){
    //  Aqui, event.target.value acessa o valor digitado no input e exibe no console
    console.log(e.target.value);
}

function handleOnMouseOver(){
    alert("Passou aqui!");
}

function BotaoHandleClick(props){
    const msg = props.textDisplay + " - " + props.msgAlerta;
    return (
        <button onClick={() => {alert(msg)}}>{props.textDisplay}</button>
    );
}


function Header(){
    return (
        <div>
            <header className="header">
                <h1 className="heading">Aula 03 - Eventos e iteração de arrays</h1>
                <nav className="nav">

                    {/* O evento onChange serve para detectar mudanças em elementos interativos, como inputs, selects e textareas. 
                    Ele é acionado sempre que o valor do elemento é modificado */}
                    {/* Quando o botão é clicado, handleClick recebe um objeto event automaticamente. 
                        Quando uma função é associada a um evento ela recebe o objeto event e então podemos receber ele na função e 
                        acessar seus valores */}
                    <input type="text" onChange={handleOnChange}/>
                    
                    <Botao color="pink" textDisplay="Botão"/>
                    
                    <BotaoHandleClick textDisplay="Botão 1" msgAlerta="Mensagem"/>

                    {/* <button className="nav-button" onMouseOver={handleOnMouseOver}>Passe aqui</button> */}
                    {/* <button className="nav-button" onClick={() => {alert("Botão clicado!")}}>Clique em mim</button> */}
                    {/* <button className="nav-button" onClick={() => {console.log("Botão clicado!")}}>Clique em mim</button> */}
                    {/* <button className="nav-button" onClick={handleOnClick}>Clique em mim</button> */}

                </nav>
            </header>
        </div>
    );
}

export default Header