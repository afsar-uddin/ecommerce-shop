import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal ;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`

const Anouncement = () => {
    return (
        <Container>
            Your needs, Our value makes you satisfy!
        </Container>
    );
};

export default Anouncement; 