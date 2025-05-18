"use client";

import toast, { Toaster } from "react-hot-toast";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, form.current, process.env.NEXT_PUBLIC_EMAIL_PUBLIC)
            .then((result) => {
                setName("");
                setEmail("");
                setMessage("");
                toast.success("Successfully send the message")
            }, (error) => {
                console.error("EmailJS Error:", error);
                toast.error("Something went wrong!")
            });
    };

    return (
        <>
            <div className={`flex flex-col items-center justify-center`}>
                <form ref={form} onSubmit={sendEmail} className={`w-[50%] xl:w-[60%] md:w-full `} autoComplete="off">
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="from_name" value={name} onChange={(e) => setName(e.target.value)} className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} cols="5" rows="4" className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required></textarea>
                    </div>
                    <input type="submit" value="Send" className={`relative cursor-pointer -top-1 -left-1 bg-primary py-2.5 px-6 text-lg font-semibold text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 md:p-2 md:px-4 md:text-base`} />
                </form>
                <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
            </div>
        </>
    )
}

export default ContactForm