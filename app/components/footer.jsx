import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="container py-5">
      <div className="row row-cols-md-2 justify-content-between gx-lg-5 gy-40">
        <div className="col-lg-3">
          <div>
            <img src="/img/footer-logo.svg" alt="footer logo" />
            <p className="mt-3 mb-5 text-white">Our goal to make your life easier and give you a great traveling and booking service.</p>
            <div>
              <a href="#" target="_blank">
                <div className="d-inline-flex gap-3 align-items-center bg-primary py-12 px-4 rounded-4 shadow">
                  <div>
                    <img src="/img/play.svg" alt="google play" />
                  </div>
                  <div>
                    <p className="text-white mb-0">Get it on</p>
                    <p className="text-white fw-bold mb-0">Google play</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row gy-4">
            <div className="col">
              <div>
                <p className="fs-5 fw-bold text-white mb-4">Company</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Bonus</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="fs-5 fw-bold text-white mb-4">Quick Links</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Screenshots</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="fs-5 fw-bold text-white mb-4">Social Pages</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Pinterest</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="copyright border-top py-3">
      <div className="container">
        <p className=" text-white text-end mb-0">© EasyCommerce</p>
      </div>
    </div>
  </div>
  )
}
