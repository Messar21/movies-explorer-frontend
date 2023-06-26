import React from "react";

function FormSection(props) {
    return (
        <div className="form-section">
            <p className="form-section__header">{props.header}</p>
            <input className={ `form-section__input ${props.modifier}` } onChange={ props.onChange } type={ props.type }
               name={ props.name } value={ props.value } required
                   minLength={ props.minLength } maxLength={ props.maxLength } id={ props.id }
            />
            <span className={ `form-section__error ${props.id}-error` }></span>
        </div>
    )
}

export default FormSection;
