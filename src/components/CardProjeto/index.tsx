import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

type Props = {
  title: string
  description: string
  vercel: string
  github: string
}

const CardProjeto = ({ title, description, vercel, github }: Props) => (
  <Card>
    <Title>{title}</Title>
    <Paragrafo tipo="secundario">{description}</Paragrafo>
    <LinkBotao href={vercel}>Projeto</LinkBotao>
    <LinkBotao href={github}>Github</LinkBotao>
  </Card>
)

export default CardProjeto
