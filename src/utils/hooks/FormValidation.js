import {useState, useCallback} from 'react';

export function useFormAndValidation(inputValues) {
    const [ values, setValues ] = useState(inputValues);
    const [ errors, setErrors ] = useState({});
    const [ isValidForm, setIsValidForm ] = useState(true);
    const [ isValidInput, setIsValidInput ] = useState(true);
    const [ nameInput, setNameInput ] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value });
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValidForm(e.target.closest('form').checkValidity());
        setIsValidInput(e.target.checkValidity());
        setNameInput(name);
    };



    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValidForm(newIsValid);
    }, [setValues, setErrors, setIsValidForm]);

    return { values, handleChange, errors, isValidForm, isValidInput, resetForm, nameInput, setValues, setIsValidForm };
}
