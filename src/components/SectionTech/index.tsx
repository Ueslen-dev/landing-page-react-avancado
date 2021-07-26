import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import { sectionTech } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

const SectionTech = ({ title, techIcons }: sectionTech) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ id, title, icon }) => (
          <S.Icon key={id}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.name}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
