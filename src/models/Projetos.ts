class Projetos {
  id: number
  title: string
  description: string
  vercel: string
  github: string

  constructor(
    id: number,
    title: string,
    description: string,
    vercel: string,
    github: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.vercel = vercel
    this.github = github
  }
}

export default Projetos
