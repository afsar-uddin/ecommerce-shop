import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
const Container = styled.div`

`

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