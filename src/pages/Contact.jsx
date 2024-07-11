import React from 'react'
import Email from '../components/Email'

export default function Contact() {
    return (
        <>
            <main className="page-section">
                <h1 className="page-head">Contact</h1>
                <section className="email-and-info-container">
                    <div className='contact-info'>
                        <h1>Let's get in touch!</h1>
                    </div>
                    <Email />
                </section>
            </main>
        </>
    )
}