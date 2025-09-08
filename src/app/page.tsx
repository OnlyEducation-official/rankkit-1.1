// import Homes from './_components/Home';
import Index from './_components/Index';

const url = `${process.env.BACKEND_URL}homes?fields=id&populate[seo][fields]=metaTitle,metaDescription&populate[seo][populate][shareImage][fields]=url,alternativeText&populate[Hero][fields]=title&populate[Hero][populate][hero_video][fields]=url,alternativeText`;

export async function generateMetadata() {
  const response = await fetch(url).then((res) => res.json());
  const seoData = response.data?.[0].seo;

  return {
    title: seoData?.metaTitle,
    description: seoData?.metaDescription,
  };
}

export default function Home() {
  return <Index />;
}
