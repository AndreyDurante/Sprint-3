import './App.css'
import Botao from './components/Botao'
import Head from './components/Head'
import Solucao from './components/Solucao'

function App() {
  return(
    <div>
      <section className='landing'>
          <Head></Head>
            <article className='conteudo-landing'>
              <h6>Lorem ipsum dolor sit amet.</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, debitis fugit error rerum consequatur.</p>
              <Botao
              texto = "Conheça a solução"
              
              />
            </article>
            <div className='imagem-landing'>

            </div>
        </section>

        <section className='solucao'>
          <h6>Título solução</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, debitis fugit error rerum consequatur.</p> 
          <div className='cards-solucao'>
            <Solucao/>
            <Solucao/>
            <Solucao/>
            <Solucao/>
          </div>
        </section>

        <section className='publico-alvo'>
          <h2>Público Alvo</h2>
          
        </section>
    </div>
      
    
  )
}

export default App
