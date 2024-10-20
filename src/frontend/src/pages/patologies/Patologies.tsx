import React, { useEffect, useState } from "react";

import "./Patologies.css";
import PatologyCard from "./components/PatologyCard";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import { Input } from "../../components/inputs/Input";

import endpoints from "../../api/endpoints";


const level_mapping = {
  "I Степень": 1,
  "II Степень": 2,
  "III Степень": 3,
  "IV Степень": 4,
  "V Степень": 5,
  "VI Степень": 6,
}


const Patologies = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("I Степень");
  const [patName, setPatname] = useState('');

  const [patData, setPatData] = useState([]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleSelectChange = (option: string) => {
    setSelectedOption(option);
  };

  function addNewPatology() {
    endpoints
    .addPatology(patName, level_mapping[selectedOption])
    .then((r) => {
      console.log(r);
      closePopup(); 
    })
    .catch((e) => {
      console.log(e);
      closePopup();
      alert("Ошибка добавления патологии. Пожалуйста, повторите позднее")
    })
  }

  useEffect(() => {
    endpoints
    .getPatologies()
    .then((e) => {
      console.log(e);
      setPatData(e);
    })
    .catch((e) => {
      console.log(e);
    });
    console.log(selectedOption);
  }, [selectedOption]);

  const cards = patData.map((el) => (
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
            <Input className="input__select" placeholder="Патология" type="text" onChange={e => setPatname(e.target.value)}/>
            <CustomSelect
              options={["I Степень", "II Степень", "III Степень", "IV Степень", "V Степень", "VI Степень", ]}
              onSelect={handleSelectChange}
              placeholder="Степень"
            />
          </div>
          <button className="patology__add" onClick={() => addNewPatology()}>Добавить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Patologies;
