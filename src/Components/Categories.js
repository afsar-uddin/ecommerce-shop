import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const Container = styled.div`

`

const Categories = () => {
    const [catItems, setCatItems] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCatItems(data.categories))
    }, [])
    return (
        <Container>
            {
                catItems.map(item => <CategoryItem
                    key={item.id}
                    categoryItemProps={item}
                ></CategoryItem>)
            }
        </Container>
    );
};

export default Categories;