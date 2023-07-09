import React, { useState } from "react";
import FormBlank from "../FormBlank/FormBlank";
import FormSection from "../FormSection/FormSection";

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

    function handleRegister(e) {
        e.preventDefault();
    }

    return (
        <main className="register">
            <FormBlank heading="Добро пожаловать!" submitText="Зарегистрироваться" linkGreyText="Уже зарегистрированы?"
                       linkText="Войти" formName="register" linkPath="/signin" onSubmit={handleRegister}>
                <FormSection header="Имя" onChange={handleNameChange} type="text"
                          name="name" value={name} minLength="2" maxLength="40" id="name-input" />
                <FormSection header="E-mail" onChange={handleEmailChange} type="email"
                             name="email" value={email} modifier="form-section__input_type_email"
                             minLength="2" maxLength="40" id="email-input" />
                <FormSection header="Пароль" onChange={handlePasswordChange} type="password"
                             name="password" value={password} modifier="form-section__input_type_error"
                             minLength="2" maxLength="200" id="password-input" />
            </FormBlank>
        </main>
    )
}

export default Register;
