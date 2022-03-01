import React, {useEffect} from "react";

import SingleSLider from "../SingleProductSlider";
import Product from '../Products';
import SearchBy from '../SearchBy'
import { useStateValue } from '../../Stateprovider';

const Landing = () =>{
    const [state, dispatch ] = useStateValue()
    // useEffect(()=>{
    //     console.log(state.data);
    // },[state] )
    console.log(state.data);
    
    
    
    return(
        <div className="container">
            <SingleSLider></SingleSLider>
            <SearchBy products={state.data}></SearchBy>
            {/* <Product property="repeat(auto-fit, minmax(225px, 1fr))" products={props.products}></Product> */}
        </div>
        


    );

}


export default Landing;