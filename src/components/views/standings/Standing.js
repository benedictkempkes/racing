import React from 'react';

import Cell from '../../elements/Cell';

const getRow = (data, start, end = data.length) => {
    let rows = [];
    for (let i = start; i < end; i++){
        rows.push(data[i]);
    }
    let listIndex = Object.keys(data[0])
    let pointsIndex = listIndex[listIndex.length - 1];
    return rows.sort(function(a, b ){
        return b[pointsIndex] - a[pointsIndex];
    });
}

const Standing = ({ data, win, points }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <Cell styling='#33BABD'>P</Cell>
                    {
                        Object.keys(data[0]).map((item, index) => (
                            <Cell key={index} styling='#33BABD' responsive={
                                (index >= 3 && index < Object.keys(data[0]).length - 1) ? 'tablet' :
                                    (index === points || index === Object.keys(data[0]).length - 1) ? '' : 'mobile'
                            }>
                                {(data[0][item] !== 'Nummer') ? data[0][item] : <span>&nbsp;</span>}
                            </Cell>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                
                {
                    getRow(data, 1).map((row, index) => (
                        <tr key={index}>
                            <Cell styling='#33BABD'>{index + 1}</Cell>
                            {
                                Object.keys(row).map((col, index) => (
                                    <Cell key={index}
                                        styling={
                                            (index < 3 || index >= Object.keys(row).length - 1) ? '#fff' : 
                                                (row[col] === win) ? '#BE1DBB' : '#D9E346' 
                                        }
                                        responsive={
                                            (index >= 3 && index < Object.keys(row).length - 1) ? 'tablet' :
                                                (index === points || index === Object.keys(row).length - 1) ? '': 'mobile'
                                        }>
                                        {(row[col] !== '.') ? row[col] : <span>&nbsp;</span>}
                                    </Cell>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default Standing