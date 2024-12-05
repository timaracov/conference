import React, { useState } from "react";

import "./ExercisesCard.css"
import IconDifficulty from "../../../icons/IconDifficulty";
import IconTime from "../../../icons/IconTime";
import IconExpand from "../../../icons/IconExpand";

type ExercisesCardProps = {
    name: string,
    difficulty: Number,
    minutes_to_do: Number,
    text: string,
	theme: string | undefined
}

const maxLength = 100;

export default function ExercisesCard({name, difficulty, minutes_to_do, text, theme}: ExercisesCardProps) {
    const [isOpened, setIsOpened] = useState(false);
    if (isOpened === true) {
        return (
            <div className={theme === "l" ? "exercises__card__opened" : "exercises__card__opened-dark"} >
                <div className={theme === "l" ? "exercises__card__opened_top" : "exercises__card__opened_top-dark"} >
                    <p className={theme === "l" ? "exercises__card__opened_name" : "exercises__card__opened_name-dark"}>
                        {name}
                    </p>
                    <div className={theme === "l" ? "exercises__card__opened_difficulty" : "exercises__card__opened_difficulty-dark"}>
                        <IconDifficulty className={theme === "l" ? "difficulty__opened_icon" : "difficulty__opened_icon-dark"}/>
                        <p className={theme === "l" ? "difficulty__opened_name" : "difficulty__opened_name-dark"}>
                            {difficulty === 1 ? "Просто" : difficulty === 2 ? "Средне" : "Сложно"}
                        </p>
                    </div>
                    <div className={theme === "l" ? "exercises__card_opened__time" : "exercises__card_opened__time-dark"} >
                        <IconTime className={theme === "l" ? "time_opened__icon" : "time_opened__icon-dark"}/>
                        <p className={theme === "l" ? "time__opened_name" : "time__opened_name-dark"}>
                            {`${minutes_to_do} мин`}
                        </p>
                    </div>
                    <div className={theme === "l" ? "exercises__expand" : "exercises__expand-dark"} onClick={() => setIsOpened(false)}>
                        <IconExpand className={theme === "l" ? "exercises_expand_icon" : "exercises_expand_icon-dark"} />
                    </div>
                </div>
                <div className={theme === "l" ? "exercises__card__bottom" : "exercises__card__bottom-dark"}>
                    <p className={theme === "l" ? "exercises__card__text" : "exercises__card__text-dark"}>
                        {text}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className={theme === "l" ? "exercises__card" : "exercises__card-dark"} onClick={() => setIsOpened(true)}>
                <div className={theme === "l" ? "exercises__card__left" : "exercises__card__left-dark"}>
                    <p className={theme === "l" ? "exercises__card__name" : "exercises__card__name-dark"}>
                        {name}
                    </p>
                    <p className={theme === "l" ? "exercises__card__text" : "exercises__card__text-dark"}>
                        {text.length >= maxLength ? `${text.slice(0, maxLength)}...` : text}
                    </p>
                </div>
                <div className={theme === "l" ? "exercises__card__right" : "exercises__card__right-dark"}>
                    <div className={theme === "l" ? "exercises__card__difficulty" : "exercises__card__difficulty-dark"}>
                        <IconDifficulty className={theme === "l" ? "difficulty__ok" : "difficulty__ok-dark"}/>
                        <div className={theme === "l" ? "difficulty__name" : "difficulty__name-dark"}>
                            {difficulty === 1 ? "Просто" : difficulty === 2 ? "Средне" : "Сложно"}
                        </div>
                    </div>
                    <div className={theme === "l" ? "exercises__card__time" : "exercises__card__time-dark"}>
                        <IconTime className={theme === "l" ? "time__icon" : "time__icon-dark"}/>
                        <div className={theme === "l" ? "time__name" : "time__name-dark"}>
                            {`${minutes_to_do} мин`}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
