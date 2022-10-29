import React,{useState} from 'react'
import { Input, Modal } from 'antd';
import styles from './Landing.module.css'
import {PlusCircleOutlined, 
        MinusCircleOutlined, 
        BellOutlined, 
        PlusOutlined, 
        UserOutlined } from '@ant-design/icons';
import AddPlace from '../AddPlace/AddPlace';
import 'antd/dist/antd.css';
import LoginModal from '../Login/LoginModal';
import Notifications from '../Notifications/Notifications';
import AddUser from '../AddUser/AddUser';


const {Search} = Input

function Landing() {

    const [content, setContent] = useState(0)
    const [openAddPlace, setOpenAddPlace] = useState(false)
    const [openLogin, setOpenLogin] = useState(true)
    const [showAddUserModal, setShowAddUserModal] = useState(false)
    const [showNotificationsModal, setShowNotificationsModal] = useState(false)

    const onCreate = (values) => {
        setOpenAddPlace(false);
        setContent(prev=>prev+1)
    }

    const onCancelAddPlace = ()=>{
        setOpenAddPlace(false)
    }

    const plusBtn = ()=>{
        setOpenAddPlace(!openAddPlace)
    }

    const addUser = ()=>{
        setShowAddUserModal(!showAddUserModal)
    }

    const notificationBell = ()=>{
        setShowNotificationsModal(!showNotificationsModal)
    }

    const showUsers = ()=>{

    }

  return (
    <div className={styles.landingContainer}>
        <div className={styles.iconsContainer}>
            
            <i className={styles.pointerHover} onClick={()=>addUser()}>
                <PlusOutlined className={styles.addIcon}/>
            </i>

            <i className={styles.pointerHover} onClick={()=>notificationBell()}>
                <BellOutlined  className={styles.bellIcon}/>
            </i>
            {/* need to set the users icon on flex start or to the left */}
            <i className={styles.pointerHover} onClick={()=>showUsers()}>
                <UserOutlined  className={styles.usersIcon}/>
            </i>
        </div>
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
        <AddPlace 
            open={openAddPlace} 
            onCreate={onCreate} 
            onCancel={()=>onCancelAddPlace()}
        />
        <LoginModal 
            open={openLogin} 
            setOpenLogin={setOpenLogin}/>
        <Notifications 
            open={showNotificationsModal} 
            onCancel={()=>setShowNotificationsModal(false)} 
            onCreate={()=>setShowNotificationsModal(false)} 
        />
        <AddUser 
            open={showAddUserModal} 
            onCancel={()=>setShowAddUserModal(false)} 
            onCreate={()=>setShowAddUserModal(false)}
        />
    </div>
  )
}

export default Landing