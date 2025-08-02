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

  message: z.string().min(4, 'Message must be at least 4 characters long'),
});

export type ContactFormScehmaType = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
