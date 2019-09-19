import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { filterContacts, clearFilter } from '../action/contactsAction'


const ContactsFilter = ({ forms: { filtered }, filterContacts, clearFilter }) => {

    const text = useRef("")
    const onChange = (e) => {
        if (text.current.value !== "") {
            filterContacts(e.target.value)
        } else {
            clearFilter();
        }
    }
    useEffect(() => {
        if (filtered === "") {
            text.current.value = "";
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

export default connect(mapStateToProps, { filterContacts, clearFilter })(ContactsFilter);
