import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface AdmissionsEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  sobrietyDate: string;
  doc: string;
  inTreatment: string;
  facilityName: string;
  matStatus: string;
  programType: string;
  moveInDate: string;
  legalIssues: string;
}

export const AdmissionsEmail = ({
  firstName,
  lastName,
  email,
  phone,
  dob,
  sobrietyDate,
  doc,
  inTreatment,
  facilityName,
  matStatus,
  programType,
  moveInDate,
  legalIssues,
}: AdmissionsEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Admissions Application from {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Admissions Application</Heading>
          
          <Section style={section}>
            <Heading as="h2" style={h2}>Applicant Information</Heading>
            <Text style={text}><strong>Name:</strong> {firstName} {lastName}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Date of Birth:</strong> {dob}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Clinical & Recovery History</Heading>
            <Text style={text}><strong>Sobriety/Clean Date:</strong> {sobrietyDate}</Text>
            <Text style={text}><strong>Drug of Choice (DOC):</strong> {doc}</Text>
            <Text style={text}><strong>In Treatment?</strong> {inTreatment}</Text>
            <Text style={text}><strong>Facility Name:</strong> {facilityName || "N/A"}</Text>
            <Text style={text}><strong>MAT Status:</strong> {matStatus}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>Housing & Legal</Heading>
            <Text style={text}><strong>Program Type:</strong> {programType}</Text>
            <Text style={text}><strong>Move-In Date:</strong> {moveInDate}</Text>
            <Text style={text}><strong>Legal Issues:</strong> {legalIssues}</Text>
          </Section>

          <Hr style={hr} />
          
          <Text style={footer}>
            This email was automatically generated from the Manageable Living website admissions form. The applicant has agreed to all required policies including drug testing, 12-step attendance, and confidentiality.
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

const h2 = {
  color: "#555",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0 10px",
};

const section = {
  padding: "0 40px",
  marginBottom: "20px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  padding: "0 40px",
};

export default AdmissionsEmail;
