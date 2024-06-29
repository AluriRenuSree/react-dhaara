import { Outlet, Navigate } from "react-router-dom";
import {useState} from "react";
import Header from '../generic/Header';
import SideBar from '../generic/SideBar';

const ProtectedRoutes=()=>{
    const [isAutheticated,setIsAutheticated] = useState(true)
  return isAutheticated ?(
    <>
      <Header />
      <div style={{ display: "flex", height: "calc(100vh - 64px)", marginTop: "64px" }}>
        <SideBar />
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </>
  ) : <Navigate to="/" />;


}
export default ProtectedRoutes;