import React from "react";
import styled from "styled-components";


const Movies = () => {
    return(
        <Container>
            <Wrapper>
            <Text>Recommended for you</Text>
                <CardWrap>
                    <Wrap>
                        <Card><img src="/incredibles.png" alt=""/></Card>
                        <Card><img src="/boss baby.jpg" alt=""/></Card>
                        <Card><img src="/cinderalla.jpg" alt=""/></Card>
                        <Card><img src="/shrek the third.jpg" alt=""/></Card>
                    </Wrap>
                    <Wrap>
                        <Card><img src="/burrow.jpg" alt=""/></Card>
                        <Card><img src="/moana.jpg" alt=""/></Card>
                        <Card><img src="/spiderman.jpg" alt=""/></Card>
                        <Card><img src="/penguine of madagascar.jpg" alt=""/></Card>
                    </Wrap>
                    <Wrap>
                        <Card><img src="/the simpsons.jpg" alt=""/></Card>
                        <Card><img src="/the smurfs.jpg" alt=""/></Card>
                        <Card><img src="/The_Road_to_El_Dorado.jpg" alt=""/></Card>
                        <Card><img src="/tangled2.jpg" alt=""/></Card>
                    </Wrap>
                    <Wrap>
                        <Card><img src="/Garfield2kittens.png" alt=""/></Card>
                        <Card><img src="/frozen2.jpg" alt=""/></Card>
                        <Card><img src="/coco.jpg" alt=""/></Card>
                        <Card><img src="/soul.jpg" alt=""/></Card>
                    </Wrap>                  
                </CardWrap>
            </Wrapper>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
   width: 100%;
   background-color: black;
   display: flex;
   flex-direction: column;
    justify-content: center;
   align-items: center; 
`;
const Wrapper = styled.div`
   width: 90%;
   background-color: transparent;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Text = styled.div`
   width: 100%; 
   height: 50px;
   color: white;
   font-size: 20px;
   font-weight: bold;
   margin-left:  20px;
   display: flex;
   align-items: center;
`;
const CardWrap = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   /* background-color: purple; */
`;
const Wrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   
   @media screen and ( max-width: 768px){
     flex-direction: column;
   }
`;
const Card = styled.div`
    width: 270px;
    height: 270px;
    border-radius: 10px;
    margin: 10px ;

   img{
    width: 100% ;
    height: 100% ;
    border-radius: 10px;
   }

   :hover{
    transform: scale(1.04);
    border : 2px solid white;
    cursor: pointer;
   }
`;



