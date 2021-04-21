import React from 'react';
import './Carrer.css'

function Carrer() {
    return (
        <main className='carrer'>
            <div className='container'>
                <h1>Parašykite mums</h1>

                <form>
                    <div className='form-control'>
                        <label>Name</label>
                        <input type='text'></input>
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='email'></input>
                    </div>
                    <div className='form-control'>
                        <label>Message</label>
                        <textarea type='message' id='message' cols='30' rows='5'></textarea>
                    </div>
                    <button>Pateikti</button>
                </form>

            </div>
        </main>
    )
}

export default Carrer
