import Title from '../../components/Title'
import CardProjeto from '../../components/CardProjeto'
import Lista from './styles'
import Projetos from '../../models/Projetos'

type Props = {
  projetos: Projetos[]
}

const ListaProjetos = ({ projetos }: Props) => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      {projetos.map((projeto) => (
        <CardProjeto
          key={projeto.id}
          title={projeto.title}
          description={projeto.description}
          vercel={projeto.vercel}
          github={projeto.github}
        />
      ))}
    </Lista>
  </section>
)

export default ListaProjetos
