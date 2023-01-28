import React from 'react';
export interface MyButonProps{
    label?: string;
}

const MyButton = ({label}: MyButonProps) => {
    return (
        <button>
            {label}
        </button>
    )
};

export default MyButton;
