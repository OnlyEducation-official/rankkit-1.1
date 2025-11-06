import React from 'react';
import HeroSectionRealEstate from './HeroSectionRealEstate';
import CardSection from './CardSection';
import OurWorkSection from './OurWorkSection';
import HeroSection from './HeroSection';

export default function Index() {
  return (
    <>
      <HeroSection />
      <HeroSectionRealEstate />
      <CardSection />
      <OurWorkSection />
    </>
  );
}
