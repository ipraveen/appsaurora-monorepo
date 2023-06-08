import React from 'react';
import Score from './Score';
import ScoreSummary from './ScoreSummary';
import type { ScoreSummaryItem } from './ScoreSummary';
import Container from '../Container';


interface Props {
    heading?: string;
    subHeading?: string;
    value: string;
    items?: ScoreSummaryItem[];
}



function ScoreCard({ heading, value, subHeading, items }: Props) {
    return (
        <Container>
            <div className="bg-white rounded-2xl h-36 grid grid-flow-col">
                <Score value={value} heading={heading} subHeading={subHeading} />

                {Array.isArray(items) && <ScoreSummary items={items} />}
            </div>
        </Container>
    );
}

export default ScoreCard;
