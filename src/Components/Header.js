import './Header.css';
import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour';
const Header = () => {
    return (
        <div className="Header">

            <div class="topnav">
                <h1>Fakelander Justice System</h1>
                <a href=""><Home /></a>
                <a href=""><Confession /></a>
                <a href=""><Misdemeanour /></a>

            </div>
        </div>
    )
}

export default Header;