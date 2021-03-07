import {Link} from 'react-router-dom';

/*imports styles */
import './styles/popup.css'

export default function Popup(){
    return (
    <div className='popup'>
        <div className = "box-loser">
            <h1>Game Over</h1>
            <h2>Você perdeu</h2>
            <Link className="btn-popup" to="/">Clique aqui para recomeçar</Link>
        </div> 
    </div>
    );
}