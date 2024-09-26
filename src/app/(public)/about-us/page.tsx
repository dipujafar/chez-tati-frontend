import AboutUsContainer from "@/components/(public)/about-us/AboutUsContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-10">
        <AboutUsContainer></AboutUsContainer>
      </Container>
    </div>
  );
};

export default AboutPage;
