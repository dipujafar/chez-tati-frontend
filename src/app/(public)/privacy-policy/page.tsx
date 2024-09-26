import PrivacyPolicyContainer from "@/components/(public)/privacy-policy/PrivacyPolicyContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-10">
        <PrivacyPolicyContainer></PrivacyPolicyContainer>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
