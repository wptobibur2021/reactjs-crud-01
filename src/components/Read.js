import React, {useContext} from 'react';
import {UserContext} from "./usercontext/UserContext";
import {Link, useParams} from "react-router-dom";
import {Button} from "react-bootstrap";

const Read = () => {
    const [users, setUsers] = useContext(UserContext)
    const {id} = useParams();
    const user = users.filter((user) => user.id == id);
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6">
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">User Name: {user[0].name}</h5>
                            <h5 className="card-title">User Position: {user[0].position}</h5>
                            <h5 className="card-title">User Salary: {user[0].salary}</h5>
                            <Link to='/'><Button>Back to home</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Read;