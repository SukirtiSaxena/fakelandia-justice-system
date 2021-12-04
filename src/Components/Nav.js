import { NavLink } from "react-router-dom";

const Nav = () =>
    <nav>

        <NavLink to='/'><h3>Home</h3> </NavLink>
        <NavLink to='/Misdemeanour'><h3>Misdemeanours</h3> </NavLink>
        <NavLink to='/Confession'><h3>Confess To Us</h3> </NavLink>

    </nav>;

export default Nav;