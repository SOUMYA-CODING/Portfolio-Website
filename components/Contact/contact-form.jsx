"use client";

import toast, { Toaster } from "react-hot-toast";
import Button from "../ui/button"
import { useState } from "react";

const ContactForm = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (response.status === 200) {
            setData({
                name: "",
                email: "",
                message: "",
            });
            toast.success(`Hey ${data.name}, your message was sent successfully!`);
        } else {
            toast.error(`Something went wrong!`)
        }
    }

    return (
        <>
            <div className={`flex flex-col items-center justify-center`}>
                <form onSubmit={sendEmail} className={`w-[50%] xl:w-[60%] md:w-full `} autoComplete="off">
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" value={data.name} onChange={handleChange} id="name" className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" value={data.email} onChange={handleChange} id="email" className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required />
                    </div>
                    <div className={`flex flex-col items-start justify-start mb-8`}>
                        <label htmlFor="message">Message</label>
                        <textarea name="" value={data.message} onChange={handleChange} id="message" cols="5" rows="4" className={`border-b-2 bg-transparent border-black outline-none p-2 w-full`} required></textarea>
                    </div>
                    <Button title="Send" onSubmit={sendEmail} />
                </form>
                <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
            </div>
        </>
    )
}

export default ContactForm