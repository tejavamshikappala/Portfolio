import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Project from "./components/projects/project";

import All from "./components/all/all";
import Cursor from './components/cursor/cursor';
const App=()=>(
  <BrowserRouter>
 <Cursor/>
  <Header/>
  <Routes>
  <Route exact path="/" element={<All/>}/>
  <Route exact path="/home" element={<Home/>}/>
  <Route exact path="/about" element={<About/>}/>
  <Route exact path="/contact" element={<Contact/>}/>
  <Route exact path="/projects" element={<Project/>}/>
  </Routes>



  </BrowserRouter>
)

export default App;
