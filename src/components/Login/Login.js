import React, {useEffect} from "react";
import FormSection from "../FormSection/FormSection";
import FormBlank from "../FormBlank/FormBlank";
import {useFormAndValidation} from "../../utils/hooks/FormValidation";

function Login({ login, message, setMessage }) {

    const { values,
            handleChange,
            errors,
            isValidForm,
            isValidInput,
            resetForm,
            nameInput,
            setIsValidForm } = useFormAndValidation({});

    useEffect(() => {
        resetForm();
        setMessage('');
    }, [resetForm, setMessage]);

    function handleLogin (e) {
        e.preventDefault();
        setIsValidForm(false);
        login(values.email, values.password);
    }

    return (
        <main className="login">
            <FormBlank heading="Рады видеть!" submitText="Войти" linkGreyText="Ещё не зарегистрированы?"
                       linkText="Регистрация" formName="login" linkPath="/signup" isValidForm={isValidForm}
                       buttonStyle="form-blank__error_type_login" onSubmit={handleLogin} message={message}>
                <FormSection header="E-mail" onChange={handleChange} type="email"
                             name="email" value={values.email || ''} modifier="form-section__input_type_email"
                             minLength="2" maxLength="40" id="email-input"
                             pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                             isValidInput={nameInput === 'email' ? isValidInput : true} error={errors.email} />
                <FormSection header="Пароль" onChange={handleChange} type="password"
                             name="password" value={values.password || ''}
                             minLength="2" maxLength="200" id="password-input"
                             isValidInput={nameInput === 'password' ? isValidInput : true} error={errors.password} />
            </FormBlank>
        </main>
    )
}

export default Login;
