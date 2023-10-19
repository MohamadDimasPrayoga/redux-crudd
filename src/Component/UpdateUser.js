import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";

const UpdateUser = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const userobj = useSelector((state)=>state.user.userobj)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = { id, name, email, phone, role };
    dispatch(FunctionUpdateUser(userobj,id));
    navigate("/user");
  };

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, []);

  useEffect(() => {
    if(userobj){
      setId(userobj.id);
      setName(userobj.name);
      setEmail(userobj.email);
      setPhone(userobj.phone);
      setRole(userobj.role);
    }
  }, [userobj]);
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
                <label>ID</label>
                <input
                  className="form-control"
                  type="text"
                  value={id  || ''}
                  disabled="disable"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Nama</label>
                <input
                  className="form-control"
                  type="text"
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>No Hp</label>
                <input
                  className="form-control"
                  type="text"
                  value={phone || ''}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Role</label>
                <select
                  className="form-control"
                  value={role || ''}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {/* <option>--</option> */}
                  <option value="admin">Admin</option>
                  <option value="staf">Staff</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>{" "}
          |
          <Link className="btn btn-danger" to={"/user"}>
            Kembali
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
