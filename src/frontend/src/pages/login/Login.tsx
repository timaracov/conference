import React, { useState } from "react"

import { Input } from "../../components/inputs/Input"
import "./Login.css"

import endpoints from "../../api/endpoints";
import { useNavigate } from "react-router-dom";


export function Login () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function loginUser() {
        endpoints.login(username, password)
        .then(() => {
            navigate('/patologies');
        })
        .catch((e) => {
            console.log("exc", e)
            alert("Неверный логин или пароль")
        })
    }

    return (
        <div className="login__page">
            <div className="border__page">
                <h1 className="header__login">Медконсультант</h1>
                <div id="inputs">
                    <Input className="input__login" placeholder="Логин" type="text" onChange={e => setUsername(e.target.value)}></Input>
                    <Input className="input__login" placeholder="Пароль" type="password" onChange={e => setPassword(e.target.value)}></Input>
                </div>
                <div id="sub_links">
                    <a id="sign_up_a" href="signup">Sign Up</a>
                </div>
                <div id="login__button">
                    <button className="button_login" onClick={() => loginUser()}>Войти</button>
                </div>
            </div>
        </div>
    )
}
