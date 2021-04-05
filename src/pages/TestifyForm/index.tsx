import React from 'react'

import './styles.css'

import PageHeader from '../../components/PageHeader';

export default function TestifyForm() {
    return (
        <div className="testify-form-page">
            <PageHeader 
                title="Conte ao mundo o seu testemunho"
                description="Para isto basta preecher este formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <div className="input-block">
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="age">Idade</label>
                        <input type="text" id="age"/>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Seu Testemunho</legend>
                    <div className="input-block">
                        <label htmlFor="testimony">Escreva aqui seu testemunho</label>
                        <textarea name="testimony" id="testimony"></textarea>
                    </div>
                </fieldset>
                <footer>                      
                    <p>Preencha todos os dados antes de salvar</p>

                    <button type="button">Salvar testemunho</button>
                </footer>
            </main>
        </div>
    );
}