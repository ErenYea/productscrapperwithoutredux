
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Search = ( props ) => {
    const [text,setText] = useState('')
    const [dataexist,setdataexist] = useState(false)
    const [emptysearch,setemptysearch] = useState(false);
    const [data,setdata] = useState([])
    let history = useNavigate();
    
    
    
    
   
    const Searchthis = (te) =>{
        var result = []
        // console.log(props.products[0].data[0]);
        props.products[0].data[0].forEach((product,index)=>{
            if (product.product_title.toLowerCase().match(te.toLowerCase())){
                // console.log(product.product_title);
                result = [...result, product]
            }

        })
        // console.log(te)
        if (result.length==0){
            setemptysearch(true)
        }
        setdata(result)
        setdataexist(true)
        
        
       
        
    }
    let prevLocation;
    useEffect(() => {
        // if (resp==""){
        //     setdata([])
        // }
        console.log(data);
    //     history.listen(nextLocation => {
    //         prevLocation = nextLocation;
    //         // console.log(prevLocation);
            
    //         if ((prevLocation !== undefined) && ((prevLocation.pathname === '/singleproduct'))){
    //             setemptysearch(false)
    //             setdataexist(false)
    //         }
    //         // ...
    //         prevLocation = nextLocation;
    // });

    },[data,dataexist])
   
        


  if ((data.length != 0)&&(dataexist)){
    //   setdataexist(false)
      
      return(<Navigate to={{ pathname:'/singleproduct', state:data}}/>)
  }
  else if ((data.length == 0)&&(emptysearch)){
      return(<Navigate to={{ pathname:'/singleproduct', state:data}}/>)
  }
  else{
      
  return (
      <CustomSearch>
          
         <CustomTextField>
              <CustomInput id="outlined-basic" label="Search here" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Search Here"></CustomInput>
              {/* <TextField id="outlined-basic" label="Search here" variant="outlined"  value={text} onChange={(e)=>{setText(e.target.value)}}  sx={{height:'50%'}} inputProps={inputProps}/> */}
              <CustomSearchIcon>
                <SearchIcon  onClick={()=>Searchthis(text)} sx={{ color: "black" }}/>
              </CustomSearchIcon>
              
          </CustomTextField> 
          
      </CustomSearch>
  );
};
}
const CustomSearch = styled.div`
    background:white;
    border-radius:20px; 
    display:flex;
    justify-content:space-between;
    margin-right:0px;
    margin-left:120px;
    width:400px;
    height:40px;
    

`
const CustomInput = styled.input`
width:400px;
border-radius:20px;
padding:10px;
height:40px;

`
const CustomTextField = styled.div`
    margin-right: 0px;
    display:flex;
    // border:2px solid black;
    height:30px;


`
const CustomSearchIcon = styled.div`
    // border: 2px solid red;
    display:flex;
    position:absolute;
    flex-direction: column;
    m

    justify-content:center;
    align-items:center;
    cursor:pointer;
    // background-color: blue;
    border-radius:40px;
    margin-left:370px;
    margin-top:8px;
    width:30px;

`

export default Search;
