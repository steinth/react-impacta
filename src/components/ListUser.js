import React, { useState, useEffect } from 'react';

function ListUser() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8081/user/list')
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error('Erro ao buscar', error));
  }, []);

  function updateUser(id) {
    window.location.href = "http://localhost:3000/update-usuario/"+id
  }

  return (
    <div className="divList">
      <h2 className="h2List">Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>CPF/CNPJ</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              <td>{dado.id}</td>
              <td>{dado.name}</td>
              <td>{dado.email}</td>
              <td>{dado.cpf_cnpj}</td>
              <td>
                <input
                  className="botaoLista"
                  type="button"
                  value="Atualizar"
                  onClick={() => updateUser(dado.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
