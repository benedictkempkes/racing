import React from 'react';

const Cell = ({ styling, children }) => (
    <td style={{padding: '3px 5px', color: styling}}>
        {children}
    </td>
)

export default Cell