import React from 'react';

const Back = ({ children, onClick, active }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default Back