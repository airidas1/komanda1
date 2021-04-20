import React, {useRef} from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import './FAQ.css'

function FAQ() {
    const answer = useRef();

    function showAnswer() {
        answer.current.classList.toggle('hide');
    }

    return (
        <main className='faq'>
            <div className='container'>
                <h1>Dažniausiai užduodami klausimai</h1>
                <div className='questions'>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    <div className='question'>
                        <button className='question-btn' onClick={showAnswer}>Klausimas Nr. 1<span><AiFillCaretDown/></span></button>
                        <div className='question-text hide' ref={answer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        industry. Lorem Ipsum has been the industry's standard dummy text ever printing and typesetting Lorem Ipsum has been the industry's standard dummy text ever</div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default FAQ
