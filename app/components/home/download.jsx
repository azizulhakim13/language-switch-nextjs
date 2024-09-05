import React from 'react'

export default function Download() {
  return (
    <div className="download-app py-md-5 py-40">
        <div className="container">
            <div className="row align-items-baseline gx-lg-70 gy-40">
                <div className="col-md-6">
                <div>
                    <img className="img-fluid" src="/img/download.png" alt="download app" />
                </div>
                </div>
                <div className="col-md-6">
                <h2 className="display-5 fw-bold mb-md-40 mb-4">
                    Download App and create <br className="d-xxl-flex d-none" /> your E-Commerce website...
                </h2>
                <div>
                    <a href="#" target="_blank">
                    <div className="d-inline-flex gap-3 align-items-center bg-primary py-12 px-4 rounded-4 shadow">
                        <div>
                        <img src="/img/play.svg" alt="google play" />
                        </div>
                        <div>
                        <p className="fs-5 text-white mb-0">Get it on</p>
                        <p className="fs-4 text-white fw-bold mb-0">Google play</p>
                        </div>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
