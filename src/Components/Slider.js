import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "block", height: "auto" })}
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    line-height: 50px;
    background-color: #f9f9f9;
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    top: 0;
    bottom: 0; 
    margin: auto;
    cursor: pointer;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: 1.5s all ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    paddint: 50px;
`
const Title = styled.h1`
    font-size: 50px;
`
const Desc = styled.p`
    font-size: 20px;
    margin: 50px 0;
`
const Button = styled.button`
    background-color: magenta;
    color: #fff;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [sliders, setSlider] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setSlider(data.sliderItems))
    }, [])

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <FaArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliders.map(slider => <Slide bg={slider.bg} key={slider.id}>
                        <ImgContainer>
                            <Image src={slider.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{slider.title}</Title>
                            <Desc>{slider.desc}</Desc>
                            <Button>Shop now</Button>
                        </InfoContainer>
                    </Slide>)
                }

            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <FaArrowRight />
            </Arrow>
        </Container>
    );
};

export default Slider;