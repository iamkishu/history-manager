import React from 'react'
import { Link } from 'react-router-dom'
import ComplaintDetails from './ComplaintDetails';

function ListContact(props) {

    const deleteComplaintHandler = (id) => {
        props.getComplaintId(id);
    };

    let renderedComplaintList = props.complaints.map((complaint) => {
        return (<ComplaintDetails complaint={complaint} clickHandler={deleteComplaintHandler} key={complaint.id} />)
    });

    return (
        <div className='ui main container'>
            <h3>Complaint List</h3>
            <Link to='/addComplaint'>
                <button className='ui button blue right'>+ Add Complaint</button>
            </Link>
            <div className='ui celled list'>
                {renderedComplaintList}
            </div>
        </div>
    )
}

export default ListContact
