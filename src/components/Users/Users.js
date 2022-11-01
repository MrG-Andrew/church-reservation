import { Button, Modal, Space, Table } from 'antd'
import React from 'react'

function Users({open, onCancel}) {

  const columns = [
    {
      title:'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title:'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title:'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title:'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title:'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    }]

  const data = [
    {
      key: 1,
      username: 'andrew',
      phone: 2112323,
      email: 'sasdf@sdfa.com',
      password: 1232132,
    },
    {
      key: 2,
      username: 'andrew',
      phone: 2112323,
      email: 'sasdf@sdfa.com',
      password: 1232132,
    },
    {
      key: 3,
      username: 'andrew',
      phone: 2112323,
      email: 'sasdf@sdfa.com',
      password: 1232132,
    },
    {
      key: 4,
      username: 'andrew',
      phone: 2112323,
      email: 'sasdf@sdfa.com',
      password: 1232132,
    },
    {
      key: 5,
      username: 'andrew',
      phone: 2112323,
      email: 'sasdf@sdfa.com',
      password: 1232132,
    }]

  return (
    <Modal
      title="Users"
      open={open}
      //in footer add {add user btn}
      footer={[
        <Button key="back" type="primary" onClick={onCancel}>
          Return
        </Button>
      ]}
    >
      <Table
        columns={columns}
        dataSource={data}
      />
    </Modal>
  )
}

export default Users