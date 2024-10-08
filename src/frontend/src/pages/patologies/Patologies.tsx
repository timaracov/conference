import React from 'react';
import IconEdit from '../../icons/IconEdit';

import "./Patologies.css"
import PatologyCard from './components/PatologyCard';
import { Profile } from '../../components/profile/Profile';

const Patologies = () => {
  
  const data = [
    {
        "name": "Сколиоз",
        "level": 2
    },
    {
        "name": "Плоскостопие",
        "level": 3
    },
    {
        "name": "Сколиоз",
        "level": 2
    },
    {
        "name": "Плоскостопие",
        "level": 3
    }
  ];

  const cards = data.map(el => <PatologyCard name={el.name} level={el.level} />);

  return (
    <div className="container">
        <Profile/>
        <div className='patologies__page'>
            <div className='patologies__page__container'>
                <div className='patologies__page__buttons'>
                    <button className='patologies__page__add_button'> Добавить </button>
                </div>
                <div className='patologies__page__data'>
                    {cards}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Patologies;