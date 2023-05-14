import React from "react";
import {useParams,NavLink} from 'react-router-dom';

export default function CategoryDescription({}){

    let {catItem} = useParams();

    return (
        <>
            <NavLink to="/category">Назад</NavLink>
            <h1>Category:</h1>
            <div>{catItem}</div>
        </>
        

    )
}