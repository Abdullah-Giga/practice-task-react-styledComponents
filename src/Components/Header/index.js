import React from 'react'
import { Container, SecButton } from './styles'
import {
  GlobalOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Avatar } from 'antd'
import { CiDark } from 'react-icons/ci'

export default function Header () {
  return (
    <Container>
      <SecButton>
        <GlobalOutlined />
        English
      </SecButton>
      <SecButton>
        <CiDark size={'1.3rem'} />
      </SecButton>
      <Avatar size='middle' icon={<UserOutlined />} />
      <SecButton>
        <SettingOutlined />
      </SecButton>
    </Container>
  )
}
