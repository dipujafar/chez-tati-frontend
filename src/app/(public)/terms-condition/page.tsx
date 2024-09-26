import TermsContainer from '@/components/(public)/terms/TermsContainer';
import Container from '@/components/shared/Container';
import TopbarBanner from '@/components/shared/TopbarBanner';
import React from 'react';

const TermsPage = () => {
    return (
        <div>
             <TopbarBanner></TopbarBanner>
      <Container className="mt-10">
        <TermsContainer></TermsContainer>
      </Container>
        </div>
    );
};

export default TermsPage;