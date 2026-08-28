import "./publico.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Publico = ({ titulo, descricao }) => {
    return (
        <div className="card-publico">
            <FontAwesomeIcon icon={faCircleUser} className="icone-publico" />
            <div className="imagem-publico"></div>
            <h6 className="nome">{titulo}</h6>
            <p className="descricao-publico">{descricao}</p>
        </div>
    )
}

export default Publico