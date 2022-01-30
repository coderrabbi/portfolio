import { useState }from 'react';



const useForm =  (initialFValues) => {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

        const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }
    const handleReset = () => {
        setValues(initialFValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleReset,
        handleInputChange,
    };
};

export default useForm;






