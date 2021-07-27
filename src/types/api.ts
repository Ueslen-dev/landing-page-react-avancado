export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: LogoProps
}

export type sectionAboutProject = {
  title: string
  description: string
  image: LogoProps
}

export type sectionTech = {
  title: string
  techIcons: [
    {
      id: number
      title: string
      icon: { name: string; url: string }
    }
  ]
}

export type sectionConcepts = {
  title: string
  concepts: [
    {
      id: string
      title: string
    }
  ]
}

export type sectionModules = {
  title: string
  modules: [
    {
      id: string
      title: string
      description: string
    }
  ]
}

export type sectionAgenda = {
  title: string
  description: string
}
export type landingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProject
  sectionTech: sectionTech
  sectionConcepts: sectionConcepts
  sectionModules: sectionModules
  sectionAgenda: sectionAgenda
}
