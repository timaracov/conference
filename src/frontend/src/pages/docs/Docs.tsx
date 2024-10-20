import React, { useEffect, useState } from "react";
import DocCard from "./components/DocCard";

import "./Docs.css";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";
import endpoints from "../../api/endpoints";
import { baseURL } from "../../api/config";
import { Input } from "../../components/inputs/Input";

// const data = [
//   {
//     name: "Doc1",
//     img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
//   },
//   {
//     name: "Doc2",
//     img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
//   },
//   {
//     name: "Doc3",
//     img: "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13",
//   },
// ];

const Docs = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [docs, setDocs] = useState([]);
  const [fileName, setFileName] = useState<string>('file');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

  function make_img_path(relative_path: string) {
    return `${baseURL}/api/static${relative_path}`
  }

  function uploadFile() {
    console.log(file);
    if (file) {
      endpoints
      .addDocument(file, fileName)
      .then((d) => {
        console.log(d);
        closePopup();
      })
      .catch((e) => {
        console.log(e);
        alert("Файл не был загружен. Повторите попытку позже")
        closePopup();
      })
    } else {
      alert("Файл не был добавлен")
    }
  }

  useEffect(() => {
    endpoints
    .getDocuments()
    .then((d) => {
      console.log(d);
      setDocs(d);
    })
    .catch((e) => {
      console.log(e);
    })
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
            {docs.map((el) => (
              <DocCard name={el.name} img={make_img_path(el.file_path)} />
            ))}
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="patologies__popup">
          <p className="popup__title">Добавление файла</p>
          <Input className="input__filename" placeholder="Название" type="text" onChange={e => setFileName(e.target.value)}/>
          <input id="file" type="file" onChange={handleFileChange} />
          <button disabled={!file} onClick={() => uploadFile()}>Загрузить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Docs;
