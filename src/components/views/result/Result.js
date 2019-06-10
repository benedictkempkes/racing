import React from 'react';

const getRow = (data, start, end = data.length) => {
    let rows = [];
    for (let i = start; i < end; i++) {
        rows.push(data[i]);
    }
    return rows;
}

const getBestLap = (result) => {
    let content = undefined;
    if(result[0]['2']){
        content = <div>
            <span>{result[0]['1']}</span>
            <span>{result[0]['2']}</span>
            <span>{result[0]['3']}</span>
        </div>
    }
    return content;
}

const Result = ({ result }) => (
    <div>
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(result[1]).map((item, index) => (
                            <td key={index}>{result[1][item]}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    getRow(result, 2).map((row, index) => (
                        <tr key={index}>
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
        <div>
            {getBestLap(result)}
        </div>
    </div>
)


export default Result