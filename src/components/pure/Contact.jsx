import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({changeState ,contact, remove}) => {

  function contactStatedIcon(){
        if(contact.state){
            return (<i onClick={() => changeState(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => changeState(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

  return (
    <tr>
        <td>
            <span>{contact.name}</span>
        </td>
        <td>
            <span>{contact.state == true ? 'Conectado' : 'Desconectado'}</span>
        </td>
        <>
          {contactStatedIcon()}
        </>
        <td className='align-middle'>
                <i className='bi-trash task-action text-danger' onClick={() => remove(contact)}></i>
        </td>
    </tr>
  )
}

ContactComponent.protoTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  remove: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired
}



export default ContactComponent;