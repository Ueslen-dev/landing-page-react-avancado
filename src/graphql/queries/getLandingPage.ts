import { gql } from 'graphql-request'
import { DATA_IMAGE } from 'graphql/fragments/landingPage'

const GET_LANDING_PAGE = gql`
  ${DATA_IMAGE}
  query GET_LANDINGPAGE {
    landingPage {
      logo {
        ...imageData
      }
      header {
        title
        description
        button {
          label
          url
        }
        image {
          ...imageData
        }
      }
      sectionAboutProject {
        title
        description
        image {
          ...imageData
        }
      }
      sectionTech {
        title
        techIcons {
          id
          title
          icon {
            name
            url
          }
        }
      }
    }
  }
`

export default GET_LANDING_PAGE
