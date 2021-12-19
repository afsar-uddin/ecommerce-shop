import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';


const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px; 
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-left: 15px;
    `
const ItemNumber = styled.span`
    height: 15px;
    width: 15px;
    line-height: 15px;
    background-color: magenta;
    color: #fff;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    font-size: 10px;
    position: absolute;
    right: -15px;
    top: -10px;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <FaSearch />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <h1>eCom Shop</h1>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <FaShoppingCart style={{ fontSize: 18, color: "grey" }} />
                        <ItemNumber>1</ItemNumber>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;