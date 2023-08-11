import { styled } from 'styled-components'

export const MainContainer = styled.div`
  background-color: white;
  border-radius: 7px;
  padding: 1rem;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #282f53;
`

export const LisenceDiv = styled.div`
  border-radius: 100px;
  padding: 5px 17px;
  width: 60px;
  text-align: center;
  ${props =>
    props.lisenced
      ? `background-color: #BDFED3; color: #01AB3B; border: 1px solid #01AB3B`
      : `background-color: #FFCECF; color: #E94E51; border: 1px solid #E94E51;`}
`
export const StatusDiv = styled.div`
  border-radius: 4px;
  padding: 5px 10px;
  width: 69px;
  text-align: center;
  color: white;

  ${props =>
    props.status === 'verified'
      ? `background-color: #01AB3B; `
      : `background-color: #FFAA46;`}
`

export const CardBody = styled.div`
  margin: 2rem 0;
`

export const TableContainer = styled.div` 
height: 30rem;
border-bottom: 1px solid #E9EDF4;
margin-bottom: 1rem;
`

export const CardFooter = styled.div``
