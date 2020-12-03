import React, { useContext, useState } from 'react';
import { contactContext } from '../../contexts/ContactContext';

const AddContact = () => {
    const [inpName, setInpName] = useState ("")
    const [inpSurname, setInpSurname] = useState ("")
    const [inpPhone, setInpPhone] = useState ("")

    const {addContact} = useContext(contactContext)

    function handleClick (){ 
        let newObj = {
            contact1: inpName,
            contact2: inpSurname,
            contact3: inpPhone,
            status: false
        }
        addContact(newObj)
        setInpName("");
        setInpSurname("");
        setInpPhone("");
    }
    return (
        <div style={{ textAlign: "center"}}>
            <input value={inpName}
             onChange={(e) => 
             setInpName(e.target.value)} 
             type="text"
             placeholder="Enter your name"
             />

            <input value={inpSurname}
             onChange={(e) =>
            setInpSurname(e.target.value)} 
            type="text"
            placeholder="Enter your surname"
            />

            <input value={inpPhone} 
            onChange={(e) => 
            setInpPhone(e.target.value)} 
            type="text"
            placeholder="Enter your phone number"
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
};

export default AddContact;