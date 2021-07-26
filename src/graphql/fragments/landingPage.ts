import { gql } from 'graphql-request'

export const DATA_IMAGE = gql`
  fragment imageData on UploadFile {
    alternativeText
    url
  }
`
