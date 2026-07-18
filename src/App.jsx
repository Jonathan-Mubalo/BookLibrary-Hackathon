import React from 'react'

import Navbar from './Navbar.jsx';
import Booklist from './Booklist.jsx';
import ThemeContextFunction from './context/ThemeContext.jsx';
import GetAllBooks from './context/Books.jsx';
import Create from "./CRUD/Create.jsx"
import Get from "./CRUD/Get.jsx"
import Update from "./CRUD/Update.jsx"
import Delete from "./CRUD/Delete.jsx";
import {
 BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";


function App() {

  return (
    <>
   
      <div className='App'>

          <Navbar />
        <GetAllBooks>
           <Router>
          <Routes>
              <Route path="/" element={<Get />} />
              <Route path="/Create" element={<Create />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/Delete" element={<Delete />} />
          </Routes>
</Router>
        </GetAllBooks>
       
      </div>
    </>
  )
}

export default App;
