import React from 'react';

interface Props {
    heading?: string;
    subHeading?: string;
    value: string;
}
function Score({ heading, value, subHeading }: Props) {
    return (
        <div>
            <p>{heading}</p>
            <h1>{value}</h1>
        </div>
    );
}

export default Score;
