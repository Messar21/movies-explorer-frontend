import HomeLink from "../HomeLink/HomeLink";
import {Link} from "react-router-dom";
import React from "react";

function FormBlank(props) {

    const error = "Что-то пошло не так..."


    return (
        <div className="form-blank__container">
            <HomeLink />
            <form className="form-blank__form" name={ props.formName } onSubmit={ props.onSubmit }
                  noValidate>
                <h1 className="form-blank__heading">{props.heading}</h1>
                {props.children}
                <span className="form-blank__error">{error}</span>
                <button className={ `form-blank__button ${props.buttonStyle}` } type="submit">
                    {props.submitText}
                </button>
                <Link to={props.linkPath} className="form-blank__link">
                    <span className="form-blank__link_type_grey">{props.linkGreyText}</span>
                    {props.linkText}
                </Link>
            </form>
        </div>
    )
}

export default FormBlank;
