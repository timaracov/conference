import React, { useEffect, useState } from "react";

import "./Profile.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import Popup from "../Popup/Popup";
import IconEdit from "../../icons/IconEdit";
import { Input } from "../inputs/Input";
import endpoints from "../../api/endpoints";
import utils from "../../utils/theme";


type ProfileProps = {
	theme: string | undefined,
	setTheme: CallableFunction,
};


export function Profile({theme, setTheme}: ProfileProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentTab, setCurrentTab] = useState("/docs");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [FIO, setFIO] = useState('');
  const [group, setGroup] = useState('');

  const [updFIO, setUpdFIO] = useState(FIO);
  const [updGroup, setUpdGroup] = useState(group);

  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  function updateProfileInfo() {
    endpoints
    .updateProfile(updFIO, updGroup)
    .then((e) => {
      console.log(e);
      closePopup() 
    })
    .catch((e) => {
      console.log(e);
      alert("Ошибка обновления данных. Повторите попытку позже") 
      closePopup()
    })
  }

  useEffect(() => {
    setCurrentTab(location.pathname);
    endpoints
    .getProfile()
    .then((d) => {
      setFIO(d.first_name);
      setGroup(d.second_name)
    })
    .catch(
      () => {
        navigate('/login');
      }
    )
  }, [location]);

  console.log(currentTab);

  return (
    <>
      {location.pathname !== "/" && (
        <div className="home__page">
          <div className="container">
            <div className="theme__chooser">
              <div 
                className={theme === "d" ? "theme__chooser_dark_when_dark" : "theme__chooser_dark_when_light"}
                onClick={() => {utils.setTheme("d"); setTheme("d"); utils.setBackgroundColor()}}
              >
                Темная
              </div>
              <div 
                className={theme === "d" ? "theme__chooser_light_when_dark" : "theme__chooser_light_when_light"}
                onClick={() => {utils.setTheme("l"); setTheme("l"); utils.setBackgroundColor()}}
              >
                Светлая
              </div>
            </div>
            <div id={theme === "l" ? "outer__container" : "outer__container-dark"}>
              <div id={theme === "l" ? "pic__names" : "pic__names-dark"}>
                <img id={theme === "l" ? "profile__avatar" : "profile__avatar-dark"} src="/profile.png" alt="" />
                <div id={theme === "l" ? "profile__names" : "profile__names-dark"}>
                  <p className={theme === "l" ? "profile__name" : "profile__name-dark"}>{FIO}</p>
                  <p className={theme === "l" ? "profile__group" : "profile__group-dark"}>{group}</p>
                  <div onClick={() => openPopup()}>
                    <IconEdit className={theme === "l" ? "profile__icon" : "profile__icon-dark"} />
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
            <div className={theme === "l" ? "profile__popup" : "profile__popup-dark"}>
              <p className={theme === "l" ? "popup__title" : "popup__title-dark"}>Обновить данные профиля</p>
              <Input className={theme === "l" ? "input__fio" : "input__fio-dark"} placeholder={String(FIO)} type="text" onChange={(e: any) => setUpdFIO(e.target.value)}/>
              <Input className={theme === "l" ? "input__group" : "input__group-dark"} placeholder={String(group)} type="text" onChange={(e: any) => setUpdGroup(e.target.value)}/>
              <button className={theme === "l" ? "upd_profile_button" : "upd_profile_button-dark"} onClick={() => updateProfileInfo()}>Обновить</button>
            </div>
          </Popup>
        </div>
      )}
    </>
  );
}
