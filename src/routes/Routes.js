import DashBoard from '../pages/DashBoard';
import {Routes,Route,Navigate} from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
import '../App.css';

const Router=()=> {
  return (
   <Routes>  
     <Route element={<ProtectedRoutes/>} >
    <Route path='/' element={<Navigate to='/dashboard' />} />
     <Route path='/dashboard' element={<DashBoard/>} />
     </Route>
   </Routes>
  );
}

export default Router;
