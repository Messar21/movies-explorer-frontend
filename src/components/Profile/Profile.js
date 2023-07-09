import React, { useState } from "react";

function Profile(props) {

    const [email, setEmail] = useState('pochta@yandex.ru');
    const [userName, setName] = useState('Антон');
    const [isEdit, setIsEdit] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleEdit() {
        setIsEdit(true);
    }

    function handleSubmit() {
        setIsEdit(false);
    }

    return (
        <main className="profile">
            <div className="profile__container">
                <h1 className="profile__header">Привет, {userName}!</h1>
                <div className="profile__item">
                    <p className="profile__label">Имя</p>
                    <input onChange={handleNameChange} placeholder="Имя"
                           type="text" className="profile__input" value={userName} disabled={!isEdit} />
                </div>
                <div className="profile__item">
                    <p className="profile__label">E-mail</p>
                    <input onChange={handleEmailChange} placeholder="Почта"
                           type="email" className="profile__input" value={email} disabled={!isEdit} />
                </div>
            </div>
            <div className="profile__buttons">
                <button className={ isEdit ? "profile__button profile__button_hidden"
                    : "profile__button" } type="button" onClick={handleEdit}>
                    Редактировать
                </button>
                <button className={ isEdit ? "profile__button profile__button_hidden"
                    : "profile__button profile__button_type_logout"} type="button"
                        onClick={props.logout}>
                    Выйти из аккаунта
                </button>
                <button className={ isEdit ? "profile__submit" : "profile__submit profile__submit_hidden" }
                        type="submit" onClick={handleSubmit}>Сохранить</button>
            </div>
        </main>
    )
}

export default Profile;
