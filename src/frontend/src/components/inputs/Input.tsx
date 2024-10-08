import React from "react"
import "./Input.css";

type Props = {
    className: string;
    placeholder: string;
    type: string;
}

export function Input({className, placeholder, type}: Props) {
    return (
        <input className={className} placeholder={placeholder} type={type} />
    ) }
