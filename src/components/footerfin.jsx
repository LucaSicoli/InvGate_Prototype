import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome, faBriefcase, faProjectDiagram, faPhone, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-start text-center md:text-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white underline-animation">About Us</h3>
            <p className="text-white mt-4 max-w-xs mx-auto">
              I would like to thank InvGate for the opportunity to test my front-end skills. I hope you have enjoyed my work.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white underline-animation">Quick Links</h3>
            <ul className="mt-4 flex sm:flex-col flex-row sm:justify-center space-x-2">
              <li>
                <a href="https://github.com/Windsheear" target='next' className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" target='next' className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Services
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" target='NEXT' className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" /> Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" target='NEXT' className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faLink} className="mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-300 underline-animation">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" /> (+54) 9 2255 50-8871
                </a>
              </li>
              <li>
                <a href="mailto:luca.sicoli12@hotmail.com" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> luca.sicoli12@hotmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-white underline-animation">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/Windsheear" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Windsheear" className="hover:underline text-gray-300">
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-white pt-4">
          © {new Date().getFullYear()} Luca Benjamin Sicoli. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
