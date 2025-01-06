import './Navbar.css'
import logo from './assets/logo.png'
function Navbar() {
  return (
    <nav className='Bar'>
        <a href='#' >
        <img className='lg'src={logo} alt="logo" /></a>
      <ul className="nav-links" > 
        
        <li>
          <a href="/" >Home</a>
        </li>
        <li>
        <a href="/about">About</a>
        </li>
        <li>
         <a href="/contact">Contact</a>
        </li>
        <li>
            <a href="/services">Products</a>
        </li>
      </ul>
      <div className='search-bar'>
          <input type="text" placeholder="Search..." />
        </div>
      <div className='btns'>
      <button className='bt' >Sign Up</button>
      <button className='bt'>Log In</button></div>
    </nav>
  );
}
export default Navbar;