import React from 'react';
import StudioIndex from './_components/StudioIndex';

const url = `${process.env.BACKEND_URL}studios?fields=id&populate[seo][fields]=metaTitle,metaDescription`;

export async function generateMetadata() {
  const response = await fetch(url).then((res) => res.json());
  const seoData = response;

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
  };
}

export default function page() {
  return <StudioIndex />;
}
