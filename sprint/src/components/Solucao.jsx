import "./solucao.css";

const Solucao = ({titulo, icone, texto, imagem, alt}) => {
    return (
        <main>
        <div className="card"> 
            <div className="titulo-solucao">
                <h6>{titulo} <span>{icone}</span></h6>
            </div>
            <p>{texto}</p>
        </div>
        <div className="imagem">
            <img src={imagem} alt={alt} />
        </div>
        </main>
    )}

export default Solucao