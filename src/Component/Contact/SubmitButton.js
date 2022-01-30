import { Button as MuiButton } from '@mui/material';
import React from 'react';
import './Form.css';


const SubmitButton = (props) => {
   const {text, size, color, variant, onClick, icon,className, ...other} = props;
    return (
        <MuiButton
        variant={variant || 'outlined'}
        size={size || "large"}
        color={color}
        onClick={onClick}
        {...other}
        className={className}
        >
            {text}{icon}
        </MuiButton>
    );
};

export default SubmitButton;