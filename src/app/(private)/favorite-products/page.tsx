 import FavoriteProductsContainer from '@/components/(private)/favorite-products/FavoriteProductsContainer';
import Container from '@/components/shared/Container';
import TopbarBanner from '@/components/shared/TopbarBanner';
import React from 'react';
 
 const FavoriteProducts = () => {
    return (
        <div>
            <TopbarBanner></TopbarBanner>
            <Container className='mt-10'>
                <FavoriteProductsContainer></FavoriteProductsContainer>
            </Container>
        </div>
    );
 };
 
 export default FavoriteProducts;