import React from "react";
import "./DefaultButton.css";

export function DefaultButton(callback = (() => {})) {
    return (
        <button onClick={callback}>Log in</button>
    )
}