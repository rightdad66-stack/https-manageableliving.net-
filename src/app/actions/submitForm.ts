"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/emails/ContactEmail";
import AdmissionsEmail from "@/emails/AdmissionsEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const destinationEmails = process.env.FORM_DESTINATION_EMAILS?.split(",") || ["info@manageablegroup.com"];

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

type ContactFormValues = z.infer<typeof contactFormSchema>;
type AdmissionsFormValues = z.infer<typeof admissionsFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  try {
    const validatedData = contactFormSchema.parse(data);

    const { data: resendData, error } = await resend.emails.send({
      from: "Manageable Living <info@manageableliving.net>",
      to: destinationEmails,
      subject: `New Contact Inquiry from ${validatedData.first_name} ${validatedData.last_name}`,
      react: ContactEmail({
        firstName: validatedData.first_name,
        lastName: validatedData.last_name,
        email: validatedData.email,
        phone: validatedData.phone,
        inquiryType: validatedData.inquiry_type || "",
        preferredProgram: validatedData.preferred_program || "",
        timeline: validatedData.timeline || "",
        message: validatedData.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email via Resend." };
    }

    return { success: true, data: resendData };
  } catch (err) {
    console.error("Form processing error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function submitAdmissionsForm(data: AdmissionsFormValues) {
  try {
    const validatedData = admissionsFormSchema.parse(data);

    const { data: resendData, error } = await resend.emails.send({
      from: "Manageable Living <info@manageableliving.net>",
      to: destinationEmails,
      subject: `New Admissions Application: ${validatedData.first_name} ${validatedData.last_name}`,
      react: AdmissionsEmail({
        firstName: validatedData.first_name,
        lastName: validatedData.last_name,
        email: validatedData.email,
        phone: validatedData.phone,
        dob: validatedData.dob,
        sobrietyDate: validatedData.sobriety_date,
        doc: validatedData.doc,
        inTreatment: validatedData.in_treatment,
        facilityName: validatedData.facility_name || "",
        matStatus: validatedData.mat_status,
        programType: validatedData.program_type,
        moveInDate: validatedData.move_in_date,
        legalIssues: validatedData.legal_issues,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send email via Resend." };
    }

    return { success: true, data: resendData };
  } catch (err) {
    console.error("Form processing error:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
