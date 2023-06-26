import HomeLink from "../HomeLink/HomeLink";
import {Link} from "react-router-dom";
import React from "react";

function FormBlank(props) {

    const error = "Что-то пошло не так..."

    function handleSubmit (evt)  {
        evt.preventDefault();
    }

    return (
        <div className="form-blank__container">
            <HomeLink />
            <form className="form-blank__form" name={ props.formName } onSubmit={ handleSubmit } noValidate>
                <h2 className="form-blank__heading">{props.heading}</h2>
                {props.children}
                <span className="form-blank__error">{error}</span>
                <button className={ `form-blank__button ${props.buttonStyle}` } type="submit">{props.submit}</button>
                <Link to={props.linkPath} className="form-blank__link">
                    <span className="form-blank__link_type_grey">{props.linkGrey}</span>
                    {props.link}
                </Link>
            </form>
        </div>
    )
}

export default FormBlank;
