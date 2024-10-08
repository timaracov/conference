import React from "react";

import "./PatologyCard.css"
import IconDel from "../../../icons/IconDel";

type PropsCard  = {
    name: string;
    level: Number;
};

const levels = [
    'I Степень',
    'II Степень',
    'III Степень',
    'IV Степень',
    'V Степень',
    'VI Степень',
];

export default function PatologyCard({name, level}: PropsCard) {
    return (
        <div className="patology__card">
            <div className="patology__card__left">
                <div className="patology__card__name">{name}</div>
                <div className="patology__card__level">{levels[level-1]}</div>
            </div>
            <div className="patology__card__right">
                <IconDel className="icon_del"/>
            </div>
        </div>
    )
}