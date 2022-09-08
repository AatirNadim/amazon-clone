//the amazon header
//es7 snippets
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { signOut } from 'firebase/auth'
import {auth} from './Firebase'
// import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

function Header() {
    const [ {basket, user}, dispatch] = UseStateValue();

    // we want the sign in button to take to the login page only in case of no user
    //else if there is user, it will display sign out and will sign out with help of firebase/auth and wont route to the login page

    const handleAuthentication = () => {
      if(user) {
        signOut(auth).then (() => {
          alert('User successfully signed out')
        })
        .catch((error) => {
          alert('Some error occured')
        })
      }
    }
  return (
    <div className="header">
      {/* header logo */}
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="this is it"
          className="header-logo"
        ></img>
      </Link>

      {/* header search */}
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-logo" />
        {/* <ContentPasteSearchIcon/> */}
      </div>
      <div className="header-nav">
        <Link to = {!user && '/login'}>
        <div onClick= {handleAuthentication} className="header-option">
              {/* we can remember the context of the user with the help of the react context api*/}
                <span className="header-option-line1">Hello {!user ? 'Guest' : user.email}</span>
                <span className="header-option-line2">{user ? 'Sign Out' : 'Sign In'}</span>
          
        </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line1">Return</span>
          <span className="header-option-line2">&amp; Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Your</span>
          <span className="header-option-line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingBasketIcon className="header-option-basket-icon" />
            <span className="header-option-line2 header-basket-count">
              {basket?.length}
            </span>
            {/* putting the ? in the function, tells the computer to gracefully handle the error */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;