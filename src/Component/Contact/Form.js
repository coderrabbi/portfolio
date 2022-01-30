import React from 'react';

const Form = (props) => {
    const {children , ...other} = props;
    return (
            <form action="" autoComplete="off" {...other}>
            {props.children}
        </form>
    );
};

export default Form;