import React, {useEffect} from "react";
import { createContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Product from "./components/Products";
import Error from './components/Error'
import Contact from './components/Contact'
import About from './components/About'
import Landing from './components/Landing'
import AdminPage from './components/AdminPanel'
import LoginPage from './components/Login'
import SingleProduct from './components/SingleProduct'
import { useFetch } from './components/customhook/2-useFetch'
import "slick-carousel/slick/slick-theme.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useStateValue } from './Stateprovider';


function App() {
  const {loading, products} = useFetch('http://localhost:3001/table')
  const [state, dispatch ] = useStateValue()
  // console.log(state.data);


  useEffect(() => {
    
    if (loading == false) {

      dispatch({
      type:'ADD',
      data:products[0].data[0]
    })
    }
    
    
  },[loading])
  if (loading){
    return(
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
            <Box sx={{ display: 'flex' , justifyContent: 'center'}}>
                        <CircularProgress />
            </Box>
          </div>
        </Router>
      </div>
    )
  }else{
    // console.log(state.data);
      return (
    <div className="App">
      <Router>
        <Header products={state}></Header>
        <Routes>
          {/* <Route path="/product" element={<Product/>}/>
            
          <Route path="/singleproduct" element={<SingleProduct/>} />  */}


          <Route exact path="/" element={<Landing  />} />
            
          
      
          <Route path="/about" element={<About />} />
            
         

          <Route path="/contact"  element={ <Contact img="simplebackground.jpg"/>} />
           
          

          <Route path="/admin-panel" element={<AdminPage/>} />
            
         

          <Route path='/login' element={<LoginPage img="simplebackground.jpg"/>} />
            
          

          <Route path="*" element={<Error errormessage="Page Not found" redire=""/>} />
            
          

        </Routes>
      </Router>
      
      
    </div>
  );
  }
}


export default App;
