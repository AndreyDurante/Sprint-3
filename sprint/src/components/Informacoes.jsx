import "./informacoes.css"

const Informacoes = ({titulo, i1, i2, i3, i4}) => {
    return (
        <div className='footer-integrantes'>
            <h6>{titulo}</h6>
            <p>{i1}</p>
            <p>{i2}</p>
            <p>{i3}</p>
            <p>{i4}</p>
        </div>
    )
}

export default Informacoes