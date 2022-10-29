import React,{useState} from 'react'
import { Input, Modal } from 'antd';
import styles from './Landing.module.css'
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import AddPlace from '../AddPlace/AddPlace';
import 'antd/dist/antd.css';
import LoginModal from '../Login/LoginModal';


const {Search} = Input

function Landing() {

    const [content, setContent] = useState(0)
    const [openAddPlace, setOpenAddPlace] = useState(false)
    const [openLogin, setOpenLogin] = useState(true)

    const onCreate = (values) => {
        console.log(values);
        setOpenAddPlace(false);
        setContent(prev=>prev+1)
    }

    const onCancelAddPlace = ()=>{
        setOpenAddPlace(false)
    }

    const plusBtn = ()=>{
        // setContent(prev=>prev+1)
        // console.log(openAddPlace);
        setOpenAddPlace(!openAddPlace)
    }

  return (
    <div className={styles.landingContainer}>
        <Search
            placeholder="input search text"
            size="large"
            className={styles.searchBox}
        />
        <div className={styles.locationsContainer}>
            <div className={styles.card}>
                <i className={styles.pointerHover} onClick={()=>plusBtn()}>
                    <PlusCircleOutlined className={styles.plusIcon}/>
                </i>
            </div>
            {Array.from(Array(Number(content)).keys()).map((child, index) => (
                <div key={index} className={styles.card}>
                    <i className={styles.pointerHover} onClick={()=>setContent(prev=>prev-1)}>
                        <MinusCircleOutlined  className={styles.minusIcon}/>
                    </i>
                </div>
            ))}
        </div>
        <AddPlace open={openAddPlace} onCreate={onCreate} onCancel={()=>onCancelAddPlace()}/>
        <LoginModal open={openLogin} setOpenLogin={setOpenLogin}/>
    </div>
  )
}

export default Landing