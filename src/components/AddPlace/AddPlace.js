import React,{useState} from 'react'
import { Form, Input, Modal, Radio, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './AddPlace.module.css'

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

function AddPlace({ open, onCreate, onCancel, setPlaceData }) {

  const [form] = Form.useForm();
  // const handleChange = (name, value)=>{
  //   setPlaceData(prev=>({...prev, [name]:value}))
  // }

  const handleChange = (info)=>{
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  }

  const uploadButton = (
    <div>
      {/* need--> loading? <LoadingOutLined/>:<PlusOutLIned/>*/}
       <PlusOutlined />
      <div
        className={styles.uploadTextDiv}
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  return (
    <Modal
        open={open}
        title="Add Location"
        okText="Create"
        cancelText="Cancel"
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
          layout="vertical"
          name="form_in_modal"
          // initialValues={{
          //   modifier: 'public',
          // }}
        >
          <Form.Item
            name="title"
            label="Image"
            rules={[
              {
                required: true,
                message: 'Please input the Image of the location!',
              },
            ]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              //error in action
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: '100%',
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>

          <Form.Item name="name" label="Name">
            <Input type="textarea" />
          </Form.Item>
      
        </Form>
      </Modal>
  )
}

export default AddPlace