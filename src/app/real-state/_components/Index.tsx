import React from 'react';
import HeroSectionRealEstate from './HeroSectionRealEstate';
import CardSection from './CardSection';
import OurWorkSection from './OurWorkSection';
import HeroSection from './HeroSection';
import ThreeDWalkThrough from './ThreeDWalkThrough';

export default function Index() {
  return (
    <>
      {/* <HeroSection /> */}
      <ThreeDWalkThrough />
      <HeroSectionRealEstate />
      <CardSection />
      <OurWorkSection />
    </>
  );
}
