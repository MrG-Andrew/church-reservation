import React from 'react'
import styles from './Notifications.module.css'
import { Form, Modal, Input } from 'antd';

function Notifications({open, onCancel, onCreate}) {
    const [form] = Form.useForm();

    return (
      <Modal
          title="Notifications"  
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

export default Notifications