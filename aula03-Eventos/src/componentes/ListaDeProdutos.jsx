import React from 'react';

// Exercício 3 (array simples)
const arrProdutos = ["Televisão","Celular","Computador","Liquidificador"];

export function ListaDeProdutos(){
    return (
        <div>
            <ul>
                {arrProdutos.map((produto, index) => {return <li key={index}>Index do produto: {index}, nome do produto: {produto}</li>})}
            </ul>
        </div>
    );
}



