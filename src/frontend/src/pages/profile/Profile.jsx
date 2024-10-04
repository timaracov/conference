import React from "react";

import "./Profile.css";


export function Profile() {
    return (
        <div class="home__page">
            <div id="outer__container">
                <div id="pic__names">
                    <div id="profile__avatar">
                        <img id="avatar_pic" src="me.jpeg" width="80"/>
                        <div id="avatar_icon">/</div>
                    </div> 
                    <div id="profile__names">
                        <div id="name_and_icon">
                            <h1>Тимофей Нейенбург</h1>
                            <div id="name_icon">/</div>
                        </div>
                        <div id="group_and_icon">
                            <h2>21-ВТ-2</h2>
                            <div id="group_icon">/</div>
                        </div>
                    </div>
                </div>
                <ul id="variants">
                    <li class="variant" id="patalogies"><a id="patalogies_a" href="patologies">Патологии</a></li>
                    <li class="variant" id="exercises"><a id="exercises_a" href="exercises">Упражнения</a></li>
                    <li class="variant" id="docs"><a id="docs_a" href="docs">Документы</a></li>
                </ul>
            </div>
        </div>
    );
}