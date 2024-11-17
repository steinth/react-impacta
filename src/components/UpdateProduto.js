import { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateProduto(){

    const{id} = useParams();
    const[userId, setIduser] = useState("");
    const[nameP, setNameP] = useState("")
    const[precoP, setPrecoP] = useState("");
    const[quantityP, setQuantityP] = useState("");

    async function EditProduto(){

        let apiP = await fetch(`http://127.0.0.1:8081/product/${id}`, {
            method: "PUT",
            body:JSON.stringify({
                "user":userId,
                "name":nameP,
                "price":precoP,
                "quantity":quantityP,
            }),
            headers:{
                'Content-Type':'application/json'
            }
    });

        let resposta = await apiP.json();
        if(apiP.ok){
            alert("Atualização realizada")
            return;
        }
        alert("Erro ao atualizar")
    }
    return(
        <div className="divUpdateP">

            <form className="formUpdateP">
                <h2 className="h2UpdateP">Atualizar Produtos</h2>
                <input
                    type="number"
                    className="inputUpdateP"
                    placeholder="ID"
                    value={userId} 
                    onChange={(e) => setIduser(e.target.value)}
                />

                <input
                    type="text"
                    className="inputUpdateP"
                    placeholder="Nome do produto"
                    value={nameP} 
                    onChange={(e) => setNameP(e.target.value)}
                />

                <input
                    type="number"
                    className="inputUpdateP"
                    placeholder="Preço"
                    value={precoP} 
                    onChange={(e) => setPrecoP(e.target.value)}
                />

                <input
                    type="number"
                    className="inputUpdateP"
                    placeholder="Quantidade"
                    value={quantityP}
                    onChange={(e) => setQuantityP(e.target.value)}
                />

                <input
                    type="button"
                    value='Atualizar'
                    className="botaoAtualizarP"
                    onClick={EditProduto}
                />
            </form>
        </div>
    );

}
export default UpdateProduto;