import z from 'zod';
export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(6, 'At least 6 characters'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
