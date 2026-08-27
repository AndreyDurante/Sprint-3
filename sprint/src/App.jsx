import './App.css'
import Botao from './components/Botao'
import Head from './components/Head'
import Integrantes from './components/Integrantes'
import Publico from './components/Publico'
import Solucao from './components/Solucao'
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return(
    <div>
      <section className='landing'>
          <Head></Head>
            <article className='conteudo-landing'>
          <h6 className='titulo'>Lorem ipsum dolor sit amet.</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, debitis fugit error rerum consequatur.</p>
              <Botao
              texto = "Conheça a solução"
              
              />
            </article>
            <div className='imagem-landing'>
            </div>
        </section>

        <section className='solucao'>
        <h2 className='titulo titulo-solucao'>Nossa Solução</h2>
        <p>Desenvolvemos uma proposta focada em simplificar a experiência da câmera mobile através de uma interface moderna, limpa e intuitiva.</p> 
          <div className='cards-solucao'>
            <Solucao
            titulo= "Interface Minimalista"
            texto= "Redução de elementos desnecessários para priorizar foco, velocidade e clareza visual."
            />
            <Solucao
            titulo= "Navegação Intuitiva"
            texto= "Organização simples dos recursos principais para facilitar o uso diário."
            />
            <Solucao
            titulo= "Acesso Rápido"
            texto= "Os modos mais utilizados ficam acessíveis imediatamente sem menus complexos."
            />
            
          </div>
        </section>

        <section className='publico-alvo'>
        <h2 className='titulo'>Público Alvo</h2>
          <div className='div-publico'>
            <Publico
            titulo={"Fotógrafos"}
            descricao={"Pessoas que já têm interesse em fotografia mas não têm equipamento profissional. Se beneficiam de controles manuais mais acessíveis"}
            />
            <Publico
            titulo={"Criadores de conteúdo"}
            descricao={"Precisam de agilidade extrema entre abrir o app, enquadrar e capturar — seja foto ou vídeo — sem perder o momento"}
            />
            <Publico
            titulo={"Pais e famílias"}
            descricao={"Precisam de simplicidade e velocidade: crianças não esperam. Se beneficiam de um app que abra instantaneamente."}
            />
            <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
            />
          </div>
        </section>

        <section className='galeria'>
        <h2 className='titulo'>Galeria</h2>
          <main className='fotos-galeria'></main>
        </section>

        <section className='equipe'>
        <h2 className='titulo'>Quem somos?</h2>
          <div className='div-integrantes'>
            <Integrantes/>
            <Integrantes/>
            <Integrantes/>
            <Integrantes/>
          </div>
          <footer>
            
          </footer>
        </section>
    </div>
      
    
  )
}

export default App
