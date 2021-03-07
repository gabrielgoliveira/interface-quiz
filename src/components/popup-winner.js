import {Link} from 'react-router-dom';

/*imports styles */
import './styles/popup.css'

export default function Popup(){
    return (
    <div className='popup'>
        <div className = "box-loser">
            <h1>Parabéns</h1>
            <h2>Você Ganhou</h2>
            <Link className="btn-popup" to="/">Clique aqui voltar para o Início</Link>
        </div> 
    </div>
    );
}