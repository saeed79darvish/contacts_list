import React, { useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';
import { loadUser } from "../action/authAction";
import { getContacts } from "../action/contactsAction";
import { connect } from 'react-redux'


const Home = ({ loadUser, getContacts, }) => {


    useEffect(() => {
        loadUser();
        getContacts();

        // eslint-disable-next-line
    }, []);

    return (


        <div style={{ marginTop: "100px", height: "100vh" }} className="container">
            <div className="row">
                <div className="col-sm">
                    <ContactForm />
                </div>
                <div className="col-lg">
                    <ContactsFilter />
                    <Contacts />
                </div>


            </div>
        </div>

    )
}



const mapStateToProps = state => ({

    auth: state.authentication,
    count: state.contacts
})

export default connect(mapStateToProps, { loadUser, getContacts })(Home);
