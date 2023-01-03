import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import MicrosoftLogo from '../assets/MicrosoftLogo-removebg-preview.png'
import GoogleLogo from '../assets/GoogleLogo-removebg-preview.png'
import biocatchLogo from '../assets/biocatchLogo-removebg-preview.png'

export default function AllMission() {
  return (
    <div>
      <Navbar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Missions
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              {/*search bar */}
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      />
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>
              {/*/search bar */}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <card className="w-1/2 flex flex-col mt-5">
          <header className="flex flex-row gap-3 items-center">
            <img src="" className="rounded-full" />
          </header>
          <content className="grid grid-cols-4 gap-3">
            <div className="col-span-3 flex flex-col">
              <subject className="font-bold text-lg pt-3">Google</subject>
              <description className="font-light text-sm pt-2">
                This is one of the most sought-after hackathon ideas that give
                you a chance to showcase your skills and abilities. To build a
                creative blog, you would need to build a dynamic, smart website
                which would require you to have top-notch skills in using HTML,
                CSS, JavaScript, etc. You can also go the extra mile by using
                some advanced tools like Angular, React.js, and Node.js. Your
                blog could focus on solving the problem at hand, sharing
                valuable knowledge in easily comprehensible bits and a lucid
                language. It should also be search-friendly, well-indexed, and
                user-friendly.
              </description>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={GoogleLogo} />
              <div className="flex flex-col">
              <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold text-center hover:bg-green-600">
                active
              </span>
              <Link
                to="/rooms"
                className="rounded bg-cyan-400 hover:bg-cyan-600 py-1 px-3 text-xs font-bold"
              >
                Go live
              </Link>
              </div>

            </div>
          </content>
          <hr className="mt-5" />
        </card>
        <card className="w-1/2 flex flex-col mt-5">
          <header className="flex flex-row gap-3 items-center">
            <img src="" className="rounded-full" />
          </header>
          <content className="grid grid-cols-4 gap-3">
            <div className="col-span-3 flex flex-col">
              <subject className="font-bold text-lg pt-3">Microsoft</subject>
              <description className="font-light text-sm pt-2">
                Data visualization is one of the most important and in-demand
                skills in data science. Not everybody can make sense of complex
                data but when it is presented to the audience in an
                easy-to-understand, visual format, it is a lot more
                comprehensible. To deliver a successful hackathon project in
                data visualization, you need to be well-versed in Python
                programming and data science.
              </description>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={MicrosoftLogo} />
              <div className="flex flex-col">
              <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold text-center hover:bg-red-600">
                Of line
              </span>
              </div>
            </div>
          </content>
          <hr className="mt-5" />
        </card>
        <card className="w-1/2 flex flex-col mt-5">
          <header className="flex flex-row gap-3 items-center">
            <img src="" className="rounded-full" />
          </header>
          <content className="grid grid-cols-4 gap-3">
            <div className="col-span-3 flex flex-col">
              <subject className="font-bold text-lg pt-3">BioCatch</subject>
              <description className="font-light text-sm pt-2">
                Gamification is all the rage in the world right now. It is
                helping people across industries to accomplish complex tasks and
                keep audiences engaged. This top hackathon idea requires you to
                be skilled in HTML5 and JavaScript. To deliver a gamification
                project, you would need to first understand the problem
                thoroughly and research thoroughly to gain some domain knowledge
                before you can develop an interactive game to solve the
                hackathon problem at hand.
              </description>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={biocatchLogo} />
              <div className="flex flex-col">
              <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold text-center hover:bg-red-600">
                Of line
              </span>
              </div>
            </div>
          </content>
          <hr className="mt-5" />
        </card>
      </div>
    </div>
  );
}
