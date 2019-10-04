import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { filterContacts, clearFilter, getContacts } from '../action/contactsAction'


const ContactsFilter = ({ forms: { filtered, contactsList }, filterContacts, clearFilter, getContacts }) => {

    const text = useRef("")
    const onChange = (e) => {
        if (text.current.value !== "") {
            filterContacts(e.target.value)
            getContacts()
        } else {
            clearFilter()
            getContacts()
        }
    }
    useEffect(() => {
        if (filtered === "") {
            text.current.value = "";
            clearFilter()
            getContacts()

        }



    })


    return (
        <form style={{ marginTop: "10px" }} className="list-group">
            <input ref={text} placeholder="Search Contact..." onChange={onChange} />
        </form>
    )
}

const mapStateToProps = state => ({
    forms: state.contacts
})

export default connect(mapStateToProps, { filterContacts, clearFilter, getContacts })(ContactsFilter);
