import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "./usercontext/UserContext";
import {NotificationContainer, NotificationManager} from 'react-notifications';
const Adduser = () => {
    const [users, setUsers] = useContext(UserContext)
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [salary, setSalary] = useState('')

    const updateID = (e) =>{
        setId(e.target.value)
    }
    const updateName = (e) =>{
        setName(e.target.value)
    }
    const updatePosition = (e) => {
        setPosition(e.target.value)
    }
    const updateSalary = (e) => {
        setSalary(e.target.value)
    }

    const addUser = (e) =>{
        e.preventDefault()
        setUsers([...users, {id:id, name:name, position:position, salary:salary}])

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 mt-lg-5'>
                    <form onSubmit={addUser}>
                        <div className="mb-3">
                            <label className="form-label">UserID</label>
                            <input type="number" required  name='id' value={id} onChange={updateID} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text"  required name='name' value={name} onChange={updateName} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Position</label>
                            <input type="text" required  name='position' value={position} onChange={updatePosition} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary</label>
                            <input type="number" required  name='salary' value={salary} onChange={updateSalary} className="form-control" />
                        </div>

                        <button type="submit"  className="btn btn-primary">Add User</button>
                        <Link to='/'><button type="submit" className="btn btn-dark float-right">Home</button></Link>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>

        </div>
    );
};

export default Adduser;