import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddComplaint(props) {
    const [contact, setContact] = useState({
        "name": "",
        "mobileNo": "",
        "laptopModel": "",
        "complaint": ""
    })


    let add = (e) => {
        e.preventDefault();
        console.log(contact)
        if (contact.name === "" || contact.mobileNo === "" || contact.laptopModel === "") {
            alert("All fields are mandatory")
            return
        }
        props.addComplaintHandler(contact);
        setContact({
            "name": "",
            "email": ""
        })
        props.history.push("/")
    };

    return (
        <div className='ui main container'>
            <h3>Add Complaint</h3>
            <form className='ui form' onSubmit={add}>

                <div className='field'>
                    <label>Name</label>
                    <input type='text'
                        name='name'
                        placeholder='Name'
                        value={contact.name}
                        onChange={(e) => {
                            setContact(prevState => ({
                                ...prevState,
                                name: e.target.value,
                            }));
                        }}
                    />
                </div>

                <div className='field'>
                    <label>Mobile Number</label>
                    <input type='text'
                        name='mobileNo'
                        placeholder='Mobile Number'
                        value={contact.mobileNo}
                        onChange={(e) => {
                            setContact(prevState => ({
                                ...prevState,
                                mobileNo: e.target.value,
                            }));
                        }}
                    />
                </div>

                <div className='field'>
                    <label>Laptop Model</label>
                    <input type='text'
                        name='laptopModel'
                        placeholder='Laptop Model'
                        value={contact.laptopModel}
                        onChange={(e) => {
                            setContact(prevState => ({
                                ...prevState,
                                laptopModel: e.target.value,
                            }));
                        }}
                    />
                </div>


                <div className="field">
                    <label>Complaint Description</label>
                    <textarea spellcheck="false"
                        data-ms-editor="true"
                        placeholder='Complaint description'
                        name='complaint'
                        value={contact.complaint}
                        onChange={(e) => {
                            setContact(prevState => ({
                                ...prevState,
                                complaint: e.target.value,
                            }));
                        }}></textarea>
                </div>

                <button className='ui button blue'>Add</button>
                <Link to='/'>
                    <button className='ui button blue centered'>Back</button>
                </Link>
            </form>
        </div>)
}

export default AddComplaint
