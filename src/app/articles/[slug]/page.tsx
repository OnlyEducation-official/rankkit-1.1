import { notFound } from 'next/navigation';
import SingleArticleIndex from './_components/SingleArticleIndex';

type Image = {
  alternativeText: string;
  documentId: string;
  id: number;
  url: string;
};

export type Article = {
  description: string;
  documentId: string;
  id: number;
  slug: string;
  title: string;
  image: Image;
  ckeditor_content: string;
  createdAt: Date;
  readingTime: string;
  recommendedArticle: boolean;
};

export default async function page({ params }: { params: Promise<{ slug: Article }> }) {
  const { slug } = await params;
  if (!slug) notFound();

  const url = `${process.env.BACKEND_URL}articles?filters[slug][$eq]=${slug}&populate[seo][fields]=metaTitle,metaDescription&populate[image][fields][0]=url&populate[image][fields][1]=alternativeText`;

  const response = await fetch(url).then((res) => res.json());

  return <SingleArticleIndex article={response.data[0]} />;
}
