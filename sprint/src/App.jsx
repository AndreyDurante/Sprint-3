import './App.css'
import Botao from './components/Botao'
import Head from './components/Head'
import Integrantes from './components/Integrantes'
import Publico from './components/Publico'
import Solucao from './components/Solucao'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className='conteudo-principal'>
      <section className='landing'>
        <Head></Head>
        <article className='conteudo-landing'>
          <h6 className='titulo'>Câmera Móvel.</h6>
          <span>Mais clareza, menos cliques.</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus explicabo, debitis fugit error rerum consequatur.</p>
          <Botao
            link={"#solucao"}
          />
        </article>
        <div className='imagem-landing'>
        </div>
      </section>

      <section className='solucao' id='solucao'>
        <h2 className='titulo titulo-solucao'>Nossa Solução</h2>
        <p>Desenvolvemos uma proposta focada em simplificar a experiência da câmera mobile através de uma interface moderna, limpa e intuitiva.</p>
        <div className='cards-solucao'>
          <Solucao
            titulo="Interface Minimalista"
            texto="Redução de elementos desnecessários para priorizar foco, velocidade e clareza visual."
          />
          <Solucao
            titulo="Navegação Intuitiva"
            texto="Organização simples dos recursos principais para facilitar o uso diário."
          />
          <Solucao
            titulo="Acesso Rápido"
            texto="Os modos mais utilizados ficam acessíveis imediatamente sem menus complexos."
          />

        </div>
      </section>

      <section className='publico-alvo' id='publico-alvo'>
        <h2 className='titulo'>Público Alvo</h2>
        <div className='div-publico'>
          <Publico
            titulo={"Fotógrafos"}
            descricao={"Pessoas que já têm interesse em fotografia mas não têm equipamento profissional."}
          />
          <Publico
            titulo={"Criadores de conteúdo"}
            descricao={"Precisam de agilidade extrema entre abrir o app, enquadrar e capturar — seja foto ou vídeo"}
          />
          <Publico
            titulo={"Pais e famílias"}
            descricao={"Precisam de simplicidade e velocidade: crianças não esperam."}
          />
          <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
          />
        </div>
      </section>

      <section className='galeria' id='galeria'>
        <h2 className='titulo'>Galeria</h2>
        <main className='fotos-galeria'></main>
      </section>

      <section className='equipe' id='equipe'>
        <h2 className='titulo'>Quem somos?</h2>
        <div className='div-integrantes'>
          <Publico
            titulo={"Andrey Durante"}
            descricao={"Desenvolvedor Front-End."}
          />
          <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
          />
          <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
          />
          <Publico
            titulo={"Usuários idosos"}
            descricao={"Muitas vezes se frustram com interfaces cheias de ícones e gestos pouco intuitivos."}
          />

        </div>
        <footer id='contato'>
          <div className='footer-integrantes'>
            <h6>Integrantes</h6>
            <p>Andrey - RM 569922</p>
            <p>Fabrício - RM 573450</p>
            <p>Felipe - RM 573404</p>
            <p>Gustavo - RM 570720</p>
          </div>
          <p className='texto-footer'>Projeto desenvolvido pela equipe FGA Sistemas para projeto do Challenge da Jovi</p>
        </footer>
      </section>
    </div>


  )
}

export default App
