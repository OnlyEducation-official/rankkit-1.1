import React from 'react';
import ServicesIndex from './_components/ServicesIndex';

const url = `${process.env.BACKEND_URL}services?filters[slug][$eq]=all-service&populate[seo][fields]=metaTitle,metaDescription`;
export async function generateMetadata() {
  const response = await fetch(url).then((res) => res.json());
  const seoData = response.data?.[0]?.seo;

  return {
    title: seoData?.metaTitle,
    description: seoData?.metaDescription,
  };
}

export default function Page() {
  return <ServicesIndex />;
}
