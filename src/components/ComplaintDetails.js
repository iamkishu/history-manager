import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


function ComplaintDetails(props) {
    const { id, name, mobileNo, laptopModel, complaint } = props.complaint;
    const [modalState, setModalState] = useState(false)
    const [resolution, setResolution] = useState('')
    return (

        <div className="ui card centered" style={{ width: "95vw" }}>
            <div className="content">
                <div className="header">{name} - {laptopModel}</div>
                <div className="meta"> {mobileNo}</div>
                <div className="description">
                    {complaint}
                </div>
                <div style={{ float: 'right', paddingTop: '10px' }} >
                    <button className="ui primary button" onClick={() => setModalState(true)}>Close Complaint</button>
                    <Modal isOpen={modalState} style={{
                        content: {
                            top: '50%',
                            right: '50%',
                            bottom: 'auto',
                            left: 'auto',
                            height: '40vh',
                            width: '50vw',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                        },
                    }} >
                        <div className="ui form">
                            <div className="items">
                                <h2 class="header">Resolution</h2>
                                <textarea spellcheck="false"
                                    data-ms-editor="true"
                                    placeholder='Resolution description'
                                    name='resolution'
                                    value={resolution}
                                    onChange={(e) => {
                                        setResolution(e.target.value)
                                    }}></textarea>

                                <div className="ui centered" style={{ float: 'right' }}>
                                    <br />
                                    <div className="ui button primary " onClick={() => { props.clickHandler(id) }}>Submit</div>
                                    <div className="ui button " onClick={() => setModalState(false)}>Back</div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <button className="ui button" onClick={() => { props.clickHandler(id) }}>Delete Complaint</button>
                </div>
            </div>
        </div>
    )
}

export default ComplaintDetails
