import React from 'react';
import {NavLink} from 'react-router-dom';


const Header=()=>(
    <header>
        <h1> Expensify</h1>

            <li> <NavLink to='/' activeClassName='is-active' exact={true} >Dashboard</NavLink></li>
            <li><NavLink to='/creat' activeClassName='is-active' > create expanse</NavLink></li>
       
    </header>

);

export default Header;
