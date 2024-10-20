import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Main.css";

import endpoints from "../../api/endpoints";


export function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {}, 2000);

        endpoints.getProfile()
            .then((e) => {
                console.log(e);
                setIsLoading(false);
                setTimeout(() => {}, 2000);
                navigate('/patologies');
            })
            .catch((e) => {
                console.log(e);
                setIsLoading(false);
                setTimeout(() => {}, 2000);
                navigate("/login");
            })
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
