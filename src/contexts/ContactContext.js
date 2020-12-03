import React, { useReducer } from 'react';
import axios from 'axios';

export const contactContext = React.createContext();

const INIT_STATE = {
    contacts: [], 
    contactToEdit: null
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_CONTACT_DATA": 
        return {...state, contacts: action.payload}
        case "EDIT_CONTACT": 
        return {...state, contactToEdit: action.payload}
        default: return state
    }
}

const ContactContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getContactData = async () => {
       let { data } = await axios("http://localhost:8000/contacts?limit=2&page=3")
       dispatch({
           type: "GET_CONTACT_DATA",
           payload: data
       })
    }
    
    const addContact = async (newContact) => {
       await axios.post("http://localhost:8000/contacts", newContact)

        getContactData()
    }

    const changeStatus = async (id) => {
        let {data} = await axios(`http://localhost:8000/contacts/${id}`)
        await axios.patch(`http://localhost:8000/contacts/${id}`, {status: !data.status})
        getContactData()
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8000/contacts/${id}`)
        getContactData()
    }

    const editContact = async (id) => {
        let {data} = await axios(`http://localhost:8000/contacts/${id}`)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveContact = async (newContact, history) => {
        try{
            await axios.patch(`http://localhost:8000/contacts/${newContact.id}`, newContact)
            history.push('/')
        }catch(error){
            history.push('/error')
        }
    }

    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addContact,
            getContactData,
            changeStatus,
            deleteContact,
            editContact,
            saveContact
        }}>
            {children}
        </contactContext.Provider>
    )
}

export default ContactContextProvider;