import React from 'react';

function Botao({textDisplay, cor, ...props}){

    return (
        <div>
            {/* <button style={{'backgroundColor': cor}}>{textDisplay}</button> */}
            <button>{props.isDisabled ? "Desabilitado" : textDisplay}</button>
        </div>
    );
}

export default Botao