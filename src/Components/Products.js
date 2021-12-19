import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    const [producttems, setProducttems] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProducttems(data.popularProducts))
    }, [])
    return (
        <Container>
            {
                producttems.map(item => <Product
                    key={item.id}
                    productsProps={item}
                ></Product>)
            }
        </Container>
    );
};

export default Products;