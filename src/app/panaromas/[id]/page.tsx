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

  if (!id) notFound();

  const response = await fetch(
    `${process.env.BACKEND_URL}panaromas?populate[img]=true&filters[slug][$eq]=${id}&populate[panaroma_navoptions][fields][0]=option_name`,
  );

  const { data } = await response.json();

  if (!(data.length > 0)) notFound();

  const panaromaData = data?.[0];

  return (
    <Box sx={{ height: '100vh', width: 1 }}>
      <Panorama
        src={panaromaData?.img?.url ? `https://api.rankkit.in${panaromaData?.img?.url}` : null}
        caption={panaromaData?.caption || ''}
        navbar={panaromaData?.panaroma_navoptions?.map((item: any) => item?.option_name) || []}
        lockZoom
      />
    </Box>
  );
}
