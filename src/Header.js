import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { SportsBasketball } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket,user},dispatch] = useStateValue();


    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="search">
                <input type="text" className="search_input" />
                <SearchIcon className="search_icon" />
            </div>

            <div className="headernav">
            <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="optionline">Hello,{user?.email}</span>
                        <span className="optionline2">{user ? "Sign out" : "sign in"}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="optionline">Returns</span>
                        <span className="optionline2">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="optionline">Your</span>
                        <span className="optionline2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="basket">
                        <ShoppingCartIcon/>
                        <span className="basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
