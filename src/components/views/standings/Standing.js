import React from 'react';

const getRow = (data, start, end = data.length) => {
    let rows = [];
    for (let i = start; i < end; i++){
        rows.push(data[i]);
    }
    return rows;
}

const Standing = ({ data }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <td>P</td>
                    {
                        data[0].map((item, index) => (
                            <td key={index}>{item}</td>
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
                                row.map((col, index) => (
                                    <td key={index}>{col}</td>
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