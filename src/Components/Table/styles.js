import { styled } from 'styled-components'
import { Table } from 'antd'

export const AntTable = styled(Table)`
  .ant-table {
    border-radius: 0px !important;
  }
  .ant-table-container {
    border-radius: 0px !important;
  }
  .ant-table-content > table {
    border-radius: 0px !important;
  }

  .ant-table-cell,
  .ant-table-cell-fix-left {
    background-color: white !important;
    border-radius: 0px !important;
    font-size: 14px;
    font-weight: 500;
  }
  thead tr th {
    border-top: 1px solid #f0f0f0; // Add your desired border style here

    &::before {
      display: none; // Remove the ::before pseudo-element
    }
  }
  .ant-table-tbody > tr > td {
    border: none !important;
  }
`
