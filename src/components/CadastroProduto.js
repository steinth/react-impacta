import { useState } from "react";

function CadastroProduto(){

    const [idUser, setIduser] = useState('')
    const [nameP, setNameP] = useState('')
    const [precoP, setPrecoP] = useState('')
    const [quantidadeP, setQuantidadeP] = useState('')

    async function FormProduto() {

        if(idUser=== "" || nameP==="" || precoP === "" || quantidadeP === ""){
            alert("Preencha todos os campos")
            return
        }

        let apiP = await fetch("http://127.0.0.1:8081/product/save",{
            method:"POST",
            body:JSON.stringify({
                "user":idUser,
                "name":nameP,
                "price":precoP,
                "quantity":quantidadeP 
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        let resposta = await apiP.json()
        if(apiP.ok){
            alert("produto cadastrado com sucesso")
            return
        }
        alert("Erro ao cadastrar produto")
        
    }
    
    return(
        <div className="divCProduto">
            <form className="fomrCproduto">
            <h2 className="h2CProduto">Cadastro de produto</h2>

                <input type="number" id="idUser" name="idUser" className="inputCproduto"
                placeholder="ID do usuario"
                onChange={(e)=>setIduser(e.target.value)}
                /><br/>

                <input type="text" id="nameP" name="nameP" className="inputCproduto"
                placeholder="Nome do produto"
                onChange={(e)=>setNameP(e.target.value)}
                /><br/>

                <input type="number" id="precoP" name="precoP" className="inputCproduto"
                placeholder="Preço do produto"
                onChange={(e)=>setPrecoP(e.target.value)}
                /><br/>

                <input type="number" id="quantidadeP" name="quantidadeP" className="inputCproduto"
                placeholder="Quantidade"
                onChange={(e)=>setQuantidadeP(e.target.value)}
                /><br/>

                <input type="button" value="Cadastrar Produto" className="botaoCProduto"
                onClick={FormProduto}
                />
            </form>            

        </div>
    )
}
export default CadastroProduto;