import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'
import { sectionConcepts } from 'types/api'

import * as S from './styles'

const SectionConcepts = ({ title, concepts }: sectionConcepts) => (
  <Container>
    <S.Box>
      <Heading lineBottom>{title}</Heading>
      <S.List>
        {concepts.map((concept) => (
          <S.Item key={concept.id}>{concept.title}</S.Item>
        ))}
      </S.List>
    </S.Box>
  </Container>
)

export default SectionConcepts
