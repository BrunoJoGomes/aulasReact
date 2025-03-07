import React from 'react';

export function Botao({color, textDisplay}){
    return (
        <div>
            <button style={{'backgroundColor': color}}>{textDisplay}</button>
        </div>
    );
}