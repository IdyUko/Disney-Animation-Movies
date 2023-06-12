import React, {useState} from "react";
import styled from "styled-components";
import {AiFillStar, AiOutlineSearch, AiOutlinePlus} from "react-icons/ai"
import {FcFilmReel} from "react-icons/fc"
import {BiTv} from "react-icons/bi";
import logo from "../Images/disneylogo.svg"
import {FaBars, FaTimes} from "react-icons/fa"

const Header = () => {

        const [toggle, setToggle] = useState(false)

        const handleToggle = () =>{
        setToggle(!toggle)
        }


    return (
        <Div>
            <Wrap>
                <Logo src={logo}  alt="logo"/>
                <Navswrap  toggle={toggle}>
                    <Nav>Home</Nav>
                    <Nav>
                        <AiOutlineSearch/>
                        Search
                    </Nav>
                    <Nav>
                        <AiOutlinePlus/>
                        Watchlist
                    </Nav>
                    <Nav>
                        <AiFillStar/>
                        Original
                    </Nav>
                    <Nav>
                        <FcFilmReel/>
                        Movies
                    </Nav>
                    <Nav>
                        <BiTv/>
                        Series
                    </Nav>
                </Navswrap>

                <BurgerHold onClick={handleToggle}>
                    { toggle ? <FaTimes/> : <FaBars/>}
                </BurgerHold>
            </Wrap>
        </Div>
    )
}

export default Header;

const Div = styled.div`
    width: 100%;
    height: 10vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
`;
const Wrap= styled.div`
   height: 100%;
   width: 90%;
   /* background-color: aqua; */
   display:flex;
   justify-content: space-between;
   align-items: center
`;
const Navswrap = styled.div`
   height: 100%;
   width: 60%;
   /* background-color: goldenrod; */
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 768px){
      flex-direction: column;
      width: 100%;
      position: absolute;
      background-color: dimgrey;
      height: 50vh;
      transition:all ease 1s;
      justify-content: space-evenly;
      left: ${({toggle}) => (toggle? 0 : "-100%")};
      margin-top: 400px;
      z-index: 500;
   }
`;
const Nav = styled.div`
   width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    :hover{
        text-decoration: underline white;
        transition: all 400ms;
    }
`;
const Logo = styled.img`
    width:  15%;
    height: 10vh;
    z-index: 500;
    background-color: transparent;

 img{
    width: 150px;
    height: 150px;
}
`;
const BurgerHold = styled.div`
   background-color: beige;
   display: none;
   z-index: 1;

   @media screen and (max-width: 768px){
      display: flex;
   }
`;