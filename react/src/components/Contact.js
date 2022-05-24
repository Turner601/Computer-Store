import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <main className="container">
                <h2 className="text-center mt-5">Not seeing the product you want or having issues with something regarding your PC? Contact us below and we'll get back to you as quickly as we can.</h2>
                <section className="contacts-section">
                    <div className="text-center mt-5">
                        <h5>Send us a message on Facebook</h5>
                        <a href="https://www.facebook.com/"><svg className="icon icon-facebook"><use href="#icon-facebook"></use></svg></a>
                    </div>
                    <div className="text-center mt-5">
                        <h5>Send us a message on Twitter</h5>
                        <a href="https://twitter.com/?lang=en"><svg className="icon icon-twitter"><use href="#icon-twitter"></use></svg></a>
                    </div>
                    <div className="text-center mt-5">
                        <h5>Call our 1-800 number to chat with a real person</h5>
                        <svg className="icon icon-mobile"><use href="#icon-mobile"></use></svg>
                        <p>1-800-555-5555</p>
                    </div>
                    <div className="text-center mt-5">
                        <h5>Send us an e-mail</h5>
                        <svg className="icon icon-mail-envelope-closed"><use href="#icon-mail-envelope-closed"></use></svg>
                        <p><a href="mailto: turner@mscodingacademies.org">Send e-mail</a></p>
                    </div>
                    <div className='newsletter mb-5'>
                        <h5 className='text-center'>Sign up to recieve our weekly newsletter</h5>
                        <div className='text-center'>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Contact