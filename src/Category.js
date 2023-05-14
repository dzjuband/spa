import React from "react";
import { useLocation,NavLink } from "react-router-dom";

export default function Category({...props}){
    const url = useLocation ();
    return(
        <>
        <h1>Category</h1>
        
        <ul>
        {
            props.submenu.map((item,i)=><li key={i}><NavLink to={`${url.pathname}`+item.nav}>{item.descr}</NavLink></li>)
        }
        </ul>
        </>

    )
}