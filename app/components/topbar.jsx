'use client'
import React, { useEffect } from 'react';

export default function Navbar() {

  useEffect(() => {
    const menuIcon = document.getElementById('menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuIcon && mobileNav) {
      const toggleMenu = () => {
        mobileNav.classList.toggle('menu-open');
      };

      menuIcon.addEventListener('click', toggleMenu);

      return () => {
        menuIcon.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar_top');
      const scrolled = window.scrollY;

      if (scrolled > 50) {
        navbar.classList.add('fixed-top');
        const navbarHeight = navbar.offsetHeight;
        document.body.style.paddingTop = `${navbarHeight}px`;
      } else {
        navbar.classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div id="navbar_top" className="nav-bar bg-white py-3 px-xl-0 px-3">
        <nav className="container d-flex align-items-center navbar navbar-expand-xl py-0">
          <div>
            <a href="#"><img className="nav-logo img-fluid" src="/img/logo.png" alt="logo" /></a>
          </div>
          <div className="offcanvas offcanvas-start offcanvas-xl py-xl-2" data-bs-scroll="false" data-bs-backdrop="false"
            tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
            <div className="offcanvas-header bg-light">
              <a className="offcanvas-title fs-3 fw-semibold" id="offcanvasNavLabel" href="#">
                <img className="nav-logo-mobile img-fluid" src="/img/logo.png" alt="logo" />
              </a>
            </div>

            <div className="offcanvas-body p-0 align-items-center">
              <ul className="navbar-nav align-items-xl-center flex-wrap custom ms-lg-auto">
                <li className="nav-item">
                  <a className="nav-links" href="#" role="button">
                    Latest
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links" href="#" role="button">
                    Sport
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links" href="#" role="button">
                    World
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links" href="#" role="button">
                    Business & Economy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-links" href="#" role="button">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="btn btn-outline-primary text-dark">Start Free Trial</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-xl-none d-flex">
            <a className="border-0 me-0" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav"
              aria-controls="offcanvasNav" aria-label="Toggle navigation">
              <nav className="mobile-nav d-flex justify-content-between align-items-center w-100">
                <div className="menu-icon" id="menu-icon">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </nav>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
