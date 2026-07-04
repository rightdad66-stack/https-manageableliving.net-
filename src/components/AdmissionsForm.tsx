"use client";

import { useState } from "react";
import SlideUp from "./SlideUp";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitAdmissionsForm, admissionsFormSchema } from "@/app/actions/submitForm";

type AdmissionsFormValues = z.infer<typeof admissionsFormSchema>;

export default function AdmissionsForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionsFormValues>({
    resolver: zodResolver(admissionsFormSchema),
    mode: "onTouched",
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof AdmissionsFormValues)[] = [];
    if (step === 1) fieldsToValidate = ["first_name", "last_name", "email", "phone", "dob"];
    else if (step === 2) fieldsToValidate = ["sobriety_date", "doc", "in_treatment", "facility_name", "mat_status"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: AdmissionsFormValues) => {
    setServerError(null);
    const result = await submitAdmissionsForm(data);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      setServerError(result.error || "An error occurred while submitting the form.");
    }
  };

  // Framer motion variants for smooth sliding
  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
      <div className="bg-dark text-light p-4 p-md-5">
        <h2 className="fs-3 fw-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Online Admissions Application</h2>
        <p className="text-secondary mb-4">Complete our secure 3-step intake form to start your housing application.</p>

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
            <div className="text-center d-flex flex-column align-items-center" style={{ width: '60px', marginLeft: '-14px' }}>
              <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 1 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>1</div>
              <span className={`small mt-1 fw-semibold ${step >= 1 ? 'text-warning' : 'text-secondary'}`} style={{fontSize: '0.65rem', textTransform: 'uppercase'}}>Basic Info</span>
            </div>
            <div className="text-center d-flex flex-column align-items-center" style={{ width: '60px' }}>
              <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 2 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>2</div>
              <span className={`small mt-1 fw-semibold ${step >= 2 ? 'text-warning' : 'text-secondary'}`} style={{fontSize: '0.65rem', textTransform: 'uppercase'}}>History</span>
            </div>
            <div className="text-center d-flex flex-column align-items-center" style={{ width: '60px', marginRight: '-14px' }}>
              <div className={`rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm transition-all ${step >= 3 ? 'bg-warning text-light border border-warning' : 'bg-dark text-secondary border border-secondary border-opacity-50'}`} style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>3</div>
              <span className={`small mt-1 fw-semibold ${step >= 3 ? 'text-warning' : 'text-secondary'}`} style={{fontSize: '0.65rem', textTransform: 'uppercase'}}>Housing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 p-md-5 bg-charcoal" style={{ minHeight: '500px' }}>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit(onSubmit)} id="ml-admissions-form">
            
            {serverError && (
              <div className="alert alert-danger mb-4">
                {serverError}
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* STEP 1: Basic Info */}
              {step === 1 && (
                <motion.div key="step1" variants={variants} initial="initial" animate="animate" exit="exit" id="step-1">
                  <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">Applicant Information</h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className={`form-control custom-focus-ring ${errors.first_name ? 'is-invalid' : ''}`} id="first_name" placeholder="First Name" {...register("first_name")} />
                        <label htmlFor="first_name">First Name *</label>
                        {errors.first_name && <div className="invalid-feedback">{errors.first_name.message}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className={`form-control custom-focus-ring ${errors.last_name ? 'is-invalid' : ''}`} id="last_name" placeholder="Last Name" {...register("last_name")} />
                        <label htmlFor="last_name">Last Name *</label>
                        {errors.last_name && <div className="invalid-feedback">{errors.last_name.message}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className={`form-control custom-focus-ring ${errors.email ? 'is-invalid' : ''}`} id="email" placeholder="name@example.com" {...register("email")} />
                        <label htmlFor="email">Email Address *</label>
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="tel" className={`form-control custom-focus-ring ${errors.phone ? 'is-invalid' : ''}`} id="phone" placeholder="(123) 456-7890" {...register("phone")} />
                        <label htmlFor="phone">Phone Number *</label>
                        {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="date" className={`form-control custom-focus-ring ${errors.dob ? 'is-invalid' : ''}`} id="dob" placeholder="Date of Birth" {...register("dob")} />
                        <label htmlFor="dob">Date of Birth *</label>
                        {errors.dob && <div className="invalid-feedback">{errors.dob.message}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-5 pt-3 border-top">
                    <button type="button" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase hover-warning transition-all" onClick={nextStep}>Next Step &rarr;</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Clinical History */}
              {step === 2 && (
                <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit" id="step-2">
                  <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">Clinical & Recovery History</h3>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="date" className={`form-control custom-focus-ring ${errors.sobriety_date ? 'is-invalid' : ''}`} id="sobriety_date" placeholder="Clean Date" {...register("sobriety_date")} />
                        <label htmlFor="sobriety_date">Current Clean/Sobriety Date *</label>
                        {errors.sobriety_date && <div className="invalid-feedback">{errors.sobriety_date.message}</div>}
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className={`form-control custom-focus-ring ${errors.doc ? 'is-invalid' : ''}`} id="doc" placeholder="Substance of Choice" {...register("doc")} />
                        <label htmlFor="doc">Primary Substance(s) of Choice *</label>
                        {errors.doc && <div className="invalid-feedback">{errors.doc.message}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <select className={`form-select custom-focus-ring ${errors.in_treatment ? 'is-invalid' : ''}`} id="in_treatment" defaultValue="" {...register("in_treatment")}>
                          <option value="" disabled>Please select an option</option>
                          <option value="Yes, Inpatient/Residential">Yes, Inpatient/Residential</option>
                          <option value="Yes, PHP/IOP">Yes, PHP / IOP</option>
                          <option value="Yes, Detox">Yes, Detox</option>
                          <option value="No, at home/independent">No, at home/independent</option>
                          <option value="No, other">No, other</option>
                        </select>
                        <label htmlFor="in_treatment">Are you currently in a treatment facility? *</label>
                        {errors.in_treatment && <div className="invalid-feedback">{errors.in_treatment.message}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className={`form-control custom-focus-ring ${errors.facility_name ? 'is-invalid' : ''}`} id="facility_name" placeholder="Facility Name" {...register("facility_name")} />
                        <label htmlFor="facility_name">If yes, what is the name of the facility?</label>
                        {errors.facility_name && <div className="invalid-feedback">{errors.facility_name.message}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <select className={`form-select custom-focus-ring ${errors.mat_status ? 'is-invalid' : ''}`} id="mat_status" defaultValue="" {...register("mat_status")}>
                          <option value="" disabled>Please select an option</option>
                          <option value="No">No</option>
                          <option value="Yes - Suboxone/Buprenorphine">Yes - Suboxone/Buprenorphine</option>
                          <option value="Yes - Vivitrol/Naltrexone">Yes - Vivitrol/Naltrexone</option>
                          <option value="Yes - Other">Yes - Other</option>
                        </select>
                        <label htmlFor="mat_status">Are you currently on MAT? *</label>
                        {errors.mat_status && <div className="invalid-feedback">{errors.mat_status.message}</div>}
                      </div>
                      <small className="text-muted mt-2 d-block fst-italic">Note: We review MAT on a case-by-case basis. Methadone is generally not permitted.</small>
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-between mt-5 pt-3 border-top">
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-bold text-uppercase" onClick={prevStep}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark rounded-pill px-5 py-3 fw-bold text-uppercase hover-warning transition-all" onClick={nextStep}>Next Step &rarr;</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Housing & Legal */}
              {step === 3 && (
                <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit" id="step-3">
                  <h3 className="fs-4 fw-bold mb-4 border-bottom pb-2">Housing Needs & Agreements</h3>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-floating">
                        <select className={`form-select custom-focus-ring ${errors.program_type ? 'is-invalid' : ''}`} id="program_type" defaultValue="" {...register("program_type")}>
                          <option value="" disabled>Please select an option</option>
                          <option value="Mens Housing">Men's Housing</option>
                          <option value="Womens Housing">Women's Housing</option>
                        </select>
                        <label htmlFor="program_type">Which program are you applying for? *</label>
                        {errors.program_type && <div className="invalid-feedback">{errors.program_type.message}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <input type="date" className={`form-control custom-focus-ring ${errors.move_in_date ? 'is-invalid' : ''}`} id="move_in_date" placeholder="Move in date" {...register("move_in_date")} />
                        <label htmlFor="move_in_date">Desired Move-In Date *</label>
                        {errors.move_in_date && <div className="invalid-feedback">{errors.move_in_date.message}</div>}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <select className={`form-select custom-focus-ring ${errors.legal_issues ? 'is-invalid' : ''}`} id="legal_issues" defaultValue="" {...register("legal_issues")}>
                          <option value="" disabled>Please select an option</option>
                          <option value="No">No pending issues</option>
                          <option value="Yes - Probation/Parole">Yes, I am on Probation/Parole</option>
                          <option value="Yes - Pending Court Dates">Yes, I have pending court dates</option>
                        </select>
                        <label htmlFor="legal_issues">Any pending legal issues or probation? *</label>
                        {errors.legal_issues && <div className="invalid-feedback">{errors.legal_issues.message}</div>}
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <h4 className="fs-5 fw-bold mb-3">Agreements & Disclosures</h4>
                      
                      <div className="form-check mb-3">
                        <input type="checkbox" className={`form-check-input custom-focus-ring ${errors.ack_testing ? 'is-invalid' : ''}`} id="ack_testing" {...register("ack_testing")} />
                        <label className="form-check-label text-secondary" htmlFor="ack_testing">
                          <strong className="text-light">Drug & Alcohol Testing:</strong> I agree to submit to random urinalysis and breathalyzer testing. I understand a positive test may result in immediate discharge.
                        </label>
                        {errors.ack_testing && <div className="invalid-feedback">{errors.ack_testing.message}</div>}
                      </div>

                      <div className="form-check mb-3">
                        <input type="checkbox" className={`form-check-input custom-focus-ring ${errors.ack_meetings ? 'is-invalid' : ''}`} id="ack_meetings" {...register("ack_meetings")} />
                        <label className="form-check-label text-secondary" htmlFor="ack_meetings">
                          <strong className="text-light">12-Step & Meeting Attendance:</strong> I agree to actively work a program of recovery (AA/NA/CA/SMART) and participate in mandatory weekly house meetings.
                        </label>
                        {errors.ack_meetings && <div className="invalid-feedback">{errors.ack_meetings.message}</div>}
                      </div>

                      <div className="form-check mb-3">
                        <input type="checkbox" className={`form-check-input custom-focus-ring ${errors.ack_confidential ? 'is-invalid' : ''}`} id="ack_confidential" {...register("ack_confidential")} />
                        <label className="form-check-label text-secondary" htmlFor="ack_confidential">
                          <strong className="text-light">Confidentiality Guarantee:</strong> I understand that my application is 100% confidential and will only be reviewed by the Manageable Living intake care team.
                        </label>
                        {errors.ack_confidential && <div className="invalid-feedback">{errors.ack_confidential.message}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-5 pt-3 border-top">
                    <button type="button" className="btn btn-outline-secondary rounded-pill px-4 py-3 fw-bold text-uppercase" onClick={prevStep} disabled={isSubmitting}>&larr; Previous</button>
                    <button type="submit" className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-uppercase shadow-sm" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        ) : (
          <SlideUp className="text-center py-5">
            <div className="d-inline-flex align-items-center justify-content-center bg-warning text-light rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
              <i className="bi bi-check-lg fs-1"></i>
            </div>
            <h3 className="fs-2 fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Application Submitted Successfully!</h3>
            <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: "600px" }}>
              Thank you for applying to Manageable Living. An intake coordinator will review your information and reach out by phone within 1 business hour.
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