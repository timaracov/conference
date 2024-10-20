import React, { useEffect, useState } from "react";

import "./Profile.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import Popup from "../Popup/Popup";
import IconEdit from "../../icons/IconEdit";
import endpoints from "../../api/endpoints";
import { Input } from "../inputs/Input";


export function Profile() {
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
            <div id="outer__container">
              <div id="pic__names">
                <img id="profile__avatar" src="/profile.png" alt="" />
                <div id="profile__names">
                  <p className="profile__name">{FIO}</p>
                  <p className="profile__group">{group}</p>
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
              <p className="popup__title">Обновить данные профиля</p>
              <Input className="input__fio" placeholder={String(FIO)} type="text" onChange={(e) => setUpdFIO(e.target.value)}/>
              <Input className="input__group" placeholder={String(group)} type="text" onChange={(e) => setUpdGroup(e.target.value)}/>
              <button className="upd_profile_button" onClick={() => updateProfileInfo()}>Обновить</button>
            </div>
          </Popup>
        </div>
      )}
    </>
  );
}
