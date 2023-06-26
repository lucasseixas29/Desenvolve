import React from "react";
import style from "./Botao.module.scss"

interface Props {
    texto:string, type?: 'button' |'submit' | 'reset' | undefined, onClick?: () => void
}

function Botao( {onClick, type, texto}) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
        {texto}
        </button>
    )
}

class Botao1 extends React.Component <{texto:string, type?: 'button' |'submit' | 'reset' | undefined, onClick?: () => void}>{
    render() {
        const { type = 'button', onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao; 