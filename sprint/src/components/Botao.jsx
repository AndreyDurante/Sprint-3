import "./botao.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleUser } from '@fortawesome/free-solid-svg-icons';


const Botao = ({link}) => {
    return (
        <a className="botao" href={link}>Conheça a solução <FontAwesomeIcon icon={faCircleArrowDown} className="seta" /></a>
    )

}

export default Botao