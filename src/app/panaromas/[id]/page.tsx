/* eslint-disable @typescript-eslint/no-explicit-any */
import Panorama from '@/app/_components/MyPanoramaComponent';
import { Box } from '@mui/material';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function page({ params }: Props) {
  const { id } = await params;
  console.log('id: ', id);

  if (!id) notFound();

  const response = await fetch(
    `${process.env.BACKEND_URL}panaromas?filters[slug][$eq]=${id}&populate[panaroma_navoptions][fields][0]=option_name`,
  );
  //   console.log('process.env.BACKEND_URL: ', process.env.BACKEND_URL);
  const { data } = await response.json();
  console.log('data: ', data);

  return (
    <Box sx={{ height: '100vh', width: 1 }}>
      <Panorama
        src="/videos/studioOverview.webp"
        caption={data?.[0].caption || ''}
        navbar={data?.[0]?.panaroma_navoptions?.map((item: any) => item?.option_name) || []}
        lockZoom
      />
    </Box>
  );
}
