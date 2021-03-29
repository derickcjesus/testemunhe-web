import React from 'react'
import PageHeader from '../../components/PageHeader';
import TestifyItem from '../../components/TestifyItem';

import './styles.css'

export default function TestifyList() {
    return (
        <>
        <div id="page-testify-list">
        <PageHeader title="Veja aqui alguns testemunhos" />

            <main>
                <TestifyItem />
                <TestifyItem />

            </main>
        </div>
        </>
    );
}