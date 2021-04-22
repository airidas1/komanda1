import React from 'react';
import { Collapse } from 'antd';
import styles from './FAQ.module.css'


const { Panel } = Collapse;

function FAQ() {

    return (
        <main className={styles.faq}>
            <div className={styles.container}>
                <h1>Dažniausiai užduodami klausimai</h1>
                <div className={styles.questions}>
                    <Collapse defaultActiveKey={['1']} className={styles.question}>
                        <Panel header="Klausimas 1" key="1" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 2" key="2" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 3" key="3" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 4" key="4" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 5" key="5" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 6" key="6" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 7" key="7" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 8" key="8" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                        <Panel header="Klausimas 9" key="9" className={styles.question_item}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  has been the industry's standard dummy text esince the 1500s Lorem Ipsum has been the
                        Lorem Ipsum is simply dummy text of the printing and typesetting has been the
                        Lorem Ipsum is simply dummy text of the printing and.</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </main>
    )
}

export default FAQ
