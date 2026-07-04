"use server";

import { Resend } from "resend";
import { z } from "zod";
import ContactEmail from "@/emails/ContactEmail";
import AdmissionsEmail from "@/emails/AdmissionsEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const destinationEmails = process.env.FORM_DESTINATION_EMAILS?.split(",") || ["info@manageablegroup.com"];
import { contactFormSchema, admissionsFormSchema, ContactFormValues, AdmissionsFormValues } from "@/lib/schemas";
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
