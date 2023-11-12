import { Routes, Route } from "react-router-dom";
import AdminHome from './pages/AdminHome';
import AddProduct from "./pages/AddProduct";
import ModifyProduct from "./pages/ModifyProduct";
import AddUser from "./pages/AddUser";
import ModifyUser from "./pages/ModifyUser";
import AddBranch from "./pages/AddBranch";
import ModifyBranch from "./pages/ModifyBranch";
import Userhome from "./pages/Userhome";
import TrackOrder from "./pages/TrackOrder";
import OrderBusinessCard from "./pages/OrderBusinessCard";
import Contact from "./pages/Contact";
import TrackOrderViewDetials from "./pages/TrackOrderViewDetials";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';



function App() {


  const [progress, setProgress] = useState(0);

  const increasePro = (progress) => {
    setProgress(progress);
  }

 

  return (
    <>
      <LoadingBar color='#ffc400' height={2} progress={progress} onLoaderFinished={() => setProgress(0)} />

      <Routes>

        <Route path='/' element={<>
          <div><a href="/adminhome">Admin page...</a></div>
          <div><a href="/userhome">User page...</a></div>
        </>} />

        <Route path='/adminhome' element={<>
          <AdminHome setProgress={increasePro}/>
        </>} />


        <Route path='/addproduct' element={<>
          <AddProduct setProgress={increasePro}/>
        </>} />

        <Route path='/modifyproduct' element={<>
          <ModifyProduct setProgress={increasePro}/>
        </>} />

        <Route path='/adduser' element={<>
          <AddUser setProgress={increasePro}/>
        </>} />

        <Route path='/modifyuser' element={<>
          <ModifyUser setProgress={increasePro}/>
        </>} />


        <Route path='/addbranch' element={<>
          <AddBranch setProgress={increasePro}/>
        </>} />

        <Route path='/modifybranch' element={<>
          <ModifyBranch setProgress={increasePro}/>
        </>} />




        <Route path='/userhome' element={<>
          <Userhome setProgress={increasePro}/>
        </>} />
        <Route path='/userorderbusiness' element={<>
          <OrderBusinessCard setProgress={increasePro}/>
        </>} />
        <Route path='/userordertrack' element={<>
          <TrackOrder setProgress={increasePro}/>
        </>} />
        <Route path='/usercontact' element={<>
          <Contact setProgress={increasePro}/>
        </>} />

        <Route path='/ordertrackview' element={<>
          <TrackOrderViewDetials/>
        </>} />


      </Routes>
      
    </>
  );
}

export default App;
