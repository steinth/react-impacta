import React, {useState, useEffect} from "react";

function ListProduto(){
    const [dados, setDados] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8081/product/list')
        .then(response => response.json())
        .then(data => setDados(data))
        .catch(error => console.error('Erro ao buscar', error));
    }, []);

    function UpdateProduto(id){
        window.location.href = "http://localhost:3000/update-produto/"+id
    }

    return(
        <div className="divListP">
            <h2 className="h2ListP">Produtos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID produto</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((dado, index)=>(
                        <tr key={index}>
                            <td>{dado.id}</td>
                            <td>{dado.name}</td>
                            <td>{dado.price}</td>
                            <td>{dado.quantity}</td>
                            <td>
                                <input
                                className="botaoListaP"
                                type="button"
                                value="Atualizar"
                                onClick={()=>UpdateProduto(dado.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default ListProduto;