import React from 'react';
import "./Navbar.css"
import rasm from './img/Frame 551.svg';
 
function Navbar () {
    const links = ['Home','Contact','About','Sign in']
    return (
        <div className="Navbar conteiner">
            <div className="nav_Up">
                <div className="sum">
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <button>ShopNow</button>
                </div>
                <div className="sel">
                    <select name="d" id="d">
                        <option value="English">English</option>
                        <option value="English">Uzbek</option>
                        <option value="English">Ru</option>
                    </select>
                </div>
            </div>
            <div className="Nav_bt">
                <div className="navlogo">
                    <a href="#">Exclusive</a>
                </div>
                <div className="links">
                    <ul>
                        {links.map(link => (
                            <li  key={link}>
                                <p id='l' href="#">{link}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="inp">
                    <input type="text" placeholder='What are you looking for?' />
                    <div className="">
                        <img src={rasm} alt="logo" />
                    </div>
                </div>
            </div><br />
            <hr />
        </div> 
    )
}
 
export default Navbar;