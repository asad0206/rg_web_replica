import React from "react";

import Hero from "../Hero";
import Breadcrumb from "../BreadCrumb";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
  RiInstagramFill,
} from "react-icons/ri";

import { Montserrat, Roboto_Flex } from "next/font/google";

const mons = Montserrat({ subsets: ["latin"] });
const roboto_f = Roboto_Flex({ subsets: ["latin"] });

const hero_banner = "/assets/LandingPage/hero_new.jpg";

export default function page() {
  return (
    <div>
      <Hero bannerSrc={hero_banner} />
      <div
        className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8 ${mons.className}`}
      >
        <div className="px-4 md:px-10">
          <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
            <div className="order-2 md:order-1 text-3xl text-[#032B5B]">
              Bhandara (SC)
            </div>
            <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
              <a
                href="https://www.facebook.com/people/Prashant-Padole/pfbid02ERmQbJSVCTfsvsEyJqJR9Cr7rY7aENGSdVZ65vPfmSHosLcyjFJY3sbqTvBCKval/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiFacebookFill />
                </div>
              </a>

              <a
                href="https://twitter.com/_Prashantpadole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiTwitterFill />
                </div>
              </a>

              <a
                href="https://www.instagram.com/drprashantpadole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
                  <RiInstagramFill />
                </div>
              </a>
            </div>
          </div>

          {/* Bread crumb */}

          <div className="mt-5 bg-gray-100 ">
            <Breadcrumb pageName="Bhandara (SC)" />
          </div>

          {/* Page text */}

          <div
            className={`content-ized mt-5 text-justify text-sm md:text-base ${roboto_f.className}`}
          >
            <p>
              Bhandara is one of the 288 Vidhan Sabha (legislative assembly)
              constituencies in Maharashtra state in central India. This
              constituency is one of the three constituencies located in
              Bhandara district.
              <br />
              <br />
              Bhandara is part of the Bhandara-Gondiya Lok Sabha constituency
              along with five other Vidhan Sabha segments, namely Sakoli and
              Tumsar in the Bhandara district and Gondiya, Arjuni Morgaon and
              Tirora in the Gondia district.
              <br />
              <br />
              The current constituency comprises Whole Bhandara and Pauni
              Tehsils including Bhandara and Pauni municipalities.
              <br />
              <br />
            </p>

            <h4 className="text-xl font-bold">
              Members of Legislative assembly
            </h4>
            <div className="border-2 border-black divide-y-2 divide-black">
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1952</p>
                <p className="p-2">Ram Lanjewar</p>
                <p className="p-2">Indian National Congress</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1957</p>
                <span>
                  <p className="p-2">Sitaram Bhambore</p>
                  <p className="p-2">Dada Dhote</p>
                </span>
                <p className="p-2">Indian National Congress</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1962</p>
                <p className="p-2">Dada Dhote</p>
                <p className="p-2">Independent politician</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1968</p>
                <p className="p-2">Nasikrao Tirpude</p>
                <p className="p-2">Indian National Congress</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1972</p>
                <p className="p-2">Govind Shende</p>
                <p className="p-2">Independent politician</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1978</p>
                <p className="p-2">Vitthalprasad Dube	</p>
                <p className="p-2">Indian National Congress</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1980</p>
                <p className="p-2">Madhavrao Dalal</p>
                <p className="p-2">Independent politician</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1985</p>
                <p className="p-2">Anandrao Wanjari</p>
                <p className="p-2">Indian National Congress</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">1990</p>
                <p className="p-2">Ram Gopal Aswale</p>
                <p className="p-2">Bharatiya Janata Party</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">2004</p>
                <p className="p-2">Nana Panchbudhe</p>
                <p className="p-2">Nationalist Congress Party</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">2009</p>
                <p className="p-2">Narendra Bhondekar</p>
                <p className="p-2">Shiv Sena</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">2014</p>
                <p className="p-2">Ramchandra Avsare</p>
                <p className="p-2">	Bharatiya Janata Party</p>
              </div>
              <div className="grid grid-cols-3 divide-x-2 divide-black">
                <p className="p-2">2019</p>
                <p className="p-2">Narendra Bhondekar</p>
                <p className="p-2">Independent politician</p>
              </div>
            </div>
          </div>

          {/* Page end */}
        </div>
      </div>
    </div>
  );
}
