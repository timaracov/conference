import React, { useEffect, useState } from "react";

import "./Patologies.css";
import PatologyCard from "./components/PatologyCard";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import { Input } from "../../components/inputs/Input";

import endpoints from "../../api/endpoints";
import utils from "../../utils/theme";


type LevelMapping = {
  [key: string]: number;
};


const level_mapping: LevelMapping = {
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
  const [patName, setPatname] = useState<string>('');

  const [patData, setPatData] = useState<any[]>([]);
  const [theme, setTheme] = useState(utils.getTheme());

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
    updatePatologies()
  }

  function updatePatologies() {
    endpoints
    .getPatologies()
    .then((e) => {
      console.log(e);
      setPatData(e);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    updatePatologies()
    console.log(selectedOption);
  }, [selectedOption]);

  const cards = patData.map((el) => (
    <PatologyCard id={el.patology_id} name={el.name} level={el.level} listUpdFunc={updatePatologies} theme={theme}/>
  ));

  return (
    <div className="container">
      <Profile theme={theme} setTheme={setTheme}/>
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

      <Popup isOpen={isPopupOpen} onClose={closePopup} theme={theme}>
        <div className={theme === "l" ? "patologies__popup" : "patologies__popup-dark"}>
          <p className={theme === "l" ? "popup__title" : "popup__title-dark"}>Добавление патологии</p>
          <div className={theme === "l" ? "inputs__patologies" : "inputs__patologies-dark"}>
            <Input className={theme === "l" ? "input__select" : "input__select-dark"} placeholder="Патология" type="text" onChange={(e: any) => setPatname(e.target.value)}/>
            <CustomSelect
              options={["I Степень", "II Степень", "III Степень", "IV Степень", "V Степень", "VI Степень", ]}
              onSelect={handleSelectChange}
              placeholder="Степень"
			  theme={theme}
            />
          </div>
          <button className={theme === "l" ? "patology__add" : "patology__add-dark"} onClick={() => addNewPatology()}>Добавить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Patologies;
