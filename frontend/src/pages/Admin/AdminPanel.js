import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './AdminPanel.module.css'


function AdminPanel() {
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
            <main>
                 <div className={styles['output-list']}>
                    {fetchData.map(el => {
                        return<div key = {el._id} className={styles['output-item']}>
                            {Object.entries(el).map(([key, value]) => {
                                return <div className={styles['output-pair']}>
                                    <h4>{key}:</h4><h5>{value}</h5>
                                </div>
                            })}
                        </div>
                    })}
                </div>
                <div>
                    <button onClick={() => pageHandler('dec')}>Prev</button>
                    <div><h5><input type='number' placeholder={page} onKeyDown={pageInputHandler} />/{Math.ceil(amount/20)}</h5></div>
                    <button onClick={() => pageHandler('inc')}>Next</button>
                </div>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default AdminPanel
