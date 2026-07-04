import { z } from "zod";

export const contactFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  inquiry_type: z.string().optional(),
  preferred_program: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export const admissionsFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  dob: z.string().min(1, "Date of birth is required"),
  sobriety_date: z.string().min(1, "Sobriety date is required"),
  doc: z.string().min(1, "Primary substance is required"),
  in_treatment: z.string().min(1, "Treatment status is required"),
  facility_name: z.string().optional(),
  mat_status: z.string().min(1, "MAT status is required"),
  program_type: z.string().min(1, "Program type is required"),
  move_in_date: z.string().min(1, "Move in date is required"),
  legal_issues: z.string().min(1, "Legal issues field is required"),
  ack_testing: z.boolean().refine(val => val === true, "Must agree to testing"),
  ack_meetings: z.boolean().refine(val => val === true, "Must agree to meetings"),
  ack_confidential: z.boolean().refine(val => val === true, "Must agree to confidentiality"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type AdmissionsFormValues = z.infer<typeof admissionsFormSchema>;
