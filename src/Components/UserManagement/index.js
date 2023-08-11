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

export default function UserManagementComponent ({ dataSource }) {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      fixed: 'left'
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left'
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
      fixed: 'left',
      render: (__, { email }) => {
        return (
          <div>
            <u>{email}</u>
          </div>
        )
      }
    },
    {
      title: 'PHONE NUMBER',
      dataIndex: 'phone',
      key: 'phone',
      fixed: 'left'
    },
    {
      title: 'LISENCED',
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
      title: 'SNAPCHAT',
      dataIndex: 'snapChat',
      key: 'snapChat',
      fixed: 'left'
    },
    {
      title: 'INSTAGRAM',
      dataIndex: 'instagram',
      key: 'instagram',
      fixed: 'left'
    },
    {
      title: 'TIKTOK',
      dataIndex: 'tiktok',
      key: 'tiktok',
      fixed: 'left'
    },
    {
      title: 'STATUS',
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
      render: (__, { status }) => {
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
          columns={columns}
          dataSource={dataSource}
          style={{ border: 'none' }}
          pagination={false}
          scroll={{ x: 1200 }}
        />
        </TableContainer>
      </CardBody>
      <CardFooter>
      <Pagination/>
      </CardFooter>
    </MainContainer>
  )
}
