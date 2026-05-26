import {NavLink} from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/career">Career</NavLink>
        </nav>
    )
}

export default Navbar