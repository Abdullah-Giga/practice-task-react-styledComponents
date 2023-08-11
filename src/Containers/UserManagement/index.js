import React from 'react'
import UserManagementComponent from '../../Components/UserManagement'

export default function UserManagementContainer () {
  const data = [
    {
      id: 1,
      name: 'John Powell',
      email: 'abc@gmail.com',
      phone: 12345678910,
      lisenced: true,
      snapChat: 'User Name',
      instagram: 'User Name',
      tiktok: 'User Name',
      status: 'verified'
    },
    {
      id: 1,
      name: 'John Powell',
      email: 'abc@gmail.com',
      phone: 12345678910,
      lisenced: true,
      snapChat: 'User Name',
      instagram: 'User Name',
      tiktok: 'User Name',
      status: 'verified'
    },
    {
      id: 1,
      name: 'John Powell',
      email: 'abc@gmail.com',
      phone: 12345678910,
      lisenced: false,
      snapChat: 'User Name',
      instagram: 'User Name',
      tiktok: 'User Name',
      status: 'pending'
    },
    {
      id: 1,
      name: 'John Powell',
      email: 'abc@gmail.com',
      phone: 12345678910,
      lisenced: true,
      snapChat: 'User Name',
      instagram: 'User Name',
      tiktok: 'User Name',
      status: 'verified'
    }
  ]
  return <UserManagementComponent dataSource={data} />
}
