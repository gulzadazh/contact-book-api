import React, { useContext, useEffect } from 'react';
import { contactContext } from '../../contexts/ContactContext';
import { Link } from 'react-router-dom';

const ContactList = () => {
    const { contacts,
        getContactData,
        changeStatus,
        deleteContact,
        editContact
    } = useContext(contactContext)
    useEffect(() => {
        console.log("useEffect");
        getContactData()
    }, [])

    return (
        <ul style={{width: '600px'}}>
            {contacts.map(item => {
                <input type="checkbox" />
                return <li style={{ listStyleType: 'none', background: "lavender", textAlign: "center"}} key={item.id} className={item.status ? "completed" : ""}>
                    <input type="checkbox"
                        checked={item.status}
                        onChange={() => changeStatus(item.id)} />
                    <span style={{ margin: 5 }}>{item.contact1}</span>
                    <span style={{ margin: 5 }}>{item.contact2}</span>
                    <span style={{ margin: 5 }}>{item.contact3}</span>
                    <button onClick={() => deleteContact(item.id)}>Delete</button>
                    <Link to="/edit">
                        <button onClick={() => editContact(item.id)}>Edit</button>
                    </Link>
                </li>
            })}
        </ul>
    );
};

export default ContactList;