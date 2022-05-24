import React from 'react'

const ContactForm = () => {
    const [formData, setFormData] = React.useState(
        {
            users_firstName: "",
            users_lastName: "",
            users_email: ""
        }
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3001/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then((body) => {
            console.log(body)
        })
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="users_firstName"
                value={formData.users_firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="users_lastName"
                value={formData.users_lastName}
            />
            <input required
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="users_email"
                value={formData.users_email}
            />
            <button>Submit</button>
        </form>
    )

}

export default ContactForm