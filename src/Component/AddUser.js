import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[role, setRole] = useState('staff');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userobj = {name, email, phone, role};
    dispatch(FunctionAddUser(userobj));
    navigate('/user');
  }
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
      <div className="card-header">
        <h2>Add User</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Nama</label>
              <input className="form-control" type="text" value={name} onChange={e=>setName(e.target.value)}/>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>No Hp</label>
              <input className="form-control" type="text" value={phone} onChange={e=>setPhone(e.target.value)}/>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" value={role} onChange={e=>setRole(e.target.value)}>
                {/* <option>--</option> */}
                <option value="admin">Admin</option>
                <option value="staf">Staff</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" type="submit">Submit</button> |
        <Link className="btn btn-danger" to={"/user"}>
          Kembali
        </Link>
      </div>
      </form>
    </div>
  );
};

export default AddUser;
