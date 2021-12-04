import './Header.css';
import Nav from './Nav';

const Header = () => {
    return (
        <div className="Header">

            <div class="topnav">
                <h1>Fakelander Justice System</h1>
                <Nav/>
            </div>
        </div>
    )
}

export default Header;