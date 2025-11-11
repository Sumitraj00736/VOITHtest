import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import footerBg from "../../assets/footerimage.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#1f1f1f] border-t border-gray-800 py-8 sm:py-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 z-0"
        style={{
          width: "40%",
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "contain",
          opacity: 0.12,
        }}
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 text-gray-300">
          <div className="hidden md:block md:w-1/3">
            <div className=" flex items-center gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#ea3c3c]">
                LOGO
              </h1>
            </div>
            <p className="mt-4 text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              nesciunt.
            </p>

            <div className="flex mt-4 space-x-4">
              <a href="#" aria-label="Twitter" className="text-[#ea3c3c]">
                {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
                <img
                  src={facebook}
                  alt=" facebook"
                  className="w-5 h-5 rounded-full bg-[#EA3C3C]"
                />
              </a>
              <a href="#" aria-label="twitter" className="text-[#ea3c3c]">
                {/* <FontAwesomeIcon icon={faLinkedin} size="lg" /> */}
                <img
                  src={twitter}
                  alt=" facebook"
                  className="w-5 h-5 rounded-full bg-[#EA3C3C]"
                />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#ea3c3c]">
                {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
                <img
                  src={instagram}
                  alt=" instagram"
                  className="w-10 h-10 mr-14 rounded-full "
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-medium">About</h3>
              <ul className="mt-3 space-y-2 text-sm font-light text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Add Vehicle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Invite Friends
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium">Socials</h3>
              <ul className="mt-3 space-y-2 text-sm  font-light text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium">Main Cities</h3>
              <ul className="mt-3 space-y-2 text-sm  font-light text-white">
                <li>
                  <a href="#" className="hover:text-white">
                    Kathmandu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pokhara
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chitwan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Butwal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center md:hidden">
              <h1 className="text-2xl sm:text-3xl font-bold text-[#ea3c3c]">
                LOGO
              </h1>
              <p className="mt-4 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                nesciunt.
              </p>
              <div className="flex mt-3 space-x-4">
                <a href="#" aria-label="facebook" className="text-[#ea3c3c]">
                  {/* <FontAwesomeIcon icon={faTwitter} size="lg" /> */}
                  <img
                    src={facebook}
                    alt=" facebook"
                    className="w-5 h-5 rounded-full bg-[#EA3C3C]"
                  />
                </a>
                <a href="#" aria-label="twitter" className="text-[#ea3c3c]">
                  {/* <FontAwesomeIcon icon={faLinkedin} size="lg" /> */}
                  <img
                    src={twitter}
                    alt=" facebook"
                    className="w-5 h-5 rounded-full bg-[#EA3C3C]"
                  />
                </a>
                <a href="#" aria-label="Facebook" className="text-[#ea3c3c]">
                  {/* <FontAwesomeIcon icon={faFacebook} size="lg" /> */}
                  <img
                    src={instagram}
                    alt=" instagram"
                    className="w-10 h-10 rounded-full "
                  />
                </a>
              </div>
            </div>

            <div className="w-full h-[0.01rem] bg-white text-white"></div>
            <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center  space-x-12  mb-10 sm:mt-0">
                <a href="#" className="text-xs text-white hover:text-white md:text-right">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-white hover:text-white">
                  Terms &amp; Conditions
                </a>
              </div>
              <p className="text-sm text-white font-light text-center mb-10 ">
                ©2024 Vaidya Mobility. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
