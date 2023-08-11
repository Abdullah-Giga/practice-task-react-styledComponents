import { styled } from 'styled-components'
import SecondaryButton from '../../Buttons/SecondaryButton'

export const CardContainer = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 7px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-ites: center;
  padding: 1rem 0;
`

export const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`

export const Divider = styled.div`
  border-top: 1px solid #e9edf4;
`

export const Heading = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 1rem 0;
`

export const TextBox = styled.div`
  font-size: 14px;
`
export const InviteContainer = styled.div`
  display: flex;
  padding: 1rem 0;
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`
