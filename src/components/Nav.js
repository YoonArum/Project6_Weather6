import {Link} from "react-router-dom";
import './Nav.css';

export default function Nav() {
    return (
        <div>
            <h1>Weather</h1>
            <div className="button_changer">            
                <button><Link to='/Weather'>단기</Link></button>
                <button><Link to='/Weather2'>중기</Link></button>
            </div>
        </div>
    );
}