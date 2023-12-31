import React from 'react'
import { AntdDropdown, MenuButton } from './styled'
import {
  ExportOutlined,
  DeleteOutlined,
  CheckCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons'
import {
  GlobalOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { CiDark } from 'react-icons/ci'
import { Avatar, Button } from 'antd'
import TextWithIcon from '../TextWithIcon'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function DropDown ({ header }) {
  const items = !header
    ? [
        {
          key: 1,
          label: (
            <a href='/user'>
              <TextWithIcon
                text={'View'}
                icon={<ExportOutlined />}
                color={'#74829C'}
              />
            </a>
          )
        },
        {
          key: 2,
          label: (
            <TextWithIcon
              text={'Delete'}
              icon={<DeleteOutlined />}
              color={'#E94E51'}
            />
          )
        },
        {
          key: 3,
          label: (
            <TextWithIcon
              text={'Verify'}
              icon={<CheckCircleFilled />}
              color={'#01AB3B'}
            />
          )
        },
        {
          key: 4,
          label: (
            <TextWithIcon
              text={'Not Verified'}
              icon={<CloseCircleFilled />}
              color={'#E94E51'}
            />
          )
        }
      ]
    : [
        {
          key: 1,
          label: (
            <a href='/user'>
              <TextWithIcon
                text={'English'}
                icon={<GlobalOutlined />}
                color={'#74829C'}
              />
            </a>
          )
        },
        {
          key: 2,
          label: (
            <TextWithIcon text={'Theme'} icon={<CiDark />} color={'#E94E51'} />
          )
        },
        {
          key: 3,
          label: (
            <TextWithIcon
              text={'Settings'}
              icon={<SettingOutlined />}
              color={'#01AB3B'}
            />
          )
        }
      ]
  return (
    <AntdDropdown menu={{ items }} placement='bottomRight'>
      <MenuButton header = {header}>
        {header ? (
          <Avatar size='middle' icon={<UserOutlined />} />
        ) : (
          <BsThreeDotsVertical size={'1rem'} />
        )}
      </MenuButton>
    </AntdDropdown>
  )
}
