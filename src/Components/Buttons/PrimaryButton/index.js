import React from 'react'
import { PrimaryBtn } from './styles'


export default function PrimaryButton({icon, text}) {
  return (
    <PrimaryBtn type='primary'>
    {icon}
    {text}
    </PrimaryBtn>
  )
}
