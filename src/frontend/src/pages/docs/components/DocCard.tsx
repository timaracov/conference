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
  theme: string
};

export default function DocCard({ id, img, name, listUpdFunc, theme }: DocCardProps) {
  const [isPopupOpen, setPopupOpen] = useState(false);

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
    <div className={theme === "l" ? "doc__card" : "doc__card-dark"}>
      <div className={theme === "l" ? "doc__card__left" : "doc__card__left-dark"}>
        <img className={theme === "l" ? "doc__card__img" : "doc__card__img-dark"} src={img} alt="" />
        <p className={theme === "l" ? "doc__card__name" : "doc__card__name-dark"}>{name}</p>
      </div>
      <div className={theme === "l" ? "doc__card__right" : "doc__card__right-dark"}>
        <IconImgAdd className={theme === "l" ? "icon_img_add" : "icon_img_add-dark"} />
        <div onClick={() => deleteDocument()}>
          <IconDel className={theme === "l" ? "icon_del_doc" : "icon_del_doc-dark"} />
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} theme={theme}>
        <div className={theme === "l" ? "patologies__popup" : "patologies__popup-dark"}>
          <p className={theme === "l" ? "popup__title" : "popup__title-dark"}>Удалить файл "{name}"?</p>

          <button>Да</button>
          <button>Нет</button>
        </div>
      </Popup>
    </div>
  );
}
