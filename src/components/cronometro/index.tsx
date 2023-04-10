import Botao from '../botão';
import Relogio from './Relogio';
import style from "./cronometro.module.scss";

export default function cronometro (){
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie um cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}