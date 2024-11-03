import './CadastroUser.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpf_cnpj, setCpf_cnpj] = useState('');

   

    async function EditUser() {       
      
        let api = await fetch(`http://127.0.0.1:8081/user/${id}`, {
            method: "PUT",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":password,
                "cpf_cnpj":cpf_cnpj,
                "is_active":1,
                "product": []
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let resposta = await api.json();
        if (api.ok) {
            alert("Atualização realizada");
            return;
        }
        alert("Erro ao atualizar");
    }

    return (
        <div className="divUpdate">
            <h2 className="h2Update">Atualizar Usuários</h2>

            <form className="formUpdate">
                <input
                    type="text"
                    className="inputUpdate"
                    placeholder="Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    className="inputUpdate"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="inputUpdate"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <input
                    type="text"
                    className="inputUpdate"
                    placeholder="CPF/CNPJ"
                    value={cpf_cnpj}
                    onChange={(e) => setCpf_cnpj(e.target.value)}
                />

                <input
                    type="button"
                    value='Atualizar'
                    className="botaoAtualizar"
                    onClick={EditUser}
                />
            </form>
        </div>
    );
}

export default UpdateUser;
