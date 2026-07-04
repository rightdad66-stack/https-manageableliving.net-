import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  preferredProgram: string;
  timeline: string;
  message: string;
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  phone,
  inquiryType,
  preferredProgram,
  timeline,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Inquiry from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          
          <Section style={section}>
            <Text style={text}><strong>First Name:</strong> {firstName}</Text>
            <Text style={text}><strong>Last Name:</strong> {lastName}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
          </Section>

          <Section style={section}>
            <Text style={text}><strong>Inquiry Type:</strong> {inquiryType || "Not Specified"}</Text>
            <Text style={text}><strong>Preferred Program:</strong> {preferredProgram || "Not Specified"}</Text>
            <Text style={text}><strong>Ideal Timeline:</strong> {timeline || "Not Specified"}</Text>
          </Section>

          <Section style={section}>
            <Text style={text}><strong>Message:</strong></Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
          
          <Text style={footer}>
            This email was automatically generated from the Manageable Living website contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0 40px",
  margin: "30px 0",
};

const section = {
  padding: "0 40px",
  marginBottom: "20px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0",
};

const messageStyle = {
  ...text,
  backgroundColor: "#f4f4f4",
  padding: "12px",
  borderRadius: "4px",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "0 40px",
};

export default ContactEmail;
