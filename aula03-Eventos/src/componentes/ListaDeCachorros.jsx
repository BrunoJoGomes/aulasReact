import React from 'react';

// Exercício 4 (array de objetos)
// Crie uma lista não ordenada de um array de objetos, e mostre pelo menos duas propriedades 
// dele na tela
const arrCachorros = [
    {id: 1, nome:"Bobby", raca:"Bulldog"},
    {id: 2, nome:"João", raca:"Salsicha"},
    {id: 3, nome:"Afrodite", raca:"Poodle"},
    {id: 4, nome:"Suzana", raca:"Pitbull"}
];

export function ListaDeCachorros(){
    return (
        <div>
            <ul>
                {arrCachorros.map((cachorro) => {return <li key={cachorro.id}>Nome do cachorro: {cachorro.nome}, raça: {cachorro.raca}</li>})}
            </ul>
        </div>
    );
}