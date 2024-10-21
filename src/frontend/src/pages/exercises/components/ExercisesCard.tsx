import React, { useState } from "react";

import "./ExercisesCard.css"
import IconDifficulty from "../../../icons/IconDifficulty";
import IconTime from "../../../icons/IconTime";
import IconExpand from "../../../icons/IconExpand";

type ExercisesCardProps = {
    name: string,
    difficulty: Number,
    minutes_to_do: Number,
    text: string
}

const maxLength = 100;

export default function ExercisesCard({name, difficulty, minutes_to_do, text}: ExercisesCardProps) {
    const [isOpened, setIsOpened] = useState(false);
    if (isOpened === true) {
        return (
            <div className="exercises__card__opened" >
                <div className="exercises__card__opened_top" >
                    <p className="exercises__card__opened_name">
                        {name}
                    </p>
                    <div className="exercises__card__opened_difficulty">
                        <IconDifficulty className="difficulty__opened_icon"/>
                        <p className="difficulty__opened_name">
                            {difficulty === 1 ? "Просто" : difficulty === 2 ? "Средне" : "Сложно"}
                        </p>
                    </div>
                    <div className="exercises__card_opened__time" >
                        <IconTime className="time_opened__icon"/>
                        <p className="time__opened_name">
                            {`${minutes_to_do} мин`}
                        </p>
                    </div>
                    <div className="exercises__expand" onClick={() => setIsOpened(false)}>
                        <IconExpand className="exercises_expand_icon" />
                    </div>
                </div>
                <div className="exercises__card__bottom">
                    <p className="exercises__card__text">
                        {text}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="exercises__card" onClick={() => setIsOpened(true)}>
                <div className="exercises__card__left">
                    <p className="exercises__card__name">
                        {name}
                    </p>
                    <p className="exercises__card__text">
                        {text.length >= maxLength ? `${text.slice(0, maxLength)}...` : text}
                    </p>
                </div>
                <div className="exercises__card__right">
                    <div className="exercises__card__difficulty">
                        <IconDifficulty className="difficulty__ok"/>
                        <div className="difficulty__name">
                            {difficulty === 1 ? "Просто" : difficulty === 2 ? "Средне" : "Сложно"}
                        </div>
                    </div>
                    <div className="exercises__card__time">
                        <IconTime className="time__icon"/>
                        <div className="time__name">
                            {`${minutes_to_do} мин`}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
