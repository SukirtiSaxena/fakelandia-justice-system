import { NavLink } from "react-router-dom";

const Nav = () =>
    <nav>

         <NavLink to='/'><h3>Home</h3> </NavLink> 
         <NavLink to='/Confession'><h3>Confession</h3> </NavLink>
         <NavLink to='/Misdemeanour'><h3>Misdemeanour</h3> </NavLink> 

    </nav>;

export default Nav;