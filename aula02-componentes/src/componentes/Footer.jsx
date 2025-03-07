import React from 'react';

export function Footer(props){
    return (
        <div>
            <p>{props.textDisplay}</p>
            <p>Ano atual: {props.ano}</p>
        </div>
    );
}
