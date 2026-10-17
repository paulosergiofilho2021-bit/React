import Button from "./evento/Button";

function Evento ({numero}) {
    let Numero = 1
    function meuEvento() {
        console.log(`Opa, fui ativado ${Numero} vezes`);
        Numero += 1
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento");
    }

    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento evento"/>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Evento;