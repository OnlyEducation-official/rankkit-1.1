/* eslint-disable react/jsx-props-no-spreading */

'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const faqData = [
  {
    title: 'What exactly does RankKit do?',
    description: `We’re a full-stack creative agency that blends branding, web development, media production, SEO, and performance marketing into one powerful offering. From building your brand identity to generating leads through ad campaigns, we handle the entire funnel — strategy to execution.`,
  },
  {
    title: 'How is RankKit different from other marketing agencies?',
    description: `Unlike typical agencies that outsource different services, everything we do — design, development, video production, SEO, paid ads — happens under one roof. This ensures speed, consistency, and creative control across your brand's entire digital journey.`,
  },
  {
    title: 'Do you work with startups or only large brands?',
    description: `We work with both startups and established businesses. Whether you're launching your first product or scaling an existing brand, our team adapts to your stage and industry to craft campaigns that deliver real results.`,
  },
  {
    title: 'What kind of results can I expect?',
    description: `Every project is goal-oriented. Depending on your needs, we help you:
Increase brand awareness through media
Improve SEO visibility and traffic
Generate leads via paid campaigns
Reduce cost-per-acquisition (CPA)
Build long-term digital infrastructure
We measure performance through KPIs like engagement, conversion, reach, and ROI.`,
  },
  {
    title: 'Do you offer ongoing support after a project is delivered?',
    description: `Yes, we offer retainer packages and ongoing maintenance options. Whether it’s content creation, social media management, SEO tracking, or site updates — we stay invested in your growth.`,
  },
  {
    title: 'Can I hire RankKit just for one service (e.g., only video production or only SEO)?',
    description: `Absolutely. While we offer integrated solutions, you're welcome to work with us for specific needs like:
Brand film production
Ad creatives
Social media reels
SEO audits & fixes
Website revamps
We’ll tailor the scope based on your goals.
`,
  },
  {
    title: 'How long does it take to complete a project?',
    description: `Timelines depend on project complexity. For example:
A landing page may take 1–2 weeks
A brand film could take 3–4 weeks
A full digital strategy rollout may span 6–8 weeks
We provide a clear roadmap with deadlines at the start of every project.
`,
  },
  {
    title: 'What industries do you specialize in?',
    description: `Our core experience includes:
Education & EdTech
Hospitality & F&B
Fashion & Lifestyle
Healthcare & Wellness
But we're industry-agnostic in approach. If your brand needs storytelling, performance, and design — we’re in.
`,
  },
  {
    title: 'How do I get started with RankKit?',
    description: `Just head to our contact page or drop us a message. We'll schedule a discovery call to understand your vision, goals, and challenges — then propose a tailored solution.`,
  },
  {
    title: 'Where is your team based?',
    description: `We’re headquartered in Mumbai, but we work with clients across India (and globally). Our hybrid workflow ensures seamless collaboration through calls, shared workspaces, and in-person meetings when needed.`,
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function FaqHomeSection() {
  const [expanded, setExpanded] = React.useState<string | false>(faqData[0].title);

  const handleChange = (panel: string): null => {
    if (expanded === panel) return null;
    setExpanded(panel);
    return null;
  };

  return (
    <Box sx={{ paddingBlock: { xs: 6, md: 12 }, bgcolor: 'grey.300' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{ fontWeight: 600, color: 'error.main', marginBlockEnd: { xs: '30px', md: 4 } }}
        >
          Frequently{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Asked Questions
          </Box>
        </Typography>

        {faqData.map((obj) => (
          <Accordion
            key={obj.title}
            expanded={expanded === obj.title}
            onChange={() => handleChange(obj.title)}
            sx={{ borderRadius: 3 }}
          >
            <AccordionSummary
              slotProps={{
                expandIconWrapper: {
                  sx: {
                    color: expanded === obj.title ? '#fff' : '#0000008a',
                  },
                },
              }}
              aria-controls="panel1d-content"
              id="panel1d-header"
              sx={[
                { borderRadius: 3 },
                expanded === obj.title && {
                  background: 'linear-gradient(90deg, #FC5A4A 0%, #021266 100%)',
                  color: '#fff',
                },
              ]}
            >
              <Typography variant="subtitle1" fontWeight={500}>
                {obj.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2">{obj.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
