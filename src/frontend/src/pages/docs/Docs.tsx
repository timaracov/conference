import React from 'react';
import DocCard from './components/DocCard';
 
import "./Docs.css"
import { Profile } from '../../components/profile/Profile';

const Docs = () => {
  const data = [
    {"name": "Doc1", "img": "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13"},
    {"name": "Doc2", "img": "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13"},
    {"name": "Doc3", "img": "https://avatars.mds.yandex.net/i?id=7fbd5c63911ec240c3cb0098e0e033e094fa1b1f-10928869-images-thumbs&n=13"},
  ];

  return (
    <div className="container">
        <Profile/>
        <div className='doc__page'>
            <div className='doc__page__container'>
                <div className='docs__page__buttons'>
                    <button className='docs__page__add_button'> Добавить </button>
                </div>
                <div className='doc__page__data'>
                    {data.map(el => <DocCard name={el.name} img={el.img}/>)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Docs;