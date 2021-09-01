import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import AddComplaint from './components/AddComplaint';
import Header from './components/Header';
import ListComplaint from './components/ListComplaints'

function App() {
  const LOCAL_STORAGE_KEY = "Complaints";
  const [complaints, setComplaints] = useState([]);

  const addComplaintHandler = (complaint) => {
    setComplaints([...complaints, { id: new Date(), ...complaint }])
  }

  const removeComplaintHandler = (id) => {
    console.log(id)
    const newComplaintList = complaints.filter((complaint) => {
      return complaint.id !== id;
    });

    setComplaints(newComplaintList);
  }

  useEffect(() => {
    const retriveComplaints = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveComplaints) setComplaints(retriveComplaints);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(complaints));
  }, [complaints]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>

          <Route
            path='/'
            exact
            render={(props) => (<ListComplaint {...props} complaints={complaints} getComplaintId={removeComplaintHandler} />)} />

          <Route
            path='/addComplaint'
            exact
            render={(props) => (<AddComplaint   {...props} addComplaintHandler={addComplaintHandler} />)} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
