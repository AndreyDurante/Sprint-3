import "./solucao.css";

const Solucao = ({titulo, icone, texto}) => {
    return (
        <div className="card">
            
            <div className="titulo-solucao">
                <h6>{titulo} <span>{icone}</span></h6>
            </div>
            <p>{texto}</p>
        </div>
    )}

export default Solucao