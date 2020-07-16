import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from "./StateProvider";
import {auth} from './firebase'

function Header() {

   const [{basket,user}] = useStateValue();

   console.log(basket,user);
   const login = () =>{
      if(user){
         auth.signOut();
      }
   }
   // console.log(user.email);

    return (
        <nav className="header">
          <Link to="/home">
          <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
          </Link>  
          
          {/* Search Box */}
          <div className="header__search">     
          <input type="text" className="header__searchInput"/>
          <SearchIcon className="header__searchIcon"/>
          </div>
          
          {/* 3 Links */}
          <div className="header__nav">
         <Link to={"/login"} className="header__link">
            <div onClick={login} className="header__option">
             <span className="header__optionLineOne">Hello </span>
             <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
         </Link>
         <Link to="/" className="header__link">
            <div className="header__option">
             <span className="header__optionLineOne">Returns</span>
             <span className="header__optionLineTwo">& Orders</span>
            </div>
         </Link>
         <Link to="/" className="header__link">
            <div className="header__option">
             <span className="header__optionLineOne" >Your</span>
             <span className="header__optionLineTwo">Prime</span>
            </div>
         </Link>
         <Link to="/checkout" className="header__link">
           <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">
               {basket.length}
            </span>
           </div>
         </Link>
          </div>

        </nav>
    );
}

export default Header
