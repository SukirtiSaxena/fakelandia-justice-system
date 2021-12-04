import './Header.css';
import Nav from './Nav';

const Header = () => {
    return (
        <div className="header">
            <h3>Fakelander Justice System</h3>
            <div class="topnav header-right">
                <Nav />
            </div>
        </div>
    )
}

export default Header;