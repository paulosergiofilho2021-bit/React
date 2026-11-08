import { Link } from "react-router";
function Home(){
    return (
        <>
            <h1>Página inicial</h1>
            <Link to="/sobre">Sobre nós</Link>
        </>
    )
};

export default Home;