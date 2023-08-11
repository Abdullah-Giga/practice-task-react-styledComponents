import React from 'react'
import { AntdDropdown, MenuButton } from './styled'
import {
  ExportOutlined,
  DeleteOutlined,
  CheckCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons'
import { Button } from 'antd'
import TextWithIcon from '../TextWithIcon'
import {BsThreeDotsVertical} from 'react-icons/bs';

export default function DropDown () {
  const items = [
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
  return (
    <AntdDropdown menu={{ items }} placement='bottomRight'>
      <MenuButton>
        <BsThreeDotsVertical size={'1rem'}/>
      </MenuButton>
    </AntdDropdown>
  )
}
