import { useState } from "react";

function Compra(){

    const [iduser, setIduser] = useState('')
    const [idproduto, setIdproduto] = useState('')
    const [quantidade, setQuantidade] = useState('')

    async function FormCompra() {

        if(iduser==="" || idproduto==="" || quantidade===""){
            alert("Preencha todos os campos")
            return
        }

        let apiP = await fetch("http://127.0.0.1:8081/sale/totalprice",{
            method:"POST",
            body:JSON.stringify({
                "userId":iduser,
                "productId":idproduto,
                "quantity":quantidade
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        let resposta = await apiP.json()
        if(apiP.ok){
            alert("Compra realizada")
            return
        }
        alert("Erro ao cadastrar produto")
        
        
    }

    return(
        <div className="divCompra">
            <form className="formCompra">
            <h2 className="h2Compra">Compra</h2>

            <input type="number" id="iduser" name="iduser" className="inputCompra"
            placeholder="ID do usuario"
            onChange={(e)=>setIduser(e.target.value)}
            /><br/>

            <input type="number" id="idproduto" name="idproduto" className="inputCompra"
            placeholder="ID do produto"
            onChange={(e)=>setIdproduto(e.target.value)}
            /><br/>

            <input type="number" id="quantidade" name="quantidade" className="inputCompra"
            placeholder="Quantidade"
            onChange={(e)=>setQuantidade(e.target.value)}
            /><br/>

            <input type="button" value='Finalizar Compra' className="botaoCompra"
            onClick={FormCompra}
            />

            </form>
        </div>
    )
}
export default Compra;