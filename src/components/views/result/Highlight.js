import React from 'react';

const Highlight = ({ result }) => (
    <div>
        <iframe width="560" height="315" src={result[0]['2']} frameBorder="0" 
            allowFullScreen>
        </iframe>
    </div>
)


export default Highlight