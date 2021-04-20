import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './AdminPanel.module.css'
import LOGO from '../../assets/images/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function AdminPanel() {
    library.add(fas, far)
    const [redirect, setRedirect] = useState(null)
    const [page, setPage] = useState(1)
    const [fetchData, setFetchData] = useState([])
    const [amount, setAmount] = useState(null)

    const pageHandler = (action) => {
        let situation = {
            'inc': () => {
                window.scrollTo(0,0)
                return page > (Math.ceil(amount/20)) ? null : setPage(prevPage => prevPage + 1)
            },
            'dec': () => {
                window.scrollTo(0,0)
                return page <= 1 ? null : setPage(prevPage => prevPage - 1)
            }
        }
        return situation[action]()
    }

    const pageInputHandler = (e) => {
        if(e.key === 'Enter') {
            if((+e.target.value >= 1) && (e.target.value <= (Math.ceil(amount/20))) ) {
                window.scrollTo(0,0)
                return setPage(+e.target.value)
            }
            
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/v1/currentAdmin', {
            headers: {
                'admin-id': localStorage.getItem('admin-id')
            }
        }).then(res => {
        }).catch(e => {
            setRedirect('/v1/admin/login')
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3001/v1/data?page=${page}`).then(res => {
            setFetchData(res.data)
        })
    },[page])

    useEffect(() => {
        axios.get(`http://localhost:3001/v1/getAllData`).then(res => {
            setAmount(res.data.length)
        })
    },[])

    if(redirect) {
        return <Redirect to = {redirect} />
    }
    return (
        <>
            <header className = {styles.header}>
                <ul>
                    <li>
                        <p>Pridėti įrašą</p>
                    </li>
                </ul>
            </header>
            <main className={styles.main}>
                <div className={styles['add-post']}>
                    <div className={styles['fontawesome-wrapper']}>
                        <FontAwesomeIcon className={styles['fontawesome-plus']} icon={['fas', 'plus']} size='2x'/>
                    </div>
                </div>
                 <div className={styles['output-list']}>
                    {fetchData.map(el => {
                        return<div key = {el._id} className={styles['output-item']}>
                            {Object.entries(el).map(([key, value]) => {
                                return <div className={styles['output-pair']}>
                                    <h4 className={styles.h4}>{key}: </h4><h5 className={styles.h5}> { value}</h5>
                                </div>
                            })}
                        </div>
                    })}
                </div>
                <div className={styles.pagination}>
                    <button onClick={() => pageHandler('dec')} className={styles['pagination-button']}>Prev</button>
                    <div className={styles['input-pagination']}><h5><input className={styles['input-txt']} type='number' placeholder={page} onKeyDown={pageInputHandler} />/{Math.ceil(amount/20)}</h5></div>
                    <button onClick={() => pageHandler('inc')} className={styles['pagination-button']}>Next</button>
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default AdminPanel
