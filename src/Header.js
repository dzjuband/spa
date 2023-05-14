import React from "react";
import {NavLink} from 'react-router-dom';

export default function Header({...props}){
    return (
        <nav>
            <ul>
                    {
                        props.menu.map((item,i)=>{return <li key={i}><NavLink to={item.nav}>{item.descr}</NavLink></li>})
                    }
            </ul>
        </nav>
       
    )
}