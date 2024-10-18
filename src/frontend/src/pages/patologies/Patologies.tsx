import React, { useEffect, useState } from "react";

import "./Patologies.css";
import PatologyCard from "./components/PatologyCard";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import { Input } from "../../components/inputs/Input";

const data = [
  {
    name: "Сколиоз",
    level: 2,
  },
  {
    name: "Плоскостопие",
    level: 3,
  },
  {
    name: "Сколиоз",
    level: 2,
  },
  {
    name: "Плоскостопие",
    level: 3,
  },
];

const Patologies = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSelectChange = (option: string) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const cards = data.map((el) => (
    <PatologyCard name={el.name} level={el.level} />
  ));

  return (
    <div className="container">
      <Profile />
      <div className="patologies__page">
        <div className="patologies__page__container">
          <div className="patologies__page__buttons">
            <button
              className="patologies__page__add_button"
              onClick={() => openPopup()}
            >
              Добавить
            </button>
          </div>
          <div className="patologies__page__data">{cards}</div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="patologies__popup">
          <p className="popup__title">Добавление патологии</p>
          <div className="inputs__patologies">
            <Input className="input__select" placeholder="Патология" type="text"/>
            <CustomSelect
              options={["I Степень", "II Степень", "III Степень", "IV Степень", "V Степень", "VI Степень", ]}
              onSelect={handleSelectChange}
              placeholder="Степень"
            />
          </div>
          <button className="patology__add">Добавить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Patologies;
