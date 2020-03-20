import React  from "react";
import home1 from "../img/home1.png";
// import home2 from "../img/home2.png";
// import home3 from "../img/home3.png";
// import home5 from "../img/home5.png";
import styled from "styled-components";




function Home(){
    return (
        <ImgStyle>
            <img src={home1} alt="home1" />
        </ImgStyle>


    );
}

export default Home;



const ImgStyle = styled.div`
width: 15px;
height: 15px;
padding: 100px;
margin-top:20px; /*to have the space above the image*/
margin-bottom:200px; /*to have the space under the image*/
`


