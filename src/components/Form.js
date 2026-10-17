import { useState } from "react";

function Form() {
    function cadastrarUsuario(event){
        console.log("Cadastrou o usuário");
        console.log(`usuário ${name} foi cadastrado com a senha: ${password}`);
        event.preventDefault();
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" placeholder="Digite o seu nome" 
                    id="name"
                    onChange={(e) => setName(e.target.value)} // Backend
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                    type="password" 
                    placeholder="Digite a sua senha" id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="email" 
                    placeholder="Digite a seu email" id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <h1>O email do usuário é {email}</h1>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form;