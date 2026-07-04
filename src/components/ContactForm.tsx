"use client";

import { useState } from "react";
import SlideUp from "./SlideUp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContactForm, contactFormSchema } from "@/app/actions/submitForm";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof ContactFormValues)[] = [];
    if (step === 1) fieldsToValidate = ["first_name", "last_name", "email", "phone"];
    else if (step === 2) fieldsToValidate = ["inquiry_type", "preferred_program", "timeline"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);
    const result = await submitContactForm(data);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      setServerError(result.error || "An error occurred while submitting the form.");
    }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden" id="contact-form-anchor">
      <div className="bg-dark text-light p-4 p-md-5">
        <h2 className="fs-3 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Secure Message</h2>
        <p className="text-secondary mb-4">Please fill out the form below. All inquiries are 100% confidential and reviewed directly by our care team.</p>

        <div className="position-relative mt-5 mb-2" aria-hidden="true">
          <div className="progress" style={{ height: '4px' }}>
            <div 
              className="progress-bar bg-warning" 
              role="progressbar" 
              style={{ width: `${(step - 1) * 50}%`, transition: 'width 0.4s ease' }}
              aria-valuenow={(step - 1) * 50} 
              aria-valuemin={0} 
              aria-valuemax={100}
            ></div>
          </div>
          <div className="d-flex justify-content-between position-absolute top-50 start-0 w-100 translate-middle-y px-1">
            <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 1 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>1</div>
            <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 2 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>2</div>
            <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 3 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>3</div>
          </div>
        </div>
      </div>

      <div className="p-4 p-md-5 bg-charcoal">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} id="ml-contact-form">
            
            {serverError && (
              <div className="alert alert-danger mb-4">
                {serverError}
              </div>
            )}

            {/* STEP 1: Basic Info */}
            <div className={`${step === 1 ? 'd-block' : 'd-none'}`}>
              <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">Your Contact Information</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_first_name">First Name *</label>
                  <input type="text" className={`form-control bg-charcoal text-light border-secondary bg-black border-0 ${errors.first_name ? 'is-invalid' : ''}`} id="cnt_first_name" placeholder="Jane" {...register("first_name")} />
                  {errors.first_name && <div className="invalid-feedback">{errors.first_name.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_last_name">Last Name *</label>
                  <input type="text" className={`form-control bg-charcoal text-light border-secondary bg-black border-0 ${errors.last_name ? 'is-invalid' : ''}`} id="cnt_last_name" placeholder="Doe" {...register("last_name")} />
                  {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_email">Email Address *</label>
                  <input type="email" className={`form-control bg-charcoal text-light border-secondary bg-black border-0 ${errors.email ? 'is-invalid' : ''}`} id="cnt_email" placeholder="jane@example.com" {...register("email")} />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_phone">Phone Number *</label>
                  <input type="tel" className={`form-control bg-charcoal text-light border-secondary bg-black border-0 ${errors.phone ? 'is-invalid' : ''}`} id="cnt_phone" placeholder="(123) 456-7890" {...register("phone")} />
                  {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>
              </div>
              <div className="d-flex justify-content-end mt-5 pt-3 border-top">
                <button type="button" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase hover-warning transition-all" onClick={nextStep}>Next Step &rarr;</button>
              </div>
            </div>

            {/* STEP 2: Needs/Inquiry Type */}
            <div className={`${step === 2 ? 'd-block' : 'd-none'}`}>
              <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">How Can We Help?</h3>
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-bold text-secondary small text-uppercase">I am reaching out regarding: *</label>
                  <select className={`form-select bg-charcoal text-light border-secondary bg-black border-0 ${errors.inquiry_type ? 'is-invalid' : ''}`} id="cnt_inquiry_type" {...register("inquiry_type")}>
                    <option value="" disabled>Please select an option</option>
                    <option value="Self Admission">Admissions for myself</option>
                    <option value="Family Member Admission">Admissions for a family member/friend</option>
                    <option value="Professional Referral">Professional Referral (Treatment Center/Clinician)</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.inquiry_type && <div className="invalid-feedback">{errors.inquiry_type.message}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold text-secondary small text-uppercase">Preferred Program (Optional)</label>
                  <select className={`form-select bg-charcoal text-light border-secondary bg-black border-0 ${errors.preferred_program ? 'is-invalid' : ''}`} id="cnt_preferred_program" {...register("preferred_program")}>
                    <option value="Not Sure">Not sure yet</option>
                    <option value="Mens Housing">Men&apos;s Sober Living</option>
                    <option value="Womens Housing">Women&apos;s Sober Living</option>
                  </select>
                  {errors.preferred_program && <div className="invalid-feedback">{errors.preferred_program.message}</div>}
                </div>

                <div className="col-12">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_timeline">Ideal Timeline</label>
                  <select className={`form-select bg-charcoal text-light border-secondary bg-black border-0 ${errors.timeline ? 'is-invalid' : ''}`} id="cnt_timeline" {...register("timeline")}>
                    <option value="Immediately">Immediately (Within 48 hours)</option>
                    <option value="1-2 Weeks">1-2 Weeks</option>
                    <option value="1 Month+">1 Month or more</option>
                    <option value="Just Gathering Info">Just gathering information</option>
                  </select>
                  {errors.timeline && <div className="invalid-feedback">{errors.timeline.message}</div>}
                </div>
              </div>
              
              <div className="d-flex justify-content-between mt-5 pt-3 border-top">
                <button type="button" className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-bold text-uppercase" onClick={prevStep}>&larr; Previous</button>
                <button type="button" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase hover-warning transition-all" onClick={nextStep}>Next Step &rarr;</button>
              </div>
            </div>

            {/* STEP 3: Message & Submit */}
            <div className={`${step === 3 ? 'd-block' : 'd-none'}`}>
              <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">Message & Details</h3>
              <div className="row g-4">
                <div className="col-12">
                  <label className="form-label fw-bold text-secondary small text-uppercase" htmlFor="cnt_message">How can we support you? *</label>
                  <textarea className={`form-control bg-charcoal text-light border-secondary bg-black border-0 ${errors.message ? 'is-invalid' : ''}`} id="cnt_message" rows={5} placeholder="Briefly describe your situation or ask any questions you have..." {...register("message")}></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>
                
                <div className="col-12 mt-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="cnt_ack_confidential" required />
                    <label className="form-check-label text-secondary" htmlFor="cnt_ack_confidential">
                      <strong className="text-light">Confidentiality Agreement:</strong> I understand that the information submitted here is strictly confidential and will only be used by Manageable Living staff to assist with my inquiry.
                    </label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-5 pt-3 border-top">
                <button type="button" className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-bold text-uppercase" onClick={prevStep} disabled={isSubmitting}>&larr; Previous</button>
                <button type="submit" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <SlideUp className="text-center py-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
              <i className="bi bi-check-lg fs-1"></i>
            </div>
            <h3 className="fs-2 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Message Sent Successfully!</h3>
            <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "600px" }}>
              Thank you for reaching out to Manageable Living. A member of our team will review your message and contact you shortly.
            </p>
            <a href="tel:0017134099594" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase hover-warning transition-all">
              Call Us Now 24/7
            </a>
          </SlideUp>
        )}
      </div>
    </div>
  );
}