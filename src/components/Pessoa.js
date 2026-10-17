function Pessoa({nome, idade, Profissão, foto}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {Profissão}</p>
        </div>
    )
}

export default Pessoa;