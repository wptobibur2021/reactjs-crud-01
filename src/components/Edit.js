import React, {useContext, useState } from 'react';
import {UserContext} from "./usercontext/UserContext";
import {Link, useParams, Redirect} from "react-router-dom";


const Edit = () => {
    const [users, setUsers] = useContext(UserContext)
    const {id} = useParams()
    const user = users.filter((user) => user.id == id)
    const [name, setName] = useState(user[0].name)
    const [position, setPosition] = useState(user[0].position)
    const [salary, setSalary] = useState(user[0].salary)

    const updateName = (e) =>{
        setName(e.target.value)
        const edit_name = name
        user[0].name = edit_name
    }
    const updatePosition = (e) => {
        setPosition(e.target.value)
        const edit_position = position
        user[0].position = edit_position
    }
    const updateSalary = (e) => {
        setSalary(e.target.value)
        const edit_salary = salary
        user[0].position = edit_salary
    }

    const editUser = (e) =>{
        e.preventDefault()
        setUsers([...users])
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 mt-lg-5'>
                    <form onSubmit={editUser}>
                        <div className="mb-3">
                            <label className="form-label">UserID: {user[0].id}</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input type="text" required name='name' value={name} onChange={updateName} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Position</label>
                            <input type="text" required name='position' value={position} onChange={updatePosition} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary</label>
                            <input type="number" required name='salary' value={salary} onChange={updateSalary} className="form-control" />
                        </div>

                       <button type="submit" className="btn btn-primary">Update User</button>
                        <Link to='/'><button type="submit" className="btn btn-dark float-right">Home</button></Link>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    );
};

export default Edit;