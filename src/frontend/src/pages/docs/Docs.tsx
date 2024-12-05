import React, { useEffect, useState } from "react";
import DocCard from "./components/DocCard";

import "./Docs.css";
import { Profile } from "../../components/profile/Profile";
import Popup from "../../components/Popup/Popup";
import { baseURL } from "../../api/config";
import { Input } from "../../components/inputs/Input";

import endpoints from "../../api/endpoints";
import utils from "../../utils/theme";

const Docs = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [docs, setDocs] = useState<any[]>([]);
  const [fileName, setFileName] = useState<string>('file');
  const [theme, setTheme] = useState(utils.getTheme());

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

  function updateDocuments() {
    endpoints
    .getDocuments()
    .then((d) => {
      console.log(d);
      setDocs(d);
    })
    .catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    updateDocuments()
    console.log(file);
  }, [file]);

  return (
    <div className="container">
      <Profile theme={theme} setTheme={setTheme}/>
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
              <DocCard id={el.document_id} name={el.name} img={make_img_path(el.file_path)} listUpdFunc={updateDocuments} theme={theme}/>
            ))}
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={closePopup} theme={theme}>
        <div className={theme === "l" ? "patologies__popup" : "patologies__popup-dark"}>
          <p className={theme === "l" ? "popup__title" : "popup__title-dark"}>Добавление файла</p>
          <Input className={theme === "l" ? "input__filename" : "input__filename-dark"} placeholder="Название" type="text" onChange={(e: any) => setFileName(e.target.value)}/>
          <input id={theme === "l" ? "file" : "file-dark"} type="file" onChange={handleFileChange} />
          <button className={theme === "l" ? "doc_add_button" : "doc_add_button-dark"} disabled={!file} onClick={() => uploadFile()}>Загрузить</button>
        </div>
      </Popup>
    </div>
  );
};

export default Docs;
