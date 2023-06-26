import React, { useState } from "react";
import HomeLink from "../HomeLink/HomeLink";
import FormSection from "../FormSection/FormSection";
import {Link} from "react-router-dom";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit (evt)  {
        evt.preventDefault();
    }


    return (
        <main className="register">
            <div className="register__container">
                <HomeLink />
                <form className="register__form" name="register" onSubmit={ handleSubmit } noValidate>
                    <h2 className="register__heading">Добро пожаловать!</h2>
                    <FormSection header="Имя" onChange={handleNameChange} type="text"
                                 name="name" value={name}
                                 minLength="2" maxLength="40" id="name-input" />
                    <FormSection header="E-mail" onChange={handleEmailChange} type="email"
                                 name="email" value={email} modifier="form-section__input_type_email"
                                 minLength="2" maxLength="40" id="email-input" />
                    <FormSection header="Пароль" onChange={handlePasswordChange} type="password"
                                 name="password" value={password}
                                 minLength="2" maxLength="200" id="password-input" />
                    <button className="register__button" type="submit">Зарегистрироваться</button>
                    <Link to="/signin" className="register__link">
                            <span className="register__link_type_grey">Уже зарегистрированы?</span>
                            Войти
                    </Link>
                </form>
            </div>
        </main>
    )
}

export default Register;
