import React from 'react'
import { AntPagination } from './styles'

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Prev</a>
  }
  if (type === 'next') {
    return <a>Next</a>
  }
  return originalElement
}

export default function Pagination () {
  return (
    <AntPagination defaultCurrent={1} total={50} itemRender={itemRender} />
  )
}
{
  /* <Pagination defaultCurrent={1} total={50} /> */
}
