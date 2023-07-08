import React, { useState } from "react";

function Profile() {

    const [email, setEmail] = useState('pochta@yandex.ru');
    const [userName, setName] = useState('Антон');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <main className="profile">
            <div className="profile__container">
                <h2 className="profile__header">Привет, {userName}!</h2>
                <div className="profile__item">
                    <p className="profile__label">Имя</p>
                    <input onChange={handleNameChange} placeholder="Имя"
                           type="text" className="profile__text" value={userName}/>
                </div>
                <div className="profile__item">
                    <p className="profile__label">E-mail</p>
                    <input onChange={handleEmailChange} placeholder="Почта"
                           type="email" className="profile__text" value={email}/>
                </div>
            </div>
            <div className="profile__buttons">
                <button className="profile__button">Редактировать</button>
                <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
            </div>
        </main>
    )
}

export default Profile;
