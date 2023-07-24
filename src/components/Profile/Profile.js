import React, {useEffect, useState} from "react";
import {useFormAndValidation} from "../../utils/hooks/FormValidation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({ logout, updateUser, message, setMessage }) {

    const [isEdit, setIsEdit] = useState(false);
    const [enabledSubmit, setEnabledSubmit] = useState(false);
    const currentUser = React.useContext(CurrentUserContext);

    const { values, handleChange, errors, setValues, isValidForm, setIsValidForm} = useFormAndValidation({});

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [currentUser, setValues]);

    useEffect(() => {
        setMessage('');
    }, [setMessage]);

    useEffect(() => {
        if (currentUser.name === values.name && currentUser.email === values.email) {
            setEnabledSubmit(false);
        } else {
            setEnabledSubmit(true);
        }
    }, [values, currentUser])

    function handleEdit() {
        setIsEdit(true);
        setMessage('');
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEdit(false);
        setIsValidForm(false);
        updateUser(values.name, values.email);
    }

    return (
        <main className="profile">
            <form className="profile__container" onSubmit={handleSubmit} noValidate>
                <h1 className="profile__header">Привет, {currentUser.name}!</h1>
                <div className="profile__item">
                    <p className="profile__label">Имя</p>
                    <input onChange={handleChange} placeholder="Имя" name='name' required
                           type="text" className="profile__input" pattern="^[A-Za-zА-яа-яёЁ\s\-]+$"
                           minLength="2" maxLength="40"
                           value={values.name || ''} disabled={!isEdit} />
                </div>
                <span className="profile__validation-error">
                        {errors.name
                            && "Это поле не может иметь меньше 2 символов и " +
                            "может содержать только латиницу, кириллицу, пробел или дефис"}
                </span>
                <div className="profile__item">
                    <p className="profile__label">E-mail</p>
                    <input onChange={handleChange} placeholder="Почта" name='email' required
                           type="email" className="profile__input" minLength="2" maxLength="40"
                           pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                           value={values.email || ''} disabled={!isEdit} />
                </div>
                <span className="profile__validation-error">{errors.email}</span>
                <button className="profile__submit profile__submit_type_hidden" type="submit"></button>
            </form>
            <div className="profile__buttons">
                <span className="profile__error-message">{message}</span>
                <button className={ isEdit ? "profile__button profile__button_hidden"
                    : "profile__button" } type="button" onClick={handleEdit}>
                    Редактировать
                </button>
                <button className={ isEdit ? "profile__button profile__button_hidden"
                    : "profile__button profile__button_type_logout"} type="button"
                        onClick={logout}>
                    Выйти из аккаунта
                </button>
                <button className={ isEdit
                    ? (enabledSubmit && isValidForm
                        ? "profile__submit" : "profile__submit profile__submit_type_disabled")
                    : "profile__submit profile__submit_type_hidden" } disabled={!(isValidForm && enabledSubmit)}
                        type="submit" onClick={handleSubmit}>Сохранить</button>
            </div>
        </main>
    )
}

export default Profile;
