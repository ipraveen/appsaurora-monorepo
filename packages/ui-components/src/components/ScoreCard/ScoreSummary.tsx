import React from 'react';

export interface ScoreSummaryItem {
    label: string;
    value: string;
}

interface Props {
    items: ScoreSummaryItem[];
}

function ScoreSummary({ items }: Props) {
    return (
        <div>
            {items.map(({ label, value }) => (
                <p>
                    {label} : {value}
                </p>
            ))}
        </div>
    );
}

export default ScoreSummary;
