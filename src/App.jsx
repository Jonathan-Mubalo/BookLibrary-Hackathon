import React from 'react'

// import Books from './context/Books.jsx';
import Navbar from './Navbar.jsx';
import Booklist from './Booklist.jsx';
import ThemeContextFunction from './context/ThemeContext.jsx';
import GetAllBooks from './context/Books.jsx';
import Create from "./CRUD/Create.jsx"
import Get from "./CRUD/Get.jsx"
import Update from "./CRUD/Update.jsx"
import Delete from "./CRUD/Delete.jsx"


function App() {

  return (
    <>
      <div className='App'>
        <GetAllBooks>
          <Create />
          <Get />
          <Update />
          <Delete />
        </GetAllBooks>
        <ThemeContextFunction>
          <Navbar />
          <Booklist />
        </ThemeContextFunction>
      </div>
    </>
  )
}

export default App;
