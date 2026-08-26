import './App.css'
import Botao from './components/Botao'
import Head from './components/Head'

function App() {
  return(
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

      
    
  )
}

export default App
