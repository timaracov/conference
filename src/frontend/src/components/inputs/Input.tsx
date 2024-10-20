import React from "react"
import "./Input.css";

type Props = {
    className: string;
    placeholder: string;
    type: string;
    onChange?: any,
}

export function Input({className, placeholder, type, onChange = () => {}}: Props) {
    return (
        <input className={className} placeholder={placeholder} type={type} onChange={onChange}/>
    ) }
