import React from 'react'
import { setAlert } from '../action/alertAction'
import { connect } from 'react-redux'

const Alert = ({ alerts, setAlert }) => {
    return (
        alerts.length > 0 && alerts.map(alert => (
            <div style={{ marginTop: "10px" }} key={alert.id} className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle">{alert.msg}</i>
            </div>
        ))
    )
}



const mapStateToProps = state => ({
    alerts: state.alerts
})

export default connect(mapStateToProps, { setAlert })(Alert);


