import React from "react"

import { Input } from "../../components/inputs/Input"
import "./Login.css"

export function Login () {
    return (
        <div className="login__page">
            <div className="border__page">
                <h1 className="header__login">Медконсультант</h1>
                <div id="inputs">
                    <Input className="input__login" placeholder="Login" type="text"></Input>
                    <Input className="input__login" placeholder="Password" type="password"></Input>
                </div>
                <div id="sub_links">
                    <a id="sign_up_a" href="signup">Sign Up</a>
                </div>
                <div id="login__button">
                    <button className="button_login">Войти</button>
                </div>
            </div>
        </div>
    )
}
