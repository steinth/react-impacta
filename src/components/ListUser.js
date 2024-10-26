
function ListUser(){

    const dados = [
        {id: 12, nome:"Thiago stein", cpf:"40711590818"},
        {id: 13, nome:"Paloma oliveira", cpf:"31600491929"},
        {id: 14, nome:"Carlos Silva", cpf:"22800489707"},
        {id: 15, nome:"Andre luiz", cpf:"27600445707"}
    ]

    function updateUser(id){
        alert(id)
    }
    
    return(
        
        <div>
            <h2>Listagem de endereço</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Ação</th>
                </tr>
                <tbody>
                    {dados.map((dados, index)=>(
                        <tr>
                            <th>{dados.id}</th>
                            <th>{dados.nome}</th>
                            <th>{dados.cpf}</th>
                            <th><input type="button" value="atualizar" onClick={()=> updateUser(dados.id)}/></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ListUser;