import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import ListaProjetos from './containers/ListaProjeto'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import Projetos from './models/Projetos'

const projetos: Projetos[] = [
  {
    id: 1,
    title: 'E-Food',
    description: 'Aplicação web construída com ReactJs',
    vercel: 'https://efood-eight-gamma.vercel.app',
    github: 'https://github.com/hendrickm97/efood'
  },
  {
    id: 2,
    title: 'Twitter_X_Clone',
    description: 'Aplicação web construída com Django',
    vercel: 'http://henks97.pythonanywhere.com',
    github: 'https://github.com/hendrickm97/twitter_X_clone'
  },
  {
    id: 3,
    title: 'EPLAY',
    description:
      'Aplicação web construída com ReactJs, onde temos uma loja de jogos eletrônicos',
    vercel: 'https://e-play-psi.vercel.app',
    github: 'https://github.com/hendrickm97/e-play'
  },
  {
    id: 4,
    title: 'Bookstore',
    description: 'Aplicação web construída com Django',
    vercel: 'https://github.com/hendrickm97/bookstore',
    github: 'https://github.com/hendrickm97/bookstore'
  },
  {
    id: 5,
    title: 'Assitente Virtual',
    description:
      'Assistente virtual criada com python que atende a comando de voz e por texto. ',
    vercel: 'https://github.com/hendrickm97/assistente_virtual',
    github: 'https://github.com/hendrickm97/assistente_virtual'
  },
  {
    id: 6,
    title: 'Lista de Tarefas',
    description:
      'Aplicação web construída com ReactJs, onde temos uma tasklist',
    vercel: 'https://minhas-tarefas-bice.vercel.app',
    github: 'https://github.com/hendrickm97/minhas-tarefas'
  },
  {
    id: 7,
    title: 'Gerenciador de Senhas',
    description:
      'Aplicação Python criada para criar, atualizar, deletar e salvar em arquivo txt senhas seguras.',
    vercel: 'https://github.com/hendrickm97/gerenciador_de_senha',
    github: 'https://github.com/hendrickm97/gerenciador_de_senha'
  },
  {
    id: 10,
    title: 'Lista de Contatos',
    description:
      'Aplicação web construída com ReactJs, onde temos uma lista com telefone e email para cirar uma agenda de contatos',
    vercel: 'https://agenda-de-contatos-sandy-ten.vercel.app',
    github: 'https://github.com/hendrickm97/agenda_de_contatos'
  },
  {
    id: 8,
    title: 'EBAC Sports',
    description:
      'Aplicação web construída com ReactJs, onde temos uma loja esportiva',
    vercel: 'https://ebac-sports-livid.vercel.app',
    github: 'https://github.com/hendrickm97/ebac_sports'
  },
  {
    id: 9,
    title: 'PetShop',
    description:
      'Aplicação web construída com Bootstrap, onde temos uma loja que vende produtos e serviços para pets.',
    vercel: 'https://petshot-bootstrap.vercel.app',
    github: 'https://github.com/hendrickm97/petshot-bootstrap'
  },
  {
    id: 13,
    title: 'Calculadora',
    description:
      'Aplicação web construída com JavaScript, onde temos uma calculadora.',
    vercel: 'https://calculadora-chi-five.vercel.app',
    github: 'https://github.com/hendrickm97/calculadora'
  },
  {
    id: 14,
    title: 'Jogo da Velha',
    description:
      'Aplicação web construída com JavaScript, onde temos um jogo da velha.',
    vercel: 'https://jogo-da-velha-seven-chi.vercel.app',
    github: 'https://github.com/hendrickm97/jogo-da-velha'
  },
  {
    id: 11,
    title: 'Buscador de CEP',
    description:
      'Aplicação web construída com ReactJs, onde temos um input para inserirmos um cep e recebemos de volta as informações relacionadas aquele cep.',
    vercel: 'https://buscador-cep-six.vercel.app',
    github: 'https://github.com/hendrickm97/buscadorCep'
  },
  {
    id: 12,
    title: 'Agenda Telefônica',
    description:
      'Aplicação web construída com JavaScript, onde temos uma lista telefônica dinâmica.',
    vercel: 'https://listatelefonica-modulo8.vercel.app',
    github: 'https://github.com/hendrickm97/listatelefonica_modulo8'
  }
]

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <ListaProjetos projetos={projetos} />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
