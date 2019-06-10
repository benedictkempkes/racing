import React from 'react';

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

const Standing = ({ data }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <td>P</td>
                    {
                        Object.keys(data[0]).map((item, index) => (
                            <td key={index}>{data[0][item]}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    getRow(data, 1).map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            {
                                Object.keys(row).map((col, index) => (
                                    <td key={index}>
                                        {(row[col] !== '.') ? row[col] : <span>&nbsp;</span>}
                                    </td>
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