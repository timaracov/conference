import React from "react";

import "./PatologyCard.css"
import IconDel from "../../../icons/IconDel";
import endpoints from "../../../api/endpoints";

type PropsCard  = {
    id: string,
    name: string;
    level: number;
    listUpdFunc: Function
};

const levels = [
    'I Степень',
    'II Степень',
    'III Степень',
    'IV Степень',
    'V Степень',
    'VI Степень',
];

export default function PatologyCard({id, name, level, listUpdFunc}: PropsCard) {
    function deleteElement() {
        endpoints
        .deleteData(id, "pat")
        .then()
        .catch((e) => {
            console.log(e);
            alert("Ошибка удаления. Повторите попытку позже") 
        })
        listUpdFunc()
    }

    return (
        <div className="patology__card">
            <div className="patology__card__left">
                <div className="patology__card__name">{name}</div>
                <div className="patology__card__level">{levels[level-1]}</div>
            </div>
            <div className="patology__card__right" onClick={() => deleteElement()}>
                <IconDel className="icon_del"/>
            </div>
        </div>
    )
}