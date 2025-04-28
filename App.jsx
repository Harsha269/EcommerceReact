
import { createContext,useState } from "react"
// import { CounterProvider } from "./Context/Context1"
import Router from "./Routers"
import { Todoprovider } from "./Context/Todocontext"
import Todo from "./Compontents/Todo"
import { ProductProvider } from "./Context/Productcontext"
// import { ProductProvider } from "./ProductContext";

// import { Listprovider } from "./Context/Listcontext"
export const SampleContext=createContext()

 const App=()=>{
  // return <SampleContext.Provider value="Hi">
    // const[counter,setCounter]=useState(0)
    // return <SampleContext.Provider value={{counter,setCounter}}>
    //   return<CounterProvider>
        return <>
        <ProductProvider>
        {/* <Todoprovider> */}
        {/* <Listprovider> */}
        

        <Router/>
        {/* </Listprovider> */}
        {/* </Todoprovider> */}
        </ProductProvider>
        
        </>


    {/* </SampleContext.Provider> */}
      
  //     </CounterProvider>
  // </SampleContext.Provider>
  
  }
  export default App