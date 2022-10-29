import { Modal, Form, Input } from 'antd'
import React from 'react'
import styles from './AddUser.module.css'

function AddUser({open, onCancel, onCreate}) {

    const [form] = Form.useForm();

  return (
    <Modal
        title="Add User"
        open={open}
        onCancel={onCancel}
        onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
    >
        <Form
            form={form}
            layout='vertical'
        >

            <Form.Item
                name="title"
                label="Title"
                rules={[
                {
                    required: true,
                    message: 'Please input the title of collection!',
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
                <Input type="textarea" />
            </Form.Item>

        </Form>
    </Modal>
  )
}

export default AddUser