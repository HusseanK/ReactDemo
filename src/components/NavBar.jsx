import { Link } from "react-router-dom"
import '../css/Navbar.css'


function NavBar () {
    return (
    <div className="banner">
        <h1 className="navbar-brand">
            Movie App
        </h1>
        <nav className="navbar">
            <div className="navbar-links">
                <Link to ="/" className="nav-link">Home</Link>
                <Link to ="/favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    </div>)
}

export default NavBar