import React from 'react'

import { deleteContact, setCurrent, clearCurrent } from '../action/contactsAction'
import { connect } from 'react-redux'

const ContactItem = ({ item, deleteContact, setCurrent, clearCurrent }) => {



    const deleteItem = (id) => {

        deleteContact(id);
        clearCurrent();
    }
    return (
        <div style={{ marginTop: "10px", backgroundColor: "#07884782" }} className="card bg-ligth">
            <h3 className="text-dark text-left" >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}{'     '}

                <span style={{ float: "right" }} className={"badge " + (item.type === 'personal' ? "badge-success" : "badge-primary")}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
            </h3>
            <ul className="list-group">

                {item.email && (
                    <li style={{ marginTop: "10px", marginLeft: "10px" }} className="fas fa-envelope-open"> {item.email}</li>
                )}
                {item.phone && (
                    <li style={{ marginTop: "10px", marginLeft: "10px" }} className="fas fa-phone"> {item.phone}</li>
                )}


            </ul>
            <p style={{ marginTop: "10px" }}>
                <button onClick={() => setCurrent(item)} className="btn btn-dark btn-sm">Edit</button>
                <button onClick={() => deleteItem(item._id)} style={{ marginLeft: "10px" }} className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    forms: state.contacts
})

export default connect(mapStateToProps, { deleteContact, setCurrent, clearCurrent })(ContactItem);
