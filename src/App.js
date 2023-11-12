import { Routes, Route } from "react-router-dom";
import AdminHome from './pages/AdminHome';
import AddProduct from "./pages/AddProduct";
import ModifyProduct from "./pages/ModifyProduct";
import AddUser from "./pages/AddUser";
import ModifyUser from "./pages/ModifyUser";
import AddBranch from "./pages/AddBranch";
import ModifyBranch from "./pages/ModifyBranch";


function App() {
 

  return (
    <>
     

      <Routes>

        <Route path='/' element={<>
          <div><a href="/adminhome">Admin page...</a></div>
        </>} />

        <Route path='/adminhome' element={<>
          <AdminHome/>
        </>} />






        <Route path='/addproduct' element={<>
          <AddProduct/>
        </>} />

        <Route path='/modifyproduct' element={<>
          <ModifyProduct/>
        </>} />

        <Route path='/adduser' element={<>
          <AddUser/>
        </>} />

        <Route path='/modifyuser' element={<>
          <ModifyUser/>
        </>} />


        <Route path='/addbranch' element={<>
          <AddBranch/>
        </>} />

        <Route path='/modifybranch' element={<>
          <ModifyBranch/>
        </>} />


      </Routes>
      
    </>
  );
}

export default App;
