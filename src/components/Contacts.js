import React, { Component, Fragment } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: '1',
                    name: 'john',
                    email: 'john@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: '2',
                    name: 'jack',
                    email: 'jack@gmail.com',
                    phone: '444-444-4444'
                },
                {
                    id: '3',
                    name: 'Henery',
                    email: 'Henery@gmail.com',
                    phone: '999-999-9999'
                }
            ]
        }
    }
    DeleteConatact = (id, ele) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(contact =>
            contact.id !== id);
        console.log(newContacts);
        this.setState({ contacts: newContacts })
    }
    render() {
        const contacts = this.state.contacts;
        return (
            <Fragment>
                {this.state.contacts.map((i) => {
                    return (<Contact key={i.id} contacts={i} DeleteConatact={this.DeleteConatact.bind(this, i.id)}></Contact>);
                })}
            </Fragment>
        );
    }
}
export default Contacts;