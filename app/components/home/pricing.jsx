import React from 'react'

export default function Pricing() {
  return (
    <div className="pricing py-lg-60 py-40">
        <div className="container">
            <div className="text-center">
                <p className="fs-2 text-primary mb-2">Pricing Plan</p>
                <h2 className="display-5 fw-bold mb-2">A Smart Pricing Plan for You</h2>
                <p className="fs-4 mb-md-40 mb-4">We are here with a smart pricing plan for you. <br className="d-md-flex d-none" /> We usually provide you with a monthly plan and annual plan.</p>
            </div>
            <ul className="nav nav-pills justify-content-center mb-md-60 mb-40" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Monthly Plan</button>
                </li>
                <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Yearly Plan</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                <div className="row row-cols-md-2 gx-xxl-70 gy-4">
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Personal Pack</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$12</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Membership Card
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Business Class</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$35</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Membership Card
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Premium</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$50</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Membership Card
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                <div className="row row-cols-md-2 gx-xxl-70 gy-4">
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Personal Pack</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$12</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Membership Card
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Business Class</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$35</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Membership Card
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="excludes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4">
                    <div className="pricing-card py-lg-60 px-md-70 py-5 px-5">
                        <h3 className="fs-4 fw-bold ps-4 mb-12">Premium</h3>
                        <p className="fs-5 ps-4 mb-4"><span className="display-5 fw-bold">$50</span>/Month</p>
                        <ul className="list-unstyled mb-4">
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Limited Trips
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Available Trip History
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Only 1 offer/month
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Special Discount
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> No Free Trip
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Membership Card
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Trip Cancellation
                        </li>
                        <li className="includes">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                            </svg> Money Return
                        </li>
                        </ul>
                        <div className="ps-4">
                        <a href="#" className="btn btn-outline px-40">Get Start</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
