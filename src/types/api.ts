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

export type landingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProject
  sectionTech: sectionTech
}
