import {BrowserRouter ,Route,Routes} from "react-router"
import { Fragment } from "react"
import Homepage from "./Pages/Homepage"
import States from "./Pages/States"
import Password1 from "./Pages/Password1"
import Todo from "./Compontents/Todo"
import Todo1 from "./Compontents/Todo1"
import Header2 from "./Compontents/Header2"
import Dynamic from "./Compontents/Dynamic"
import SingleTodo from "./Compontents/SingleTodo"
import ParentComponent from "./Pages/parentComponent"
import Productlist from "./Pages/Productlist"
import Navbarr from "./Compontents/Navbarr" 
// import Home from "./Pages/Home"
import Footer from "./Compontents/Footer"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"
import Context from "./Pages/Context"
import View from "./Pages/View"
import List from "./Compontents/List"
import Useeffect1 from "./Pages/Useeffect1"
import Apicall from "./Pages/Apicall"
import Apicalling from "./Pages/Apicalling"
import Formik from "./Compontents/Formik"
import Reduxpage from "./Pages/Reduxpage"
import Reduxproduct from "./Pages/Reduxproduct"
import Shopingcart from "./Pages/Shopingcart"
import Additionalinfo from "./Pages/Additionalinfo"

// import Results from "./Compontents/Results"



// import Usestate1 from "./Pages/Usestate1"
// import Homepage1 from "./Pages/Homepage1"


const Routers=()=> {
  

  return (
    
    

    // <Homepage></Homepage>  
    // {/* <Homepage1></Homepage1> */}
    // {/* <States></States> */}
    // {/* <Usestate1></Usestate1> */}
    // {/* <Password1></Password1> */}
    
    <BrowserRouter>
    {/* <Navbarr/> */}
    <main>
    
    <Routes>
      {/* <Route path="/" element={<div><Header2/><h1>Page</h1></div>}/> */}
      <Route path="/todo" Component={Todo}></Route>
      <Route path="/view" Component={View}></Route>
      {/* <Route path="*" element={<div><Header2/><h1>404  | page note found</h1></div>}/> */}
      {/* <Route path="/props" Component={ParentComponent}></Route> */}
      {/* <Route path="/product" Component={Productlist}></Route> */}
      {/* <Route path="/single" Component={SingleTodo}></Route> */}
      {/* <Route path="/home" Component={Home}></Route> */}
      {/* <Route path="/about" Component={About}></Route> */}
      {/* <Route path="/contact" Component={Contact}></Route> */}
      {/* <Route path="/datas" Component={Results}></Route> */}
      <Route path="/context" Component={Context}></Route>
      <Route path="/list" Component={List}></Route>
      <Route path="/useeffect" Component={Useeffect1}></Route>
      <Route path="/api" Component={Apicall}></Route>
      <Route path="/apis" Component={Apicalling}></Route>
      <Route path="/formik" Component={Formik}></Route>
      <Route path="/redux" Component={Reduxpage}></Route>
      <Route path="/reduxlist" Component={Reduxproduct}></Route>
      <Route path="/shoping" Component={Shopingcart}></Route>
      {/* <Route path="/info" Component={Additionalinfo}></Route> */}
      
      
      
    </Routes>
    </main>
    {/* <Footer/> */}
    
    </BrowserRouter>
  //   {/* <Todo></Todo> */}
  //   {/* <Dynamic></Dynamic> */}
    
  //   {/* <Todo1></Todo1>
  //   <SingleTodo></SingleTodo>
    
  // </Fragment> */}

  )
      
  
}

export default Routers
