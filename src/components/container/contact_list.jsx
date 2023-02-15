import React, { useState } from 'react'
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/Contact';
import ContactForm from '../pure/form/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = () => {

    const defaultContact1 = new Contact('Juan', true);
    const defaultContact2 = new Contact('Michael', false);
    const defaultContact3 = new Contact('Roberto', true);
    const defaultContact4 = new Contact('Carlos', false);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4]);

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function changeState(contact){
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].state = !tempContacts[index].state;
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    <div className='card-body bg-light' data-mdb-perfect-scrollbar='true'>
                        <table className="table table-bordered rounded shadow table-hover overflow-scroll mx-auto">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">State</th>
                                    <th scope='col'>Change State</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        return (<ContactComponent key={index} contact={contact} remove={deleteContact} changeState={changeState} />)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <ContactForm  add={addContact} length={contacts.length} />
                </div>
            </div>
        </div>
    );
};

export default ContactList;