import React,{useState} from 'react'
import { Input, Modal } from 'antd';
import styles from './Landing.module.css'
import {PlusCircleOutlined, MinusCircleOutlined} from '@ant-design/icons';
import AddPlace from '../AddPlace/AddPlace';
import 'antd/dist/antd.css';


const {Search} = Input

function Landing() {

    const [content, setContent] = useState(0)
    const [open, setOpen] = useState(false)
    const onCreate = () => {
        setOpen(false);
    }
    let modalContent;
    if(open){
        modalContent = <AddPlace open={open} onCreate={onCreate} onCancel={()=>setOpen(false)}/>
    }else{
        modalContent = null
    }

    const plusBtn = ()=>{
        setContent(prev=>prev+1)
        console.log(open);
        setOpen(!open)
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
        {modalContent}
    </div>
  )
}

export default Landing