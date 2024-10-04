import React from "react"
import "./Input.css";

export function Input({placeholder, type="text"}) {
    return (
        <input placeholder={placeholder} type={type} />
    )
}