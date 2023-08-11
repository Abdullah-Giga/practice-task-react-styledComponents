import React from 'react'
import { Container, IconWrapper } from './styles'


export default function TextWithIcon({text, color, icon}) {
  return (
    <Container>
    <IconWrapper color= {color}>{icon}</IconWrapper>
    {text}
    </Container>
  )
}
