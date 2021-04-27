import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AdminPanel.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import LOGO from "../../assets/images/logo.png";


function HowTo() {
    const [passwordModal, setPasswordModal] = useState(false)
    const [passwordData, setPasswordData] = useState({})
    const [redirect, setRedirect] = useState(null)
    const [show, setShow] = useState(true)

    const logoutHandler = () => {
        axios.get('http://localhost:3001/v1/admin/logout', {
            headers: {
                'admin-id': localStorage.getItem('admin-id') 
            } 
        }).then(data => {
            localStorage.removeItem('admin-id')
            setRedirect('/v1/admin/login')
        })
    }
    return (
        <>
        <header className = {styles.header}>
            <div className={styles["header-container"]}>
            <ul className={`${styles['navbar']}`}>
                    <li className={styles['list-item']}>
                        <Link to={'/v1'}><img src={LOGO} alt='logo' className={styles.img}></img></Link>
                    </li>
                    <li>
                        <button className={styles['header-btn']} onClick = {logoutHandler}>Logout</button>
                    </li>
                    <li>
                    <Link to='/v1/admin/howto' className={styles['header-btn']}>How To</Link>
                    </li>
                    <li>
                        <button className={styles['header-btn']} onClick={() => {
                        setPasswordModal(!passwordModal)
                        setShow(!show)
                        }}>
                            <FontAwesomeIcon className={styles['fontawesome-icon']} icon={['fas', 'cog']} size='2x'/>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
        <main>
            
        </main>
        </>
    )
}

export default HowTo
