import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Product from './Product'
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Index = ( props ) =>{
    const [dataexist,setdataexist] = useState(false)
    const [data,setdata] = useState([])
    let history = useNavigate();
    const [emptysearch, setemptysearch] = useState(false)
    // console.log(props.products[0].data[0]);

    const searchby = (product_title)=>{
        // console.log(product_title);
        var result = []
        props.products[0].data[0].forEach((product,index)=>{
            if (product.product_title.match(product_title)){
                // console.log(product.product_title);
                result = [...result, product]
            }
        })
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
        // console.log(data);
        // history.listen(nextLocation => {
        //     prevLocation = nextLocation;
        //     // console.log(prevLocation);
            
        //     if ((prevLocation !== undefined) && ((prevLocation.pathname === '/'))){
        //         setemptysearch(false)
        //         setdataexist(false)
                
        //     }
            // ...
            // prevLocation = nextLocation;
    // });

    },[data,dataexist])
   if ((data.length != 0)&&(dataexist)){
    //   setdataexist(false)
      
      return(<Navigate to={{ pathname:'/product', state:data}}/>)
    }else if ((data.length == 0)&&(emptysearch)){
        return(<Navigate to={{ pathname:'/product', state:data}}/>)
    }
  
  else{
    return(
        <div className="container">
            <CustomDiv> 
                <CustomHeading>Search By</CustomHeading>
                <section className='products'  style={{ gridTemplateColumns: `repeat(auto-fit, minmax(225px, 1fr))` }}>
                    <Product searchby={searchby}  item_number={1} product_title="HP" product_url="" image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png" price=""/>
                    <Product searchby={searchby}  item_number={2} product_title="Playstation" product_url="" image_url="https://techcrunch.com/wp-content/uploads/2017/06/playstation-logo.jpg" price=""/>
                    <Product searchby={searchby}  item_number={3} product_title="Dell" product_url="" image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/640px-Dell_logo_2016.svg.png" price=""/>
                    <Product searchby={searchby}  item_number={4} product_title="Call of Duty" product_url="" image_url="https://site-cdn.givemesport.com/images/21/02/20/4044443afde1780304e129bf95e93a4a/1216.jpg" price=""/>
                    <Product searchby={searchby}  item_number={5} product_title="Apple" product_url="" image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" price=""/>
                    <Product searchby={searchby}  item_number={6} product_title="Samsung" product_url="" image_url="https://assets.turbologo.com/blog/en/2019/07/19085113/samsung-logo-1993.jpg" price=""/>
                    <Product searchby={searchby}  item_number={7} product_title="Intel" product_url="" image_url="https://s.yimg.com/uu/api/res/1.2/LKbP2pGn8_kfkFQ5QkWTyg--~B/Zmk9ZmlsbDtoPTM5Mjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/3a4713d0-ed98-11ea-8b3d-4e1e3ba3751f.cf.jpg" price=""/>
                    <Product searchby={searchby}  item_number={8} product_title="AMD" product_url="" image_url="https://www.amd.com/system/files/2020-06/amd-default-social-image-1200x628.jpg" price=""/>
                </section>
                
            </CustomDiv>
        </div>
        


    );

}
}
const CustomHeading = styled.h1`
//   border:2px solid green;
  text-transform: uppercase;
  padding-x: 3px;
  font-size:42px;
`
const CustomDiv = styled.div`
  // border:2px solid red;
  margin-top:100px;
  
`

export default Index;