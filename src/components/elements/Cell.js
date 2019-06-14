import React from 'react';
import './cell.less';

const Cell = ({ styling, responsive, children }) => (
    <td className={'cell ' + responsive} style={{padding: '3px 5px', color: styling}}>
        {children}
    </td>
)

export default Cell