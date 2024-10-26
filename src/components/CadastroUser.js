import './CadastroUser.css';
import { useState } from 'react';

function CadastroUser(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf_cnpj, setCpf_cnpj] = useState('')

    async function FormUser(){

        if(name=== "" || email==="" || password === "" || cpf_cnpj === ""){
            alert("Preencha todos os campos")
            return
        }

        let api = await fetch("http://127.0.0.1:8081/user/save",{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":password,
                "cpf_cnpj":cpf_cnpj,
                "is_active":1,
                "product": []
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        let resposta = await api.json()
        if(api.ok){
            alert("Cadastro realizado")
            return
        }
        alert("Erro ao realizar cadastro")

    }

    return(
    
        <div className='divCadastro'>
            <form className='formCadastro' >
            <h2 className='h2Cadastro'>Cadastro</h2>
        
            <input type='text' id='name' name='name' className='inputCadastro'
            placeholder='name'
            onChange={(e)=>setName(e.target.value)}
            /><br/>

            
            <input type='email' id='email' name='email' className='inputCadastro'
             placeholder='email'
             onChange={(e)=>setEmail(e.target.value)}
             /><br/>

            
            <input type='password' id='password' name='password' className='inputCadastro'
            placeholder='password'
            onChange={(e)=>setPassword(e.target.value)}
            /><br/>

            
            <input type='text' id='cpf_cnpj' name='cpf_cnpj' className='inputCadastro'
            placeholder='cpf_cnpj'
            onChange={(e)=>setCpf_cnpj(e.target.value)}
            /><br/>

            <input type='button' value='Cadastrar' className='botaoCadastro'
            onClick={FormUser}/>

            </form>

        </div>
    )

}
export default CadastroUser;