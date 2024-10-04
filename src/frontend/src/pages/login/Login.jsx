import React from "react"

import { Input } from "../../components/inputs/Input"
import { DefaultButton } from "../../components/buttons/DefaultButton"
import "./Login.css"

export function Login () {
    return (
        <div class="login__page">
            <div class="border__page">
                <h1>Medconsultant</h1>
                <div id="inputs">
                    <Input placeholder="Login"></Input>
                    <Input placeholder="Password" type="password"></Input>
                </div>
                <div id="sub_links">
                    <a id="sign_up_a" href="signup">Sign Up</a>
                </div>
                <div id="login__button">
                    <DefaultButton></DefaultButton>
                </div>
            </div>
        </div>
    )
}