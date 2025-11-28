import { isValidNumber } from 'libphonenumber-js';
import z from 'zod';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(4, 'Name must be at least 4 characters long')
    .max(50, 'Name cannot exceed 50 characters'),

  phone: z.string().refine((value) => isValidNumber(value, 'IN'), {
    message: 'Invalid phone number',
  }),

  orgname: z.string().optional(),

  email: z.email({ message: 'Invalid email address' }),

  services: z.array(z.string()).optional(),

  hearAboutUs: z.array(z.string()).optional(),

  message: z.string().optional(),
});

export const marketingFormLeadSchema = z
  .object({
    name: z
      .string()
      .min(4, 'Name must be at least 4 characters long')
      .max(50, 'Name cannot exceed 50 characters'),
    phone: z.string().refine((value) => isValidNumber(value, 'IN'), {
      message: 'Invalid phone number',
    }),
    email: z.email({ message: 'Invalid email address' }),
    services: z.array(z.string()).min(1, 'Please select at least one service'),
    message: z.string().optional(),
    minValue: z.number().min(0, 'Minimum value required'),
    maxValue: z.number().min(0, 'Maximum value required'),
  })
  .refine((data) => data.maxValue > data.minValue, {
    message: 'maxValue must be greater than minValue',
    path: ['maxValue'],
  });

export type ContactFormScehmaType = z.infer<typeof contactFormSchema>;
export type marketingFormLeadType = z.infer<typeof marketingFormLeadSchema>;

export default contactFormSchema;
