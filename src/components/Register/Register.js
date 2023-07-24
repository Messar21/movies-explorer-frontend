import React, {useEffect} from "react";
import FormBlank from "../FormBlank/FormBlank";
import FormSection from "../FormSection/FormSection";
import {useFormAndValidation} from "../../utils/hooks/FormValidation";

function Register({ register, message, setMessage }) {

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

    function handleRegister(e) {
        e.preventDefault();
        setIsValidForm(false);
        register(values.name, values.email, values.password);
    }

    return (
        <main className="register">
            <FormBlank heading="Добро пожаловать!" submitText="Зарегистрироваться"
                       linkGreyText="Уже зарегистрированы?" linkText="Войти" isValidForm={isValidForm}
                       formName="register" linkPath="/signin" onSubmit={handleRegister} message={message}>
                <FormSection header="Имя" onChange={handleChange} type="text"
                             name="name" value={values.name || ''} minLength="2"
                             maxLength="40" id="name-input" pattern="^[A-Za-zА-яа-яёЁ\s\-]+$"
                             error={errors.name
                                 && "Это поле может содержать только латиницу, кириллицу, пробел или дефис"}
                             isValidInput={nameInput === 'name' ? isValidInput : true}/>
                <FormSection header="E-mail" onChange={handleChange} type="email"
                             name="email" value={values.email || ''} modifier="form-section__input_type_email"
                             minLength="2" maxLength="40" id="email-input" pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                             error={errors.email} isValidInput={nameInput === 'email' ? isValidInput : true}/>
                <FormSection header="Пароль" onChange={handleChange} type="password"
                             name="password" value={values.password || ''}
                             minLength="2" maxLength="200" id="password-input"
                             error={errors.password} isValidInput={nameInput === 'password' ? isValidInput : true}/>
            </FormBlank>
        </main>
    )
}

export default Register;
