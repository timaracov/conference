import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

import endpoints from "../../api/endpoints";
import { Input } from "../../components/inputs/Input"

import "./Register.css"


export function Register () {
    const [regData, setRegData] = useState({username: '', passwd: '', passwd_rep: '', fio: '', group: ''});
    const navigate = useNavigate();

    function registerUser() {
        if (regData.passwd !== regData.passwd_rep) {
            alert("Пароли не совпадают");
        } else {
            endpoints
            .register(
                regData.username,
                regData.passwd,
                regData.fio,
                regData.group
            )
            .then(() => {
                navigate('/login');
            })
            .catch((e) => {
                console.log("exc", e)
                alert("Ошибка сервера. Попробуйте повторить позже")
            })
        }
    }

    return (
        <div className="login__page_reg">
            <div className="border__page_reg">
                <h1 className="header__reg">Медконсультант</h1>
                <div id="inputs_reg">
                    <Input className="input__reg" placeholder="ФИО" type="text" onChange={(e: any) => {regData.fio = e.target.value; setRegData(regData)}}></Input>
                    <Input className="input__reg" placeholder="Группа" type="text" onChange={(e: any) => {regData.group = e.target.value; setRegData(regData)}}></Input>
                    <Input className="input__reg" placeholder="Логин" type="text" onChange={(e: any) => {regData.username = e.target.value; setRegData(regData)}}></Input>
                    <Input className="input__reg" placeholder="Пароль" type="password" onChange={(e: any) => {regData.passwd = e.target.value; setRegData(regData)}}></Input>
                    <Input className="input__reg" placeholder="Повторите пароль" type="password" onChange={(e: any) => {regData.passwd_rep = e.target.value; setRegData(regData)}}></Input>
                </div>
                <div id="login__button_reg">
                    <button className="button_register" onClick={() => registerUser()}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    )
}
