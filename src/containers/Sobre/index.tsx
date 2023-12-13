import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragrafo tipo="principal">
      Sou um desenvolvedor Full Stack, comecei a minha jornada como programador
      em 2021. Entusiasta apaixonado por programação e por resoluções de
      problemas , sou um profissional dedicado e busco constantemente aprimorar
      minhas habilidades e aprender coisas novas. Possuo foco em desenvolvimento
      com javascript, reactjs, typescript, python, django, dentre outras
      tecnologias que uso para aumentar o valor das aplicações que eu crio. Sou
      uma pessoa muito pontual e esforçada, tenho facilidade em aprender, em me
      adaptar e em me comunicar.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=hendrickm97&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hendrickm97&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
