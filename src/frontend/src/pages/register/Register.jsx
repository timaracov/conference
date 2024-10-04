import React from "react"

import { Input } from "../../components/inputs/Input"
import { DefaultButton } from "../../components/buttons/DefaultButton"
import "./Register.css"

export function Register () {
    return (
        <div class="login__page_reg">
            <div class="border__page_reg">
                <h1>Medconsultant</h1>
                <div id="inputs_reg">
                    <Input placeholder="Login"></Input>
                    <Input placeholder="Password" type="password"></Input>
                    <Input placeholder="Password repeat" type="password"></Input>
                </div>
                <div id="login__button_reg">
                    <DefaultButton></DefaultButton>
                </div>
            </div>
        </div>
    )
}