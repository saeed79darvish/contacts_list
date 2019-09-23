import React, { useEffect } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';
import { loadUser } from "../action/authAction";
import { connect } from 'react-redux'


const Home = ({ loadUser }) => {


    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (


        <div style={{ marginTop: "100px", height: "100" }} className="container">
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

    auth: state.authentication
})

export default connect(mapStateToProps, { loadUser })(Home);
