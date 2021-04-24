import React from 'react'

import './styles.css'

export interface Testimony {
    id: number;
    name: string;
    age: string;
    testimony: string;
}

interface TestimonyItemProps {
    testimonys: Testimony;
}

const TestifyItem: React.FC<TestimonyItemProps> = ({ testimonys }) => {
    return (
        <article className="testify-item">
                <header>
                    <strong>{testimonys.name}</strong>
                    <span>{testimonys.age}</span>
                </header>

                <p>{testimonys.testimony}</p>
        </article>
    );
}

export default TestifyItem;