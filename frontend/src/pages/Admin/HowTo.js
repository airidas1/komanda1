import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styles from './AdminPanel.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import LOGO from "../../assets/images/logo.png";



function HowTo() {
    const [passwordModal, setPasswordModal] = useState(false)
    const [redirect, setRedirect] = useState(null)
    const [show, setShow] = useState(true)


    useEffect(() => {
        axios
        .get("http://localhost:3001/v1/currentAdmin", {
          headers: {
            "admin-id": localStorage.getItem("admin-id"),
          },
        })
        .then((res) => {})
        .catch((e) => {
          setRedirect("/v1/admin/login");
        });
    }, [])

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

    if(redirect) {
        return <Redirect to = {redirect} />
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
                        <Link to='/v1/admin/howto' className={`${styles['header-btn']} ${styles['Link']}`}>How To</Link>
                      </li>
                      <li>
                        <Link to='/v1/admin/panel' className={`${styles['header-btn']} ${styles['Link']}`}>Panelė</Link>
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
            <main className={styles.faq}>
                <div className={styles.container}>
                    <h1>Bendra informacija apie DB užklausas</h1>
                    <div className={styles.questions}>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/getAllData
                            </p>
                            <h3>Kreipimosi tipas: get</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/update
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*
                            </p>
                            <h3>Kreipimosi tipas: post</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/logout
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*
                            </p>
                            <h3>Kreipimosi tipas: get</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/login
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*, bei prisijungimo duomenis username: *prisijungimas*, password: *slaptazodis*
                            </p>
                            <h3>Kreipimosi tipas: post</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/registerAdmin
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*, bei prisijungimo duomenis username: *prisijungimas*, password: *slaptazodis*
                            </p>
                            <h3>Kreipimosi tipas: post</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/all
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*
                            </p>
                            <h3>Kreipimosi tipas: get</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/admin/currentAdmin
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*
                            </p>
                            <h3>Kreipimosi tipas: get</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/dataUpdate
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*, bei nurodyti informaciją kurią norite atnaujinti: pvž: atnaujinant savivaldybę reikėtų nurodyti: Savivaldybė: *Jūsų reikšmė*
                            </p>
                            <h3>Galimos vertės pakeisti: </h3>
                            <ul>
                                <li>Savivaldybė</li>
                                <li>Grupė</li>
                                <li>Pagrindinis tipas</li>
                                <li>Pavadinimas</li>
                                <li>Telefonas</li>
                                <li>Teisinė forma</li>
                            </ul>
                            <h3>Kreipimosi tipas: post</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/dataPost
                                Reikia nurodyti atpažinimo kodą: admin-id: *atpažinimo kodas*, bei nurodyti informaciją kurią norite atnaujinti: pvž: atnaujinant savivaldybę reikėtų nurodyti: Savivaldybė: *Jūsų reikšmė*
                            </p>
                            <h3>Privalomos vertės įrašyti: </h3>
                            <ul>
                                <li>Savivaldybė</li>
                                <li>Grupė</li>
                                <li>Pagrindinis tipas</li>
                                <li>Pavadinimas</li>
                                <li>Telefonas</li>
                                <li>Teisinė forma</li>
                            </ul>
                            <h3>Kreipimosi tipas: post</h3>
                        </div>
                        <div className={styles['list-item-doc']}>
                            <p>
                                Kreiptis adresu: http://localhost:3001/v1/data
                                Reikia nurodyti įstaigos _id vertę
                            </p>
                            <h3>Kreipimosi tipas: delete</h3>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HowTo
