import React from "react";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from"./components/Sidebar1";
import Navbar from "./components/Navbar";
import Overview from"./pages/Overview";
import Projects from"./pages/Projects";
import Profile from"./pages/Profile";

function App()
{
  return(
    <Router>
      <div className="flex h-screen">
       <Sidebar/>
       <div className="flex-1 flex flex-col">
       <Navbar/>
<div className="flex-1 p-6 overflow-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
<Routes>
  <Route path ="/" element={<Overview/>}/>
  <Route path ="/projects" element={<Projects/>}/>
  <Route path ="/profile" element={<Profile/>}/>
</Routes>
</div>
      </div>
      </div>
    </Router>
  );
}

export default App;