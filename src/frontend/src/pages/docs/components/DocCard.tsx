import React, { useState } from "react";

import "./DocCard.css";
import IconDel from "../../../icons/IconDel";
import IconImgAdd from "../../../icons/IconImgAdd";
import Popup from "../../../components/Popup/Popup";
import endpoints from "../../../api/endpoints";

type DocCardProps = {
  id: string,
  img: string;
  name: string;
  listUpdFunc: Function,
};

export default function DocCard({ id, img, name, listUpdFunc }: DocCardProps) {
  const [isPopupOpen, setPopupOpen] = useState(false);

//  const openPopup = () => {
//    setPopupOpen(true);
//  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  function deleteDocument() {
    endpoints
    .deleteData(id, "doc")
    .then()
    .catch((e) => {
      alert("Ошибка удаление. Повторите попытку позже")
      console.log(e);
    })
    listUpdFunc()
  }

  return (
    <div className="doc__card">
      <div className="doc__card__left">
        <img className="doc__card__img" src={img} alt="" />
        <p className="doc__card__name">{name}</p>
      </div>
      <div className="doc__card__right">
        <IconImgAdd className="icon_img_add" />
        <div onClick={() => deleteDocument()}>
          <IconDel className="icon_del_doc" />
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="patologies__popup">
          <p className="popup__title">Удалить файл "{name}"?</p>

          <button>YES</button>
          <button>NOOOO</button>
        </div>
      </Popup>
    </div>
  );
}
