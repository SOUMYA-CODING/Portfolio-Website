const EmailTemplate = ({ firstName }) => {
    return (
        <>
            <div>Welcome, {firstName}!</div>
            <p>Thank you for sending me a message. I will get back with you soon as i can.</p>
        </>
    )
}

export default EmailTemplate