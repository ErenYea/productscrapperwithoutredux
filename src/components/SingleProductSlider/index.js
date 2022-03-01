import Slider from "react-slick";
import React from "react";
import styled from 'styled-components'


const SingleSLider = ()=>{

    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true

    }

    return(
        <Carousel {...settings} className="review">
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-38b1/k2-_9d3bd5b6-5114-49f5-bc74-8de1cf116333.v1.jpg">
                
                
            </Wraps>
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-3dfa/k2-_fc0f8dd8-8596-441a-90c4-43b2d23a2f34.v1.jpg">
                
            </Wraps>
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-b616/k2-_bde06e1e-d176-4d81-a830-162846b8ac23.v1.jpg">
                
            </Wraps>
            <Wraps img="https://www.czone.com.pk/images/banners/236.jpg">
                
            </Wraps>
            <Wraps img="https://czone.com.pk/images/banners/232.jpg">
                
            </Wraps>
            <Wraps img="https://czone.com.pk/images/banners/229.jpg">
                
            </Wraps>
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-3dfa/k2-_fc0f8dd8-8596-441a-90c4-43b2d23a2f34.v1.jpg">
                
            </Wraps>
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-38b1/k2-_9d3bd5b6-5114-49f5-bc74-8de1cf116333.v1.jpg">
                
            </Wraps>
            <Wraps img="https://i5.walmartimages.com/dfw/4ff9c6c9-8519/k2-_e8c5d237-4d16-40b7-8141-213960289dc0.v1.jpg">
                
            </Wraps>
            


        </Carousel>
    )

}


const Carousel = styled(Slider)`
    // border: 2px solid red;
    // height :200px;
    // align-items:center;
    // justify-content: center;
    margin-top:150px;
    padding:10px;


`

const Wraps = styled.div`
    display:block;
    // background:grey;
    // display:flex;
    // justify-content: space-between;
    padding:20px;
    // border: 2px solid green;
    height:477px;
    background-image:${(props)=>`url('${props.img}')`};
    background-size: cover;
    // background-position: center;
    backgroung-repeat: no-repeat;

`




export default SingleSLider;