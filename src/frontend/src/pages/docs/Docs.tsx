import React, { useEffect, useState } from "react";
import DocCard from "./components/DocCard";

import "./Docs.css";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";

const data = [
  {
    name: "Doc1",
    img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
  },
  {
    name: "Doc2",
    img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
  },
  {
    name: "Doc3",
    img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
  },
];

const Docs = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className="container">
      <Profile />
      <div className="doc__page">
        <div className="doc__page__container">
          <div className="docs__page__buttons">
            <button
              className="docs__page__add_button"
              onClick={() => openPopup()}
            >
              {" "}
              Добавить{" "}
            </button>
          </div>
          <div className="doc__page__data">
            {data.map((el) => (
              <DocCard name={el.name} img={el.img} />
            ))}
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="patologies__popup">
          <p className="popup__title">Добавление файла</p>
          <input id="file" type="file" onChange={handleFileChange} />

          <button disabled={!file}>Загрузить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Docs;
