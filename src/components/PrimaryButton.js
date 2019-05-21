import React from 'react';

const PrimaryButton = ({ active, children, onClick}) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default PrimaryButton