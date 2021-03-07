import {Link} from 'react-router-dom';

/*imports styles */
import './style/index.css';

export default function Start(){
    return (
        /*render view */
        <div className = "page">
            <div className = "box-start">
                <h1>Olá, Seja bem vindo ao Quiz de Programadores !</h1>

                <h2>Como jogar : </h2>

                <p>O objetivo nesse jogo é responder todas as perguntas sem erros,
                caso ocorra um erro, você será redirecionado para essa página novamente.</p>

                <Link className="btn-index" to="/question">Start</Link>
            </div>
        </div>
    );   
}