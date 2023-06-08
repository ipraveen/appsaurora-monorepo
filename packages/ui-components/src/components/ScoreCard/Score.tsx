import React from 'react';

import styled from '@emotion/styled';

interface Props {
    heading?: string;
    subHeading?: string;
    value: string;
}

const ScoreContainer = styled.div`
    background: var(--gradient-primary);
`;

const ScoreInnerContainer = styled.div`
    background: var(--gradient-to-transparent);
`;
function Score({ heading, value }: Props) {
    return (
        <ScoreContainer className="flex flex-col items-center">
            <p className='text-white'>{heading}</p>
            <ScoreInnerContainer className="grid  place-content-center rounded-full bg-blue-600 w-16 h-16 font-bold text-4xl text-white">{value}</ScoreInnerContainer>
        </ScoreContainer>
    );
}

export default Score;
