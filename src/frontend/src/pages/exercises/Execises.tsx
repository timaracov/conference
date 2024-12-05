import React, { useEffect, useState } from "react";

import "./Exercises.css"
import ExercisesCard from "./components/ExercisesCard";
import { Profile } from "../../components/profile/Profile";

import endpoints from "../../api/endpoints";
import utils from "../../utils/theme";

export default function Exercises() {
    const [myOrAll, setMyorAll] = useState(1);

    const [list, setList] = useState<any[]>([]);
  	const [theme, setTheme] = useState(utils.getTheme());

    useEffect(() => {
        endpoints
        .getExercises(myOrAll === 1)
        .then((d) => {
            console.log(d);
            setList(d)
        })
        .catch((e) => {
            console.log(e);
            setList([]) 
        })
    }, [myOrAll])

    return (
        <div className="container">
            <Profile theme={theme} setTheme={setTheme}/>
            <div className="exercises__page">
                <div className="exercises__page__container">
                    <div className="exerises__buttons">
                        <div className={myOrAll=== 1 ? "my__list__button__active" : "my__list__button"} onClick={() => {setMyorAll(1)}}>Мой список</div>
                        <div className={myOrAll === 2 ? "all__list__button__active" : "all__list__button"} onClick={() => {setMyorAll(2)}}>Все упражнения</div>
                    </div>
                    <div className="exercises__container">
                        {list.map(el =>
                            <ExercisesCard name={el.name} difficulty={el.difficulty} minutes_to_do={el.minutes_to_complete} text={el.description} theme={theme}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
