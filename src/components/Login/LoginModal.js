import { Modal, Form, Input, Checkbox, Button } from 'antd'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styles from './LoginModal.module.css'

function LoginModal({open, setOpenLogin}) {
  return (
    
    <Modal
      open={open}
      keyboard={false}
      maskClosable={false}
      closable={false}
      footer={null}
    >
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={()=>console.log('done')}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
        <Form.Item name="remember" valuePropName="checked" className={styles.formItemRemember}>
          <Checkbox className={styles.rememberMe}>Remember me</Checkbox>
          <a className={`login-form-forgot ${styles.forgetPass}`} href="/">
            Forgot password
          </a>
        </Form.Item>


      <Form.Item className={styles.formItemBtn}>
        <Button type="primary" htmlType="submit" className="login-form-button" block onClick={()=>setOpenLogin(false)}>
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
    </Modal>

  )
}

export default LoginModal