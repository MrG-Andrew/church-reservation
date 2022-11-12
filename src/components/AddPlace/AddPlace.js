import React,{useState} from 'react'
import { Form, Input, Modal, Image, Checkbox, Select, TimePicker } from 'antd';
import styles from './AddPlace.module.css'


const { Option } = Select;

function AddPlace({ open, onCreate, onCancel, setPlaceData, placeData }) {

  const [form] = Form.useForm();
  // const handleChange = (name, value)=>{
  //   setPlaceData(prev=>({...prev, [name]:value}))
  // }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64);
    setPlaceData(prev=>{
      return{
        ...prev,
        pictureInForm:URL.createObjectURL(file), 
        pictureInContent:base64
    }})
  };

  return (
    <Modal
        open={open}
        title="Add Location"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        // onOk={() => {
        //   form
        //     .validateFields()
        //     .then((values) => {
        //       form.resetFields();
        //       onCreate(values);
        //     })
        //     .catch((info) => {
        //       console.log('Validate Failed:', info);
        //     });
        // }}
        onOk={values=>onCreate(values)}
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
            // name="photo"
            label="Image"
          >

            <label htmlFor="upload-photo" className={styles.labelForInput}>
              <img
              src={placeData.pictureInForm}
              alt='place'
              className={styles.image}
              />
            </label>
            <input
              required
              className={styles.uploadPhotoInput}
              type="file" 
              name="photo"
              accept=".png, .jpg, .jpeg"
              id="upload-photo"
              onChange={e=>uploadImage(e)}
            />
            
          </Form.Item>

          <Form.Item 
            name="name" 
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input the Name of the location!',
              },
            ]}
            >
            <Input defaultValue={placeData.name} type="textarea" onBlur={e=>setPlaceData(prev=>{
              return{
                ...prev,
                name : e.target.value
            }})}
            />
          </Form.Item>

          <Form.Item 
            name="rank" 
            label="Rank"
            rules={[
              {
                required: true,
                message: 'Please input the Rank of the location!',
              },
            ]}
            >
            <Select defaultActiveFirstOption={true} type="textarea" onBlur={e=>setPlaceData(prev=>{
              return{
                ...prev,
                rank : e
            }})}
            >
              <Option value={0}>0</Option>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
            </Select>
          </Form.Item>

          <Form.Item 
            name="capacity" 
            label="Capacity"
            rules={[
              {
                required: true,
                message: 'Please input the Capacity of the location!',
              },
            ]}
            >
            <Input defaultValue={placeData.capacity} type="textarea" onBlur={e=>setPlaceData(prev=>{
              return{
                ...prev,
                capacity : e.target.value
            }})}
            />
          </Form.Item>

          <Form.Item 
            name="defaultSchedule" 
            label="Default Schedule"
            rules={[
              {
                required: true,
                message: 'Please input the Default Schedule of the location!',
              },
            ]}
            >
            <TimePicker.RangePicker
              use12Hours
              onChange={e=>console.log(e)}
              bordered={false}
            />
          </Form.Item>

          <Form.Item 
            name="closedOn" 
            label="Closed on"
            rules={[
              {
                required: true,
                message: 'Please input the Closed on days of the location!',
              },
            ]}
            >
            <Select defaultActiveFirstOption={true} type="textarea" onBlur={e=>setPlaceData(prev=>{
              return{
                ...prev,
                rank : e
            }})}
            >
              <Option value='DefaultEvents'>Default Events</Option>
              <Option value='CustomEvents'>Custom Events</Option>
            </Select>
          </Form.Item>

          <Form.Item 
            name="needApproval" 
            label="Needs Approval"
            >
            <Checkbox defaultValue={placeData.needApproval} onClick={e=>setPlaceData(prev=>{
              return{
                ...prev,
                needApproval : e.target.checked
            }})}
            />
          </Form.Item>

          <Form.Item 
            name="hasAC" 
            label="Has AC"
            >
            <Checkbox defaultValue={placeData.hasAC} onClick={e=>setPlaceData(prev=>{
              return{
                ...prev,
                hasAC : e.target.checked
            }})}
            />
          </Form.Item>

          <Form.Item 
            name="additionalInfo" 
            label="additionalInfo"
            >
            <Input defaultValue={placeData.additionalInfo} type="textarea" onBlur={e=>setPlaceData(prev=>{
              return{
                ...prev,
                additionalInfo : e.target.value
            }})}
            />
          </Form.Item>
      
        </Form>
      </Modal>
  )
}

export default AddPlace