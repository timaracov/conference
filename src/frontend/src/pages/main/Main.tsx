import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css";


export function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // запрос на авторизацию
        // then -> redirect -> profile
        // catch -> redicrect -> login
        
        setTimeout(() => {
            setIsLoading(false)
            navigate('/patologies')
        }, 2000);
    }, [])

    if (isLoading) {
        return (
            <div className="main">
                <img className="preloader__img" src="/preloader.gif" alt="" />
            </div>
        );
    } else {
        navigate('/patologies')
    }
}
