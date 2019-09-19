import React, { Fragment, useEffect } from 'react'
// import ContactContext from '../../context/contact/contactContext'
import { connect } from 'react-redux'
import ContactItem from './ContactItem';
import { getContacts } from "../action/contactsAction"
import Spinner from "../layout/Spinner"



const Contacts = ({ cont: { contactsList, filtered, loading }, getContacts }) => {


    useEffect(() => {
        getContacts();


    })
    if (contactsList !== null && contactsList.length === 0 && !loading) {
        return <h4 style={{ marginTop: "10px" }} className="text-white">please add a new contact</h4>
    }
    return (
        <Fragment >
            {contactsList !== null && !loading ? (<div>{filtered !== null ? filtered.map(item => (<ContactItem key={item._id} item={item} />))
                : contactsList.map(item => (<ContactItem getContacts={getContacts} key={item._id} item={item} />))}</div>) : (<Spinner />)}



        </Fragment>
    )
}
const mapStateToProps = state => ({
    cont: state.contacts
})

export default connect(mapStateToProps, { getContacts })(Contacts);
