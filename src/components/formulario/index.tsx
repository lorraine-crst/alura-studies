import React from 'react';
import Botao from '../botão';

class Formulario extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="terefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='O que voce quer estudar?' required />
                </div>
                <div>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" step={1} name='tempo' id='tempo' min='00:00:00' max='01:30:00' required />
                    <Botao />
                </div>
            </form>
        )

    }
}

export default Formulario;