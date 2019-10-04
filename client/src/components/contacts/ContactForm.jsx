import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { addContact, clearCurrent, updateContact, getContacts } from '../action/contactsAction'
import { loadUser } from '../action/authAction'

const ContactForm = ({ forms: { current, contactsList, filtered }, addContact, clearCurrent, updateContact, getContacts }) => {

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        type: "personal"
    })
    useEffect(() => {
        if (current !== null) {
            setContact(current)
        } else {
            setContact({
                name: "",
                phone: "",
                email: "",
                type: "personal"
            })

        }
        // eslint-disable-next-line 
    }, [current])

    useEffect(() => {
        if (current !== null) {

            getContacts()
        }
    })
    const { name, phone, email, type } = contact;
    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value })



    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
            setContact({
                name: "",
                phone: "",
                email: "",
                type: "personal"
            })


        } else {

            updateContact(contact)



        }
        clearAll()
    }

    const clearAll = () => {
        clearCurrent();
    }


    return (
        <div style={{ marginTop: "10px" }} className="card">
            <form onSubmit={onSubmit} style={{ marginLeft: "5px", marginRight: "5px" }} className="list-group">
                <h2 className="text-primary">{!current ? "Add Contact" : "Edit Contact"}</h2>
                <input
                    style={{ border: "1px solid grey", marginTop: "5px" }}
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={onChange}

                />
                <input
                    style={{ border: "1px solid grey", marginTop: "5px" }}
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
                <input
                    style={{ border: "1px solid grey", marginTop: "5px" }}
                    type="text"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                />
                <h5 className="text-primary" style={{ marginTop: "10px" }}>Contact Type</h5>
                <input

                    type="radio"
                    name="type"
                    value="personal"
                    checked={type === "personal"}
                    onChange={onChange}

                />Personal{' '}
                <input
                    type="radio"
                    name="type"
                    value="perfessional"
                    checked={type === "perfessional"}
                    onChange={onChange}

                />Perfessional{' '}
                <div >

                    <input type="submit" value={current ? "update Contact" : "Add Contact"} className="btn btn-primary btn-block" />
                </div>
                {current && (<button style={{ marginTop: "10px", marginBottom: "10px" }} className="btn btn-dark btn-block" onClick={clearAll}>
                    Clear
                </button>)}
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    forms: state.contacts
})

export default connect(mapStateToProps, { addContact, clearCurrent, updateContact, getContacts })(ContactForm);
