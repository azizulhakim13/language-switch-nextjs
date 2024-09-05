import React from 'react'
import Navbar from '../../components/topbar'

export default function HomeHero() {
  return (
    <div className="hero-section">
        {/* <!-- nav --> */}
        <Navbar />
        {/* <!-- nav -->

        <!-- Hero --> */}
        <div className="hero pt-4">
        <div className="container">
            <h1 className="display-2 fw-bold lh-1 mb-24">Want to make <br className="d-md-flex d-none" />
            e-commerce site</h1>
            <p className="fs-3">Create your own online shop within a click.</p>
            <div className="row gy-40 pt-3">
            <div className="col-md-4">
                <div>
                <a href="#" className="btn btn-primary text-white">Create Your Shop</a>
                </div>
            </div>
            <div className="col-md-8">
                <div className="hero-right z-2">
                <img className='img-fluid z-3' src="/img/hero.png" alt="alignax hero" />
                <div className='shape-1 z-n1 d-lg-flex d-none'>
                    <img src="/img/shapes/hero-shape-1.svg" alt="shape" />
                </div>
                <div className='shape-2 z-n1 d-lg-flex d-none'>
                    <img src="/img/shapes/hero-shape-2.svg" alt="shape" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* <!-- Hero --> */}
    </div>
  )
}
