import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import api from "../../services/api";

import "./styles.css";

export default function TestifyForm() {
  const history = useHistory();  

  const [name, setName] = useState(" ");
  const [age, setAge] = useState(" ");
  const [testimony, setTestimony] = useState(" ");

  function handleCreateTestimony(e: FormEvent) {
    e.preventDefault();

    api
      .post('create-testimony', {
        name,
        age,
        testimony,
      })
      .then(() => {
        alert("Testemunho cadastrado com sucesso!");

        history.push('/')
      })
      .catch(() => {
        alert("Ouve algum ERRO no cadastro do seu testemunho");
      });
  }

  return (
    <div className="testify-form-page">
      <PageHeader
        title="Conte ao mundo o seu testemunho"
        description="Para isto basta preecher este formulário"
      />

      <main>
        <form onSubmit={handleCreateTestimony}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="input-block">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-block">
              <label htmlFor="age">Idade</label>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Seu Testemunho</legend>
            <div className="input-block">
              <label htmlFor="testimony">Escreva aqui seu testemunho</label>
              <textarea
                name="testimony"
                id="testimony"
                value={testimony}
                onChange={(e) => {
                  setTestimony(e.target.value);
                }}
              ></textarea>
            </div>
          </fieldset>
          <footer>
            <p>Preencha todos os dados antes de salvar</p>

            <button type="submit">Salvar testemunho</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
