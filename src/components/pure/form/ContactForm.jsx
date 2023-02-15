import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({ add, length }) => {

  const contactRef = useRef('')
  const stateRef = useRef(0)

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      contactRef.current.value,
      stateRef.current.value == 1 ? true : false
    );
    add(newContact);
  }


  return (
    <form onSubmit={addContact} className='d-flex gap-2 justify-content-center py-4'>
      <input className='rounded-2' ref={contactRef} type='text' required autoFocus placeholder='Contact Name' />
      <select className='form-control-sm' ref={stateRef} defaultValue={0} id='selectContact'>
        <option value={1}>
          Conectado
        </option>
        <option value={0}>
          Desconectado
        </option>
      </select>
      <button type='submit' className='btn btn-success'>{length > 0 ? 'Add New Contact' : 'Create your First Contact'}</button>
    </form>
  )
}

ContactForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default ContactForm;