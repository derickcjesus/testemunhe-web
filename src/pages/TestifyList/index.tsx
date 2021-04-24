import React, { useState } from 'react'
import PageHeader from '../../components/PageHeader';
import TestifyItem, { Testimony } from '../../components/TestifyItem';
import api from '../../services/api';

import './styles.css'

export default function TestifyList() {
    const [name] = useState(" ");
    const [age] = useState(" ");
    const [testimony] = useState(" ");

    const [testimonials, setTestimonials] = useState([]);

    async function searchTestimony() {
        const response = await api.get('testify-list', {
            params: {
                name,
                age,
                testimony,
            },
        });
    
        setTestimonials(response.data);
    }

    searchTestimony();
    

    return (
        <>
        <div id="page-testify-list">
        <PageHeader title="Veja aqui alguns testemunhos" />

            <main>
                {testimonials.map((testimony: Testimony) => {
                    return <TestifyItem key={testimony.id} testimonys={testimony}/>;
                })}
            </main>
        </div>
        </>
    );
}