import React from 'react';

const getRow = (data, start, end = data.length) => {
    let rows = [];
    for (let i = start; i < end; i++) {
        rows.push(data[i]);
    }
    return rows;
}

const Result = ({ result }) => (
    <div>
        {console.log(result)}
        <table>
            <thead>
                <tr>
                    {
                        result[1].map((item, index) => (
                            <td key={index}>{item}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    getRow(result, 2).map((row, index) => (
                        <tr key={index}>
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
        <div>
            {result[0][0]} {result[0][1]} {result[0][2]}
        </div>
    </div>
)


export default Result