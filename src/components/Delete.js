import React, {useContext} from 'react';
import {UserContext} from "./usercontext/UserContext";
import {Link, useParams, setUsers} from "react-router-dom";
const Delete = () => {
    const [users, setUsers] = useContext(UserContext)
    const {id} = useParams();
    const userView = users.filter((user) => user.id == id);
    const deleteUser = (id) => {
        const user = users.filter((user) => user.id != id);
        setUsers(user);
    }
    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="modal-header">
                            <h5 className="modal-title">User Name: {userView[0].name}</h5>
                            <h5 className="modal-title">User Position: {userView[0].position}</h5>
                        </div>
                        <div className="modal-body">
                            <p>Do you want delete?</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" onClick={()=>deleteUser (id)} className="btn btn-primary">Delete</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Delete;