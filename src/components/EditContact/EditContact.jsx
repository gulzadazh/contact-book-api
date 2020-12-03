import React, { useContext, useEffect, useState } from 'react';
import { contactContext } from '../../contexts/ContactContext';

const EditContact = (props) => {
    const { contactToEdit, saveContact} = useContext(contactContext);
    const [newEditItem, setNewEditItem] = useState(contactToEdit)

    useEffect(() => {
        setNewEditItem(contactToEdit)
    }, [contactToEdit])

    function handleEditInp1(e){
        let newContact = {
            ...newEditItem,
            contact1: e.target.value
        }
        setNewEditItem(newContact)
    }
    function handleEditInp2(e){
        let newContact = {
            ...newEditItem,
            contact2: e.target.value
        }
        setNewEditItem(newContact)
    }
    function handleEditInp3(e){
        let newContact = {
            ...newEditItem,
            contact3: e.target.value
        }
        setNewEditItem(newContact)
    }
    return (
        <div>
            {newEditItem ? 
            <>
            <input onChange={handleEditInp1} value={newEditItem.contact1} type="text" />
            <input onChange={handleEditInp2} value={newEditItem.contact2} type="text" />
            <input onChange={handleEditInp3} value={newEditItem.contact3} type="text" />

                <button onClick={() => saveContact(newEditItem, props.history)}>Save</button>
            </>
            : 
            <h1>Loading</h1>}
        </div>
    );
};

export default EditContact;