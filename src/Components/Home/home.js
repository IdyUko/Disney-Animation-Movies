import React from "react";
import styled from "styled-components";
import Slider from "../Slider/slider";
import Tabs from "../Tabs/tabs" ;
import MoviesTabs from "../MoviesTabs/movies" ;


const Home = () =>{
    return(
        <Container>
            <Slider/>
            <Tabs/>
            <MoviesTabs/>
        </Container>
    )
}
export default Home;


const Container = styled.div`
    width: 100%;
   height: auto;
   background-color: transparent;
`;