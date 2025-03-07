import React from 'react';
import reactLogo from '../assets/react.svg';
import '../styles/Header.css';


export function Header(props){
    return (
        <div>
            {/* Exercício 1 */}
            {/* <h1>Essa é {props.titulo} </h1>
            <h2>Esse é {props.subtitulo}</h2> */}
            <header className="header">
                <img src={reactLogo} alt="Logo" className="logo"/>
                <h1 className="heading">Aula 02 - Componentes</h1>
                <nav className="nav">
                    <button className="nav-button">Página Inicial</button>
                    <button className="nav-button">Curso</button>
                    <button className="nav-button">Professores</button>
                    <button className="nav-button">Campus</button>
                </nav>
            </header>
        </div>
    );

}