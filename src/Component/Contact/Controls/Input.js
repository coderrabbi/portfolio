import { TextField } from '@mui/material';
import React from 'react';

const Input = (props) => {

    const {name, label, value, error=null, onChange} = props;
    return (
        <TextField
            label={label}
            name={name}
            variant="standard"
            value={value}
            fullWidth
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    );
};

export default Input;