import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
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
    /* VISA DATA */
    const [fetchAllData , setFetchAllData] = useState([])
    const [amount, setAmount] = useState(null)
    const [addPost, setAddPost] = useState(false)
    const [savivaldybes, setSavivaldybes] = useState([])
    const [grupe, setGrupe] = useState([])
    const [tipas, setTipas] = useState([])
    const [filtSub, setFiltSub] = useState({})
    const [doubleTrouble, setDoubleTrouble] = useState([])

    /* ATVAIZDUOT */
    const [displayData, setDisplayData] = useState([])

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
        
        axios.get(`http://localhost:3001/v1/getAllData`).then(res => {
            setSavivaldybes(Array.from(new Set(res.data.map(el => el['Savivaldybė']))))
            setGrupe(Array.from(new Set(res.data.map(el => el['Grupė']))))
            setTipas(Array.from(new Set(res.data.map(el => el['Pagrindinis tipas']))))
            setAmount(res.data.length)
            setFetchAllData(res.data)
        })
        
        /* axios.get(`http://localhost:3001/v1/data?page=${page}`).then(res => {
            setFetchData(res.data)
        }) */
        console.log('useeffect running')
    }, [])

    const handleFilterSubmit = (e) => {
       e.preventDefault()
        setDisplayData([])
        setDoubleTrouble(fetchAllData)
        /* userefas nuresetinimui */
        
        /* Patikrinimas ar ieskot pagal paieskos lauka arba filtrus */
        filtSub['Pavadinimas'] && (!filtSub['Grupė'] || !filtSub['Pagrindinis tipas'] || !filtSub['Savivaldybė']) ? setDisplayData(() => {

        /* Paieskos lauko filtras ir regexo sukurimas */
        let condition = new RegExp(filtSub['Pavadinimas'].toLowerCase())
        return doubleTrouble.filter(el => {
            return condition.test(el['Pavadinimas'].toLowerCase())
        })
        /* Filtravimas pagal kategorijas */
        }) : setDisplayData(() => {
            if(filtSub['Grupė'] && filtSub['Savivaldybė'] && filtSub['Pagrindinis tipas']) return false
            return  doubleTrouble.filter(el => {
                for(let key in filtSub) {
                    if(key === 'Pavadinimas') return true
                    if(el[key] === undefined || el[key] !== filtSub[key]) {
                        return false
                    }
                }
                return true
            })
        })
    }

    if(redirect) {
        return <Redirect to = {redirect} />
    }
    return (
        <>
        {displayData ? console.log(displayData) : console.log('tuscia')}
            <header className = {styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={LOGO} alt='logo'></img>
                    </div>
                    <nav className={styles.navbar}>
                        <ul className={styles.navbar_menu}>
                            <li>
                                <button className={styles.header_btn}>Logout</button>
                            </li>
                            <li>
                                <button className={styles.header_btn}>
                                    <FontAwesomeIcon className={styles['fontawesome-icon']} icon={['fas', 'cog']} size='2x'/>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={styles.admin}>
                {/* <div className={styles['post-modal']}>
                    <div className={styles['modal-container-background']}>

                    </div>
                    <div className={styles['modal-container']}>
                        <div>
                            <form>
                               
                            </form>
                        </div>
                    </div>
                </div> */}
                <div className={styles.container}>
                    <form className={styles.admin_form}>
                        <div className={styles.admin_form_wrapper}>
                            <div className={styles.form_control}>
                                <label className={styles.form_label} htmlFor="savivaldybe">Savivaldybe</label>
                                <input className={styles.form_input} type="text" list="data-sav" onChange={(e) => setFiltSub({...filtSub, 'Savivaldybė': e.target.value})} />
                                <datalist id="data-sav">
                                {savivaldybes ? savivaldybes.map((item, key) => {
                                    return <option key={key} value={item} />
                                }): null}
                                </datalist>
                            </div>
                            <div className={styles.form_control}>
                                <label className={styles.form_label} htmlFor="pavadinimas">Pavadinimas</label>
                                <input className={styles.form_input} type="text"  onChange={(e) => setFiltSub({...filtSub, 'Pavadinimas': e.target.value})} />
                            </div>
                            <div className={styles.form_control}>
                                <label className={styles.form_label} htmlFor="grupe">Grupe</label>
                                <input className={styles.form_input} type="text" list="data-gr" onChange={(e) => setFiltSub({...filtSub, 'Grupė': e.target.value})} />
                                <datalist id="data-gr">
                                {grupe ? grupe.map((item, key) => {
                                    return <option key={key} value={item} />
                                }): null}
                                </datalist>
                            </div>
                            <div className={styles.form_control}>
                                <label className={styles.form_label} htmlFor="tipas">Tipas</label>
                                <input className={styles.form_input} type="text" list="data-tipas"  onChange={(e) => setFiltSub({...filtSub, 'Pagrindinis tipas': e.target.value})} />
                                <datalist id="data-tipas">
                                {tipas ? tipas.map((item, key) => {
                                    return <option key={key} value={item} />
                                }): null}
                                </datalist>
                            </div>
                        </div>

                        <div className={styles.filter_container}>
                            <input className={styles.filter_submit} type="reset" value="Filtruoti" onClick={handleFilterSubmit}/>
                        </div>
                    </form>
                    <div className={styles.wrapper}>
                        <div className={styles.add_post}>
                            <div className={styles.fontawesome_wrapper}>
                                <FontAwesomeIcon className={styles['fontawesome-plus']} icon={['fas', 'plus']} size='2x'/>
                            </div>
                        </div>
                        <div className={styles.output_list}>
                            {displayData ? displayData.map(el => {
                                return<div key = {el._id} className={styles.output_item}>
                                    {Object.entries(el).map(([key, value]) => {
                                        return <div className={styles.output_pair}>
                                            <h4 className={styles.h4}>{key}: </h4><h5 className={styles.h5}> { value }</h5>
                                        </div>
                                    })}
                                    <div className={styles.button_div}>
                                        <button className={`${styles.button} ${styles.delete}`}>Ištrinti</button>
                                        <button className={`${styles.button} ${styles.update}`}>Atnaujinti</button>
                                    </div>
                                </div>
                            }) : fetchData.map(el => {
                                return<div key = {el._id} className={styles.output_item}>
                                    {Object.entries(el).map(([key, value]) => {
                                        return <div className={styles.output_pair}>
                                            <h4 className={styles.h4}>{key}: </h4><h5 className={styles.h5}> { value }</h5>
                                        </div>
                                    })}
                                    <div className={styles.button_div}>
                                        <button className={`${styles.button} ${styles.delete}`}>Ištrinti</button>
                                        <button className={`${styles.button} ${styles.update}`}>Atnaujinti</button>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className={styles.pagination}>
                            <button onClick={() => pageHandler('dec')} className={styles.pagination_button}><FontAwesomeIcon className={styles.fontawesome_icon} icon={['fas', 'chevron-left']} size='2x'/></button>
                            <div className={styles.input_pagination}><input className={styles.input_txt} type='number' placeholder={page} onKeyDown={pageInputHandler} /><h5 className={styles.pageCount}>/{Math.ceil(amount/20)}</h5></div>
                            <button onClick={() => pageHandler('inc')} className={styles.pagination_button}><FontAwesomeIcon className={styles.fontawesome_icon} icon={['fas', 'chevron-right']} size='2x'/></button>
                            
                        </div>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default AdminPanel
