import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactInfo: false
        };
        //  this.showClick = this.showClick.bind(this, name);
    }
    showClick = (e) => {
        this.setState({ showContactInfo: !this.state.showContactInfo })
    }

    render() {
        const { name, email, phone } = this.props.contacts;
        const showContactInfo = this.state.showContactInfo;
        return (
            <div className="card card-body mb-3" >
                <h4>
                    {this.props.contacts.name}
                    {
                        showContactInfo ? (<i className="fas fa-sort-up"
                            style={{ verticalAlign: '-35%', cursor: 'pointer' }} onClick={this.showClick.bind(this, name)} />) : <i className="fas fa-sort-down" style={{ cursor: 'pointer' }} onClick={this.showClick.bind(this, name)} />
                    }
                    <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                        onClick={this.props.DeleteConatact} />

                </h4>
                {
                    showContactInfo ? (<ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>) : null
                }

            </div>
        )
    }
}
// Contact.prototype = {
//     contacts: PropTypes.object.isRequired
// }   
export default Contact;