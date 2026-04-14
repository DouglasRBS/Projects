import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ]

  const postData = {
    titulo: 'Descobrindo as praias do nordeste',
    autor: 'Redação Blog',
    data: '2026-02-24',
    dataFormatada: '24 de fevereiro de 2026',
    conteudo: [
      'Da Bahia ao Rio Grande do Norte, passando por Sergipe, Alagoas, Pernambuco, Paraíba, além do Ceará, Piauí e Maranhão: o que não faltam são faixas de areia maravilhosas e praias com as mais diversas características! Não há dúvidas que muitas das melhores praias do Brasil estão no Nordeste!',
      'A região com o maior litoral em nosso país tem paisagens variadas, dunas, encontro de rios com o mar, falésias, piscinas naturais e maravilhosos pontos para mergulho, ricos em vida marinha.',
    ],
    imagem: {
      src: 'praiajujutsu.jpg',
      alt: 'Praias do Nordeste',
      caption: 'Praias do Nordeste',
    },
  }

  const sidebarData = {
    destaques: [
      { label: 'Dicas de Viagem', href: '#' },
      { label: 'Melhores Épocas', href: '#' },
      { label: 'O que levar na mala', href: '#' },
    ],
    topPosts: [
      { label: 'Fernando de Noronha', href: '#' },
      { label: 'Porto de Galinhas', href: '#' },
      { label: 'Jericoacoara', href: '#' },
    ],
  }

  return (
    <div className="layout">
      <Header titulo="Meu blog de viagens">
        <Navigation links={navLinks} />
      </Header>

      <main className="main">
        <Article
          titulo={postData.titulo}
          autor={postData.autor}
          data={postData.data}
          dataFormatada={postData.dataFormatada}
          conteudo={postData.conteudo}
          imagem={postData.imagem}
        />
      </main>

      <Sidebar
        destaques={sidebarData.destaques}
        topPosts={sidebarData.topPosts}
      />

      <Footer ano="2026" />
    </div>
  )
}

export default App
