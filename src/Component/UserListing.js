import React, { useEffect } from "react";
import { FetchUserList, Removeuser } from "../Redux/Action";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loaduser();
  },[]);

  const handleDelete = (code) =>{
    if(window.confirm('Apakah anda ingin menghapus?')){
      props.removeuser(code);
      props.loaduser();
      toast.success('User Telah di Hapus')
    }
  }
  return (
    props.user.loading? <div><h2>Loading...</h2></div>:
    props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={'/user/add'} className="btn btn-success">Add User [+]</Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td className="bg-dark text-white text-center">Code</td>
                <td className="bg-dark text-white text-center">Name</td>
                <td className="bg-dark text-white text-center">Email</td>
                <td className="bg-dark text-white text-center">Phone</td>
                <td className="bg-dark text-white text-center">Role</td>
                <td className="bg-dark text-white text-center">Action</td>
              </tr>
            </thead>
            <tbody>
              {
                props.user.userlist && props.user.userlist.map(item=>
                  <tr key={item.id} className="text-center">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link to={'/user/edit/' +item.id} className="btn btn-primary">Edit</Link> |
                      <button onClick={()=>{handleDelete(item.id)}} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                  )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//komponent daftar pengguna
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code)=> dispatch(Removeuser(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
