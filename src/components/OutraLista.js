function OutraLista({itens}){
    return (
        <>
            <h3>Lista de coisas boas: </h3>
            {itens.length > 0 ?(
            itens.map((item, index) => ( // Retornar um elemento html é diferente de retornar uma função em js ( {} )
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}
export default OutraLista