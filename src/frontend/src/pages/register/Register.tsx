import React from "react"

import { Input } from "../../components/inputs/Input"
import "./Register.css"

export function Register () {
    return (
        <div className="login__page_reg">
            <div className="border__page_reg">
                <h1 className="header__reg">Медконсультант</h1>
                <div id="inputs_reg">
                    <Input className="input__reg" placeholder="Login" type="text"></Input>
                    <Input className="input__reg" placeholder="Password" type="password"></Input>
                    <Input className="input__reg" placeholder="Password repeat" type="password"></Input>
                </div>
                <div id="login__button_reg">
                    <button className="button_register">Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}
