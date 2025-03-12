import './Navbar.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Bar'>
      <Link to='/'>
        <img className='lg' src={logo} alt="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <div className='search-bar'>
        <input type="text" placeholder="Search..." />
      </div>
      <div className='btns'>
        <button className='bt'>
          <div className='sign-up'>
          <Link to="/sign" className='sign-up'>Sign Up</Link>
          </div>
        </button>
        <button className='bt'>
          <Link to="/login" className='log-in'>Log In</Link>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
