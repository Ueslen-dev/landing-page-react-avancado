import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'
import { sectionModules } from 'types/api'

import * as S from './styles'

const SectionModules = ({ title, modules }: sectionModules) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {modules.map(({ id, title, description }) => (
        <CardModule key={id} title={title}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
