const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDINGPAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GET_LANDING_PAGE
