import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserListing from "./Component/UserListing";
import AddUser from "./Component/AddUser";
import UpdateUser from "./Component/UpdateUser";
import { ToastContainer } from "react-toastify";
import {Provider} from 'react-redux'
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/user"}>User</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<UserListing />}></Route>
          <Route path="/user/add" element={<AddUser />}></Route>
          <Route path="/user/edit/:code" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className='toast-position' position="bottom-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
