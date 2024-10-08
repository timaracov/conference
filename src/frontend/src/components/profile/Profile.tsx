import React, { useEffect, useState } from "react";

import "./Profile.css";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Popup from "../Popup/Popup";
import IconEdit from "../../icons/IconEdit";

export function Profile() {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("/docs");

  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    setCurrentTab(location.pathname);
  }, [location]);

  console.log(currentTab);

  return (
    <>
      {location.pathname !== "/" && (
        <div className="home__page">
          <div className="container">
            <div id="outer__container">
              <div id="pic__names">
                <img id="profile__avatar" src="/profile.png" alt="" />
                <div id="profile__names">
                  <p className="profile__name">Тимофей Нейенбург</p>
                  <p className="profile__group">21-ВТ-2</p>
                  <div onClick={() => openPopup()}>
                    <IconEdit className="profile__icon" />
                  </div>
                </div>
              </div>
              <div id="variants">
                <Link
                  className={classNames("variant variant_1", {
                    "variant_active variant_active_1":
                      currentTab === "/patologies" || currentTab === "/profile",
                  })}
                  to={"/patologies"}
                >
                  Патологии
                </Link>

                <Link
                  className={classNames("variant variant_2", {
                    "variant_active variant_active_2":
                      currentTab === "/exercises",
                  })}
                  to={"/exercises"}
                >
                  Упражнения
                </Link>

                <Link
                  className={classNames("variant variant_3", {
                    "variant_active variant_active_3": currentTab === "/docs",
                  })}
                  to={"/docs"}
                >
                  Документы
                </Link>
              </div>
            </div>
          </div>

          <Popup isOpen={isPopupOpen} onClose={closePopup}>
            <div className="profile__popup">
              <p className="popup__title">Добавление поталогии</p>
            </div>
          </Popup>
        </div>
      )}
    </>
  );
}
