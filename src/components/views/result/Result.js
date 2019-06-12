import React from 'react';
import Cell from '../../elements/Cell';

const getRow = (data, start, end = data.length) => {
    let rows = [];
    for (let i = start; i < end; i++) {
        rows.push(data[i]);
    }
    return rows;
}

const getBestLap = (result) => {
    let content = undefined;
    if(result[1]['2']){
        content = <div className="bestLap">
            <span style={{ color: '#33BABD'}}>{result[1]['1']} </span>
            <span style={{ color: '#BE1DBB' }}>{result[1]['2']} </span>
            <span style={{ color: '#BE1DBB' }}>{result[1]['3']}</span>
        </div>
    }
    return content;
}

const Result = ({ result }) => (
    <div className="result">
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(result[2]).map((item, index) => (
                            <Cell key={index} styling='#33BABD'>{result[2][item]}</Cell>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    getRow(result, 3).map((row, index) => (
                        <tr key={index}>
                            {
                                Object.keys(row).map((col, index) => (
                                    <Cell key={index}
                                        styling={
                                            (index < 1) ? '#33BABD' :
                                                (index === 2) ? '#D9E346' : '#fff' 
                                        }>
                                        {(row[col] !== '.') ? row[col] : <span>-</span>}
                                    </Cell>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {getBestLap(result)}
    </div>
)


export default Result