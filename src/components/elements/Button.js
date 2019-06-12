
import React from 'react';
import './button.less';

const PrimaryButton = ({ active, children, onClick, style }) => (
    <button
        className={style}
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default PrimaryButton