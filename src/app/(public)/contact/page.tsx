import ContactContainer from '@/components/(public)/contact/ContactContainer';
import Container from '@/components/shared/Container';
import TopbarBanner from '@/components/shared/TopbarBanner';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <TopbarBanner></TopbarBanner>
            <Container className='mt-10'>
                <ContactContainer></ContactContainer>
            </Container>
        </div>
    );
};

export default ContactPage;