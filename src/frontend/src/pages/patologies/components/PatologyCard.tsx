import React from "react";

import "./PatologyCard.css"
import IconDel from "../../../icons/IconDel";
import endpoints from "../../../api/endpoints";

type PropsCard  = {
    id: string,
    name: string;
    level: number;
    listUpdFunc: Function,
	theme: string | undefined
};

const levels = [
    'I Степень',
    'II Степень',
    'III Степень',
    'IV Степень',
    'V Степень',
    'VI Степень',
];

export default function PatologyCard({id, name, level, listUpdFunc, theme}: PropsCard) {
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
        <div className={theme === "l" ? "patology__card" : "patology__card-dark"}>
            <div className={theme === "l" ? "patology__card__left" : "patology__card__left-dark"}>
                <div className={theme === "l" ? "patology__card__name" : "patology__card__name-dark"}>{name}</div>
                <div className={theme === "l" ? "patology__card__level" : "patology__card__level-dark"}>{levels[level-1]}</div>
            </div>
            <div className={theme === "l" ? "patology__card__right" : "patology__card__right-dark"} onClick={() => deleteElement()}>
                <IconDel className={theme === "l" ? "icon_del" : "icon_del-dark"}/>
            </div>
        </div>
    )
}
