import "./botao.css"

const Botao = ({texto, link}) => {
    return (
        <a className="botao" href={link}>{texto}</a>
    )
}

export default Botao