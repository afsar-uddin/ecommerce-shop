import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    margin: 3px;
    width: 100%;
    height: 250px;
    position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
`;

const CategoryItem = (props) => {
    const { title, img, cat } = props.categoryItemProps;
    return (
        <Container>
            <Link to={`/products/${cat}`}>
                <Image src={img} />
                <Info>
                    <Title>{title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    );
};

export default CategoryItem;