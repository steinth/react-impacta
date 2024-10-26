import { useState } from "react";

function TestCep(){

    const [cep, setCep] = useState('')
    async function salvar(){

        let api = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
        let resposta = await api.json();

        if (api.ok){
            console.log(resposta)
            return
        }
        console.log(resposta);
    }

    return(
        
        <div>

            <form>
            <h2>Localizar cep</h2>
            <input 
            type='text'
            id='cep' 
            placeholder='Digite aqui seu CEP'
            value={cep}
            onChange={(e)=> setCep(e.target.value)}
             />

            <input type='button' value="Enviar" onClick={salvar}/>
            </form>

        </div>
    )
}
export default TestCep;