import React from 'react'
import {
  MainContainer,
  CardHeader,
  CardTitle,
  CardBody,
  LisenceDiv,
  StatusDiv,
  TableContainer,
  CardFooter
} from './styles'
import PrimaryButton from '../Buttons/PrimaryButton'
import { AntTable } from '../Table/styles'
import DropDown from '../Dropdown'
import Pagination from '../Pagination'
import { Tooltip } from 'antd'

export default function UserManagementComponent ({ dataSource }) {
  const columns = [
    {
      title: (
        <Tooltip title='ID'>
          <span>ID</span>
        </Tooltip>
      ),
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
      render: (__, { id }) => (
        <Tooltip title={`ID: ${id}`}>
          <span>{id}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='NAME'>
          <span>NAME</span>
        </Tooltip>
      ),
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (__, { name }) => (
        <Tooltip title={`Name: ${name}`}>
          <span>{name}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='EMAIL'>
          <span>EMAIL</span>
        </Tooltip>
      ),
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      render: (__, { email }) => {
        return (
          <Tooltip title={email}>
            <u>{email}</u>
          </Tooltip>
        )
      }
    },
    {
      title: (
        <Tooltip title='PHONE NUMBER'>
          <span>PHONE NUMBER</span>
        </Tooltip>
      ),
      dataIndex: 'phone',
      key: 'phone',
      fixed: 'left',

      render: (__, { phone }) => (
        <Tooltip title={`phone number: ${phone}`}>
          <span>{phone}</span>
        </Tooltip>
      )
    },
    {
      title: (
        <Tooltip title='LISENCED'>
          <span>LISENCED</span>
        </Tooltip>
      ),
      dataIndex: 'lisenced',
      key: 'lisenced',
      fixed: 'left',

      render: (__, { lisenced }) => {
        return (
          <LisenceDiv lisenced={lisenced}>{lisenced ? 'Yes' : 'No'}</LisenceDiv>
        )
      }
    },
    {
      title: (
        <Tooltip title='SNAPCHAT'>
          <span>SNAPCHAT</span>
        </Tooltip>
      ),
      dataIndex: 'snapChat',
      key: 'snapChat',
      fixed: 'left'
    },
    {
      title: (
        <Tooltip title='INSTAGRAM'>
          <span>INSTAGRAM</span>
        </Tooltip>
      ),
      dataIndex: 'instagram',
      key: 'instagram',
      fixed: 'left',
      width: '1rem'
    },
    {
      title: (
        <Tooltip title='TIKTOK'>
          <span>TIKTOK</span>
        </Tooltip>
      ),
      dataIndex: 'tiktok',
      key: 'tiktok',
      fixed: 'left'
    },
    {
      title: (
        <Tooltip title='STATUS'>
          <span>STATUS</span>
        </Tooltip>
      ),
      dataIndex: 'status',
      key: 'status',
      fixed: 'left',

      render: (__, { status }) => {
        return (
          <StatusDiv status={status}>
            {status === 'verified' ? 'Verified' : 'Pending'}
          </StatusDiv>
        )
      }
    },
    {
      title: ' ',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'left',

      render: (__, {}) => {
        return <DropDown />
      }
    }
  ]
  return (
    <MainContainer>
      <CardHeader>
        <CardTitle>Waitlist Users</CardTitle>
        <PrimaryButton text={'Export Record'} />
      </CardHeader>
      <CardBody>
        <TableContainer>
          <AntTable
            className='antTable'
            size='middle'
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </TableContainer>
      </CardBody>
      <CardFooter>
        <Pagination />
      </CardFooter>
    </MainContainer>
  )
}
