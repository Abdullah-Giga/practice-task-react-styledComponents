import React from 'react'
import { SecondaryBtn } from './styles'

export default function SecondaryButton ({ text, icon }) {
  return (
    <SecondaryBtn type='secondary'>
      {icon}
      {text}
    </SecondaryBtn>
  )
}
