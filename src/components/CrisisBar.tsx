export default function CrisisBar() {
  return (
    <>
      <div className="bg-danger text-light text-center py-2 small fw-bold">
        <div className="container-fluid">
          Need immediate help? SAMHSA National Helpline:{" "}
          <a href="tel:18006624357" aria-label="Call SAMHSA Helpline">
            1-800-662-4357
          </a>{" "}
          (free, confidential, 24/7)
        </div>
      </div>

      <div className="bg-dark text-light border-bottom border-secondary">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap px-4 py-1">
          <div className="d-flex gap-3 small text-secondary">
            <span className="d-inline-flex align-items-center">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
                className="me-1"
                aria-hidden="true"
              >
                <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11z" />
              </svg>
              <a href="tel:0017134099594" aria-label="Call Manageable Living">
                (713) 409-9594
              </a>
            </span>
            <span className="d-inline-flex align-items-center">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
                className="me-1"
                aria-hidden="true"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:info@manageablegroup.com" aria-label="Email Manageable Living">
                info@manageablegroup.com
              </a>
            </span>
          </div>
          <div className="small text-secondary">
            <span className="d-inline-flex align-items-center">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
                className="me-1"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <a href="/our-homes/" aria-label="View our locations">
                League City & Kemah, TX
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
