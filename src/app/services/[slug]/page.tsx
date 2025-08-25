import React from 'react';
import webDevService from '@/assets/images/services-logo/web-dev-service.png';
import brandingService from '@/assets/images/services-logo/branding-services.png';
import creatorNestService from '@/assets/images/services-logo/creator-nest-service.png';
import mediaProductionService from '@/assets/images/services-logo/media-production-service.png';
import seoService from '@/assets/images/services-logo/seo-service.png';
import digitalMarketingService from '@/assets/images/services-logo/digital-marketing-service.png';
import socialMediaService from '@/assets/images/services-logo/social-media-services.png';
import { StaticImageData } from 'next/image';
import { notFound } from 'next/navigation';
import webDevCover from '@/assets/images/services-logo/web-dev-cover.png';
import brandCover1 from '@/assets/images/services-logo/brand-cover-1.png';
import brandCover2 from '@/assets/images/services-logo/brand-cover-2.png';
import cnestCover from '@/assets/images/services-logo/creator-nest-cover.png';
import seoCover1 from '@/assets/images/services-logo/seo-cover-1.png';
import seoCover2 from '@/assets/images/services-logo/seo-cover-2.png';
import digiCover1 from '@/assets/images/services-logo/digi-cover-1.png';
import digiCover2 from '@/assets/images/services-logo/digi-cover-2.png';
import socialMediaCover1 from '@/assets/images/services-logo/socialMediaCover1.png';
import socialMediaCover2 from '@/assets/images/services-logo/socialMediaCover2.png';
import DynamicService from './_components/DynamicService';

export type ServiceType = {
  hero: {
    title: {
      blue: string;
      red: string;
    };
    description: string[];
    image: StaticImageData;
  };
  cover?: {
    full?: {
      img: StaticImageData;
    };
    half?: {
      img1: StaticImageData;
      img2: StaticImageData;
    };
  };
  quotes: {
    text: string;
    author: string;
  }[];
  subServices: {
    description?: string;
    firstSubServices: {
      title?: string;
      points: string[];
    };
    secondSubServices: {
      title?: string;
      points: string[];
    };
    price: {
      value: string;
      description?: string;
    };
  };
};

export type servicePages =
  | 'web-development'
  | 'branding-and-multimedia'
  | 'creator-nest'
  | 'media-production'
  | 'seo-services'
  | 'social-media-management'
  | 'digital-marketing';
export type Service = {
  [K in servicePages]: ServiceType;
};

const service: Service = {
  'web-development': {
    hero: {
      title: {
        blue: 'Web',
        red: 'Development',
      },
      description: [
        'We build fast, secure, and scalable websites, web apps, and e-commerce platforms tailored to your business.',
        'Every project is mobile-first, SEO-ready, and optimized for performance. From custom PWAs to headless CMS solutions, we deliver technology that grows with you.',
      ],
      image: webDevService,
    },
    cover: {
      full: {
        img: webDevCover,
      },
    },
    quotes: [
      {
        text: 'A great website isn’t built to impress—it’s built to perform.',
        author: 'Digital Architecture Insights',
      },
      {
        text: 'Fast, functional, future-ready—that’s what web development should be.',
        author: 'NextGen Tech Review',
      },
      {
        text: 'Your website is your business’s first employee. Make it your best one.',
        author: 'Startup Wisdom',
      },
      {
        text: 'Code is the skeleton. Strategy is the soul. Together, they build growth.',
        author: 'Tech Leadership Forum',
      },
      {
        text: 'Don’t just own a website—own a digital experience that sells for you.',
        author: 'Business Growth Digest',
      },
    ],
    subServices: {
      description:
        'Comprehensive web development solutions designed to elevate your digital presence',
      firstSubServices: {
        title: 'Frontend Development',
        points: [
          'Custom websites, web apps and e-commerce platforms',
          'Mobile-first and SEO-friendly designs',
          'Progressive Web Apps (PWAs) for speed and offline use',
        ],
      },
      secondSubServices: {
        title: 'Backend Development',
        points: [
          'API integrations with secure backend systems',
          'Headless CMS setups (Next.js, Strapi, etc.)',
          'Scalable architecture with optimized databases',
        ],
      },
      price: {
        value: '9,999',
        description: 'Get started with professional web development today',
      },
    },
  },
  'branding-and-multimedia': {
    hero: {
      title: {
        blue: 'Branding',
        red: '& Multimedia',
      },
      description: [
        'We create unique brand identities that make a lasting impression.',
        `From logos and style guides to marketing collateral and motion graphics, our designs ensure consistency and recognition. Every visual we craft tells your brand’s story.`,
      ],
      image: brandingService,
    },
    cover: {
      half: {
        img1: brandCover1,
        img2: brandCover2,
      },
    },
    quotes: [
      {
        text: 'Logos fade. Stories last. Branding is what people remember.',
        author: 'Brand Philosophy Journal',
      },
      {
        text: 'Your brand isn’t what you say—it’s what people feel after seeing you.',
        author: 'Design Psychology Review',
      },
      {
        text: 'Design without meaning is decoration. Branding makes it identity.',
        author: 'Creative Edge',
      },
      {
        text: 'Every pixel, every package, every post—crafted for trust and recall.',
        author: 'Visual Identity Lab',
      },
      {
        text: 'Stand out not by being louder, but by being unforgettable.',
        author: 'Brand Strategy Network',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'Unique brand identities and professional logos',
          'Complete brand style guides for consistency',
          'Marketing collateral for print and digital campaigns',
        ],
      },
      secondSubServices: {
        points: [
          'Motion graphics and animated assets',
          'Social media creative designs',
          'Consistent, memorable visual storytelling',
        ],
      },
      price: {
        value: '14,999',
      },
    },
  },
  'creator-nest': {
    hero: {
      title: {
        blue: 'CreatorNest',
        red: '(Exclusive)',
      },
      description: [
        'We help creators, influencers, and educators build powerful personal brands and grow strategically.',
        'From professional studio content to platform-specific strategies, we make your work stand out. With growth roadmaps and monetization plans.',
      ],
      image: creatorNestService,
    },
    cover: {
      full: {
        img: cnestCover,
      },
    },
    quotes: [
      {
        text: 'From zero to influence—your growth has a blueprint.',
        author: 'Influencer Growth Hub',
      },
      {
        text: 'Your content deserves more than views—it deserves value.',
        author: 'Creator Economy Insights',
      },
      {
        text: 'Creators aren’t born viral—they’re built with clarity and strategy.',
        author: 'Digital Creator Journal',
      },
      {
        text: 'Every follower gained should be a believer earned.',
        author: 'Audience Trust Review',
      },
      {
        text: 'Turn creativity into credibility, and credibility into income.',
        author: 'Personal Branding Academy',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'Monetization roadmaps for brand deals and products',
          'Social media optimization across platforms',
          'Analytics and performance tracking',
        ],
      },
      secondSubServices: {
        points: [
          'Email marketing and automation',
          'Influencer and affiliate partnerships',
          'Landing page and conversion rate optimization',
        ],
      },
      price: {
        value: '29,999',
      },
    },
  },
  'media-production': {
    hero: {
      title: {
        blue: 'Media',
        red: 'Production',
      },
      description: [
        'We produce high-quality, story-driven content that captures attention and builds trust.',
        'Whether it’s professional product photography, immersive 360° views, or full-scale event coverage, our production team delivers with cinematic quality. Studio shoots, podcasts, and webinars are handled end-to-end',
      ],
      image: mediaProductionService,
    },
    // coverImg: {
    //   img1: mediaProductionService,
    //   img2: mediaProductionService,
    // },
    quotes: [
      {
        text: 'Every frame should sell a story. Every story should sell your brand.',
        author: 'Film & Marketing Review',
      },
      {
        text: 'Content isn’t king—impactful content is.',
        author: 'Visual Strategy Digest',
      },
      {
        text: 'Visuals don’t just attract eyes—they capture hearts and wallets.',
        author: 'Creative Marketing Insights',
      },
      {
        text: 'From reels to ad films, we shoot not just for attention, but for action.',
        author: 'Content Performance Journal',
      },
      {
        text: 'Production is art, but conversion is the masterpiece.',
        author: 'Ad Film Society',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'High-quality brand films and promotional videos',
          'Short-form content for Reels, Shorts, and TikTok',
          'Product photography and 360° showcases',
        ],
      },
      secondSubServices: {
        points: [
          'Event coverage and highlight reels',
          'Podcast, webinar, and studio production',
          'Professional editing, sound, and motion graphics',
        ],
      },
      price: {
        value: '7,999',
      },
    },
  },
  'seo-services': {
    hero: {
      title: {
        blue: 'SEO',
        red: 'Services',
      },
      description: [
        'We boost your online visibility with tailored SEO strategies.',
        'Our approach covers on-page, off-page, and technical optimization, backed by keyword research and local SEO Ensuring higher rankings and more targeted traffic.',
      ],
      image: seoService,
    },
    cover: {
      half: {
        img1: seoCover1,
        img2: seoCover2,
      },
    },
    quotes: [
      {
        text: 'If you’re not ranking, you’re not relevant.',
        author: 'Search Engine World',
      },
      {
        text: 'Traffic is good. Targeted traffic is gold.',
        author: 'Digital Growth Weekly',
      },
      {
        text: 'SEO is not a cost—it’s compounding digital equity.',
        author: 'Marketing Strategy Insights',
      },
      {
        text: 'Google rewards trust. We help you earn it.',
        author: 'SEO Leadership Forum',
      },
      {
        text: 'Ranking isn’t luck. It’s strategy + execution.',
        author: 'Search Strategy Digest',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'In-depth SEO audits and strategy planning',
          'On-page optimization for better rankings',
          'Technical SEO for site speed and mobile readiness',
        ],
      },
      secondSubServices: {
        points: [
          'Keyword research and competitor analysis',
          'Local SEO and Google Business Profile management',
          'Quality backlink building with white-hat methods',
        ],
      },
      price: {
        value: '12,999',
      },
    },
  },
  'digital-marketing': {
    hero: {
      title: {
        blue: 'Digital',
        red: 'Marketing',
      },
      description: [
        `Visibility starts with search. We help your brand rank higher on Google, drive organic traffic, and convert leads Without relying solely on ads.`,
        'Our SEO strategies are rooted in research, optimized for performance, and built for long-term growth.',
      ],
      image: digitalMarketingService,
    },
    cover: {
      half: {
        img1: digiCover1,
        img2: digiCover2,
      },
    },
    quotes: [
      {
        text: 'Ads are easy. Conversions are strategy.',
        author: 'Performance Marketing Review',
      },
      {
        text: 'We don’t chase clicks—we create customers.',
        author: 'Growth Hacking Insights',
      },
      {
        text: 'Digital marketing isn’t about reach. It’s about resonance.',
        author: 'Engagement Strategy Journal',
      },
      {
        text: 'Data gives direction. Creativity makes it move.',
        author: 'Campaign Intelligence Report',
      },
      {
        text: 'Our campaigns don’t just run—they run growth engines.',
        author: 'Marketing Innovation Forum',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'End-to-end digital campaign planning',
          'Paid ads on Google, Meta, and other platforms',
          'Organic social media growth and engagement',
        ],
      },
      secondSubServices: {
        points: [
          'Email marketing and automation',
          'Influencer and affiliate partnerships',
          'Landing page and conversion rate optimization',
        ],
      },
      price: {
        value: '24,999',
      },
    },
  },
  'social-media-management': {
    hero: {
      title: {
        blue: 'Social Media',
        red: 'Management',
      },
      description: [
        `We help your brand shine online with impactful social media strategies.`,
        'From content calendars to creative design, ad management, and community building, we ensure your brand voice connects, engages, and grows across every platform.',
      ],
      image: socialMediaService,
    },
    cover: {
      half: {
        img1: socialMediaCover1,
        img2: socialMediaCover2,
      },
    },
    quotes: [
      {
        text: 'Ads are easy. Conversions are strategy.',
        author: 'Performance Marketing Review',
      },
      {
        text: 'We don’t chase clicks—we create customers.',
        author: 'Growth Hacking Insights',
      },
      {
        text: 'Digital marketing isn’t about reach. It’s about resonance.',
        author: 'Engagement Strategy Journal',
      },
      {
        text: 'Data gives direction. Creativity makes it move.',
        author: 'Campaign Intelligence Report',
      },
      {
        text: 'Our campaigns don’t just run—they run growth engines.',
        author: 'Marketing Innovation Forum',
      },
    ],
    subServices: {
      firstSubServices: {
        points: [
          'Tailored content strategy & monthly calendars',
          'Engaging post designs, reels & stories',
          'Community management & audience engagement',
        ],
      },
      secondSubServices: {
        points: [
          'Social media ads (Meta, Instagram, LinkedIn, YouTube)',
          'Analytics & performance reporting with insights to refine campaigns ',
          'Influencer & collaboration strategy to build credibility and expand audience reach.',
        ],
      },
      price: {
        value: '19,999',
      },
    },
  },
};

export default async function page({ params }: { params: Promise<{ slug: servicePages }> }) {
  const { slug } = await params;
  if (!service[slug]) notFound();
  return <DynamicService service={service[slug]} slug={slug} />;
}
