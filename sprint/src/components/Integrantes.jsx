import "./integrantes.css"

const Integrantes = ({nome, descricao}) => {
    return (
        <main className="card-integrantes">
            <h6>{nome}Andrey</h6>
            <p>{descricao} Descricao do participante</p>
        </main>
    )
}

export default Integrantes