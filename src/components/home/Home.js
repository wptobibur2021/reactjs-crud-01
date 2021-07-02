import React, {useContext} from 'react';
import {UserContext} from "../usercontext/UserContext";
import {Link} from "react-router-dom";
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const Home = () => {
    const [users, setUsers] = useContext(UserContext)

    return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8'>
                        <div className='card float-right mb-3'>
                            <Link to='/AddUser'><button className='btn btn-primary '>Add User</button></Link>
                        </div>
                        <table className="table table-dark table-striped">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user) =>(
                                        <tr>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                                <Link to={'/read/'+user.id}><button className='btn btn-primary m-1'>View</button></Link>
                                                <Link to={'/delete/'+user.id}><button className='btn btn-danger m-1'>Delete</button></Link>
                                                <Link to={'/edit/'+user.id}><button className='btn btn-secondary m-1'>Edit</button></Link>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
    );
};

export default Home;