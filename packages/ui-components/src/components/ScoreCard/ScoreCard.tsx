import React from 'react';
import Score from './Score';
import ScoreSummary from './ScoreSummary';
import type { ScoreSummaryItem } from './ScoreSummary';
import styled from '@emotion/styled';

interface Props {
    heading?: string;
    subHeading?: string;
    value: string;
    items?: ScoreSummaryItem[];
}

const Container = styled.div`
display: flex;
justify-content: space-around;
`

function ScoreCard({ heading, value, subHeading, items }: Props) {
    return (
        <Container>
            <p className='text-red-500 font-bold'>Red Text Bold</p>
            <Score value={value} heading={heading} subHeading={subHeading} />
            {Array.isArray(items) && <ScoreSummary items={items} />}
        </Container>
    );
}

export default ScoreCard;
