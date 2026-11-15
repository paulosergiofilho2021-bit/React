import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import styles from "./Sobre.module.css"
function Sobre(){
    return (
        <>
            <h1>Sobre nós</h1>
            <Link to="/">Página principal</Link>
            <footer>
                <ul className={styles.social_list}>
                    <li><FaFacebook></FaFacebook></li>
                    <li><BsInstagram></BsInstagram></li>
                    <li><LiaLinkedin></LiaLinkedin></li>
                </ul>
            </footer>
        </>
    )
};
export default Sobre;