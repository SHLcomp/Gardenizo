import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
    <header>
        <nav> 
          
            <h3 className="center brand-name"><Link className="a" to="/" >Gardenizo</Link></h3>
            {/* <!-- search icon --> */}
         
                <div className="searchbar center"> 
                    <input type="text" className="search_text_area" name="" id="search_text_area" placeholder="Search for pruducts"
                    onKeyUp="search()"/>           
                    <span className="material-symbols-outlined cart_icon center">
                        <Link to="/cart" className='a'>shopping_cart
                      </Link></span>
            <span className="material-symbols-outlined search_icon center">
                search
                </span>
                </div>
            <ul>
                <li><Link to="/" className="a">Home</Link></li>
                <li><Link to="/shop" className="a">Shop</Link></li>
                <li><Link to="/about" className="a">About</Link></li>
                <li><Link to="/contact" className="a">Contact</Link></li>
                <li><a href="#mostSelled" className="a">Most Selled</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Navbar;
