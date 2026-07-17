import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <Router>
        <nav>
            <ul>
                <li><Link className="my-nav" to="/">View All books</Link></li>
                <li><Link className="my-nav" to="/Create">Add a book</Link></li>
                <li><Link className="my-nav" to="/Update">Update a book</Link></li>
                <li><Link className="my-nav" to="/Delete">Delete a book</Link></li>
            </ul>
        </nav>
        </Router>
        </>
    );
}

export default Navbar;