import React from 'react';

const Highlight = ({ result }) => (
    <iframe className="hightlight" src={result[0]['2']} frameBorder="0" 
        allowFullScreen>
    </iframe>
)


export default Highlight