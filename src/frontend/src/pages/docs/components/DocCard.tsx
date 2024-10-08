import React from "react";

import "./DocCard.css"
import IconDel from "../../../icons/IconDel";
import IconImgAdd from "../../../icons/IconImgAdd";

type DocCardProps = {
    img: string,
    name: string,
}


export default function DocCard({img, name}: DocCardProps) {
    return (
        <div className="doc__card">
            <div className="doc__card__left">
                <img className="doc__card__img" src={img} alt="" />
                <p className="doc__card__name" >
                    {name}
                </p>
            </div>
            <div className="doc__card__right">
                <IconImgAdd className="icon_img_add"/>
                <IconDel className="icon_del_doc"/>
            </div>
        </div>
    );
}