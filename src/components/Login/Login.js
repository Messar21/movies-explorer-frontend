import React, { useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormBlank from "../FormBlank/FormBlank";

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <main className="login">
            <FormBlank heading="Рады видеть!" submitText="Войти" linkGreyText="Ещё не зарегистрированы?"
                       linkText="Регистрация" formName="login" linkPath="/signup"
                       buttonStyle="form-blank__button_type_login" onSubmit={props.login}>
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

export default Login;
