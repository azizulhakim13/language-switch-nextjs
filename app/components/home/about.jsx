'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Footer from '../footer';

export default function HomeAbout() {
  return (
    <div className="about-footer">
      <div className="about py-md-70 py-5">
        <div className="container">
          <div className="text-center">
            <p className="fs-2 text-primary mb-2">People Quotes</p>
            <h2 className="display-5 fw-bold mb-2"> About Us</h2>
            <p className="fs-4 mb-70">
              A comment is something that you say which expresses your opinion of
              <br className="d-md-flex d-none" /> something or which gives an explanation
              of it. If an event or situation.
            </p>
          </div>
          <div className='position-relative'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                grabCursor={true}
                className="swiper pb-md-5 pb-4"
            >
                <SwiperSlide className="swiper-slide slide-1 py-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                    <div className="text-center">
                        <img className="img-fluid" src="/img/about/profile.png" alt="profile" />
                        <h3 className="fs-4 text-white fw-bold pt-4">John Doe</h3>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="text-center pe-xxl-100 me-xxl-100 pe-lg-100 pe-md-40">
                        <p className="lead text-white">
                        “A comment is something that you say
                        <br className="d-lg-flex d-none" /> which expresses your opinion of
                        <br className="d-lg-flex d-none" /> something or which gives an
                        explanation <br className="d-lg-flex d-none" /> of it. If an event or
                        situation.”
                        </p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1 py-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                    <div className="text-center">
                        <img src="/img/about/profile.png" alt="profile" />
                        <h3 className="fs-4 text-white fw-bold pt-4">John Doe</h3>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="text-center pe-xxl-100 me-xxl-100 pe-lg-100 pe-md-40">
                        <p className="lead text-white">
                        “A comment is something that you say
                        <br className="d-lg-flex d-none" /> which expresses your opinion of
                        <br className="d-lg-flex d-none" /> something or which gives an
                        explanation <br className="d-lg-flex d-none" /> of it. If an event or
                        situation.”
                        </p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1 py-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-6">
                    <div className="text-center">
                        <img src="/img/about/profile.png" alt="profile" />
                        <h3 className="fs-4 text-white fw-bold pt-4">John Doe3</h3>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="text-center pe-xxl-100 me-xxl-100 pe-lg-100 pe-md-40">
                        <p className="lead text-white">
                        “A comment is something that you say
                        <br className="d-lg-flex d-none" /> which expresses your opinion of
                        <br className="d-lg-flex d-none" /> something or which gives an
                        explanation <br className="d-lg-flex d-none" /> of it. If an event or
                        situation.”
                        </p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
