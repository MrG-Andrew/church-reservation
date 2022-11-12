import React,{useState} from 'react'
import { Input, Modal } from 'antd';
import styles from './Landing.module.css'
import {PlusCircleOutlined, 
        MinusCircleOutlined, 
        BellOutlined, 
        PlusOutlined, 
        UserOutlined } from '@ant-design/icons';
import AddPlace from '../AddPlace/AddPlace';
import LoginModal from '../Login/LoginModal';
import Notifications from '../Notifications/Notifications';
import AddUser from '../AddUser/AddUser';
import Users from '../Users/Users';


const {Search} = Input

function Landing() {

    const defaultAdd = {
        pictureInForm:'addPlaceImage.png',
        pictureInContent:'addPlaceImage.png',
        name:'',
        rank:0,
        capacity:0,
        defaultSchedule:'',
        closedOn:'DefaultEvents',
        needApproval:false,
        hasAC:false,
        additionalInfo:''
    }

    const [content, setContent] = useState([])
    const [openAddPlace, setOpenAddPlace] = useState(false)
    const [openLogin, setOpenLogin] = useState(true)
    const [showAddUserModal, setShowAddUserModal] = useState(false)
    const [showNotificationsModal, setShowNotificationsModal] = useState(false)
    const [loginData, setLoginData] = useState({
        username:'',
        password:''
    })
    const [showUsers, setShowUsers] = useState(false)
    const [placeData, setPlaceData] = useState(defaultAdd)

    const onCreate = (values) => {
        setOpenAddPlace(false);
        console.log(values);
        setContent(prev=>prev.concat(placeData))
    }

    const onCancelAddPlace = ()=>{
        setOpenAddPlace(false)
    }

    const plusBtn = ()=>{
        setPlaceData(defaultAdd)
        setOpenAddPlace(!openAddPlace)
    }

    const addUser = ()=>{
        setShowAddUserModal(!showAddUserModal)
    }

    const notificationBell = ()=>{
        setShowNotificationsModal(!showNotificationsModal)
    }

    const showUsersTable = ()=>{
        setShowUsers(!showUsers)
    }

    const removeCardContent = (content)=>{
        console.log(content.length);
        // if(content.length === 1){

        // }else{
        //     setContent(prev=>prev.pop())
        // }
    }

  return (
    <div className={styles.landingContainer}>
        <div className={styles.iconsAndNameContainer}>
            <div className={styles.iconsContainer}>
                
                <i className={styles.pointerHover} onClick={()=>addUser()}>
                    <PlusOutlined className={styles.addIcon}/>
                </i>

                <i className={styles.pointerHover} onClick={()=>notificationBell()}>
                    <BellOutlined  className={styles.bellIcon}/>
                </i>

                <i className={styles.pointerHover} onClick={()=>showUsersTable()}>
                    <UserOutlined  className={styles.usersIcon}/>
                </i>
            </div>
            <div className={styles.usernamaContainer}>
                <span className={styles.name}>{loginData.username}</span>
            </div>
        </div>
        <Search
            placeholder="input search text"
            size="large"
            className={styles.searchBox}
            // enterButton={true}
            // loading={true}
        />
        <div className={styles.locationsContainer}>
            <div className={styles.card}>
                <i className={styles.pointerHover} onClick={()=>plusBtn()}>
                    <PlusCircleOutlined className={styles.plusIcon}/>
                </i>
                {/* <span>Add Location</span> need to align on bottom of the plus icon or bottom of card */} 
            </div>
            {/* {Array.from(Array(Number(content)).keys()).map((child, index) => (
                <div key={index} className={styles.card}>
                    <i className={styles.pointerHover} onClick={()=>setContent(prev=>prev-1)}>
                        <MinusCircleOutlined  className={styles.minusIcon}/>
                    </i>
                </div>
            ))} */}

            {content?.map((el,key)=>{return(
            <div className={styles.imageAndName}>
            <div key={key} >

                <img src={el.pictureInContent} alt='location pic' className={styles.imageCard}/>
                {/* <i className={styles.pointerHover} onClick={()=>removeCardContent(content)}>
                    <MinusCircleOutlined  className={styles.minusIcon}/>
                </i> */}
            </div>
            <span className={styles.locationName}>{el.name}</span>
            </div>)})}
            {console.log(content)}

        </div>
        <AddPlace 
            open={openAddPlace} 
            onCreate={onCreate} 
            onCancel={()=>onCancelAddPlace()}
            setPlaceData={setPlaceData}
            placeData={placeData}
        />
        <LoginModal 
            open={openLogin} 
            setOpenLogin={setOpenLogin}
            setLoginData={setLoginData}
        />
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
        <Users
            open={showUsers}
            onCancel={()=>setShowUsers(false)}
        />
    </div>
  )
}

export default Landing