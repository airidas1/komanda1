import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <main className='contact'>
            <div className='container'>
                <h1>Contact Us</h1>

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
                    <button>Submit</button>
                </form>

            </div>
        </main>
    )
}

export default Contact
