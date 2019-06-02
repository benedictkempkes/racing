import React from 'react';

const SecundaryButton = ({ children, onClick, active }) => (
    <button
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default SecundaryButton