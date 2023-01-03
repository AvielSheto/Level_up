import React from "react";

export default function RoomOne() {
  return (
    <>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Room 1
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
              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  />
                </svg>
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 pt-11 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div className="flex justify-center -mt-16">
                  <img
                    className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                    src="data:image/png;base64,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"
                  />
                </div>
                <div>
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    New Home Page
                  </h2>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae dolores deserunt ea doloremque natus error, rerum quas
                    odio quaerat nam ex commodi hic!
                  </p>
                </div>
                <div className=" mt-4">
                  <a href="#" className="text-xl font-medium text-indigo-500">
                    Contact person
                  </a>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://media.licdn.com/dms/image/D4D03AQHbcE_A9X4u2g/profile-displayphoto-shrink_400_400/0/1665574104888?e=1678320000&v=beta&t=RxrFMUvSOr43wz513FUQGQog2ps2ZQHDZpLuFy--G4o"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                      Jonathan Reinink
                    </p>
                    <p className="text-gray-600">
                      Project manager at ironSource
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500 flex">
                  Alex Shatov<p className="dark:text-black pl-1">(Frontend)</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
                    style={{ width: "85%" }}
                  />
                </div>

                <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500 flex">
                  Philip Harbach{" "}
                  <p className="dark:text-black pl-1">(Backend)</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500 flex">
                  Mirko Fisuk <p className="dark:text-black pl-1">(UX/UI)</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                    style={{ width: "75%" }}
                  />
                </div>
                <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500 flex">
                  Olga Semklo <p className="dark:text-black pl-1">(QA)</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                    style={{ width: "52%" }}
                  />
                </div>
              </div>
            </div>

            <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
              <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">
                      Team Members
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          <tr>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Name
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Email
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                    width={40}
                                    height={40}
                                    alt="Alex Shatov"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  Alex Shatov
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                alexshatov@gmail.com
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                    width={40}
                                    height={40}
                                    alt="Philip Harbach"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  Philip Harbach
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                philip.h@gmail.com
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                    width={40}
                                    height={40}
                                    alt="Mirko Fisuk"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  Mirko Fisuk
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                mirkofisuk@gmail.com
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    className="rounded-full"
                                    src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                    width={40}
                                    height={40}
                                    alt="Olga Semklo"
                                  />
                                </div>
                                <div className="font-medium text-gray-800">
                                  Olga Semklo
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                olga.s@cool.design
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full py-8 pt-10 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div className="flex justify-center -mt-16">
                  <img
                    className="w-20 h-20 object-cover rounded-full border-indigo-500"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </div>
                <div>
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    GitHub
                  </h2>
                </div>

                <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                  <div className="rounded-t mb-0 px-0 border-0">
                    <div className="flex flex-wrap items-center px-4 py-2">
                      <div className="relative w-full max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                          Recent Activities
                        </h3>
                      </div>
                      <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                        <a href="https://github.com/AvielSheto/Level_up">
                          <button
                            className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Go to the repository
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="block w-full">
                      <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Today
                      </div>
                      <ul className="my-1">
                        <li className="flex px-4">
                          <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                            <svg
                              className="w-9 h-9 fill-current text-indigo-50"
                              viewBox="0 0 36 36"
                            >
                              <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                            </svg>
                          </div>
                          <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                            <div className="flex-grow flex justify-between items-center">
                              <div className="self-center">
                                <a
                                  className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                ></a>{" "}
                                Pull request merged by{" "}
                                <a
                                  className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  Sara Smith
                                </a>
                              </div>
                              <div className="flex-shrink-0 ml-2">
                                <a
                                  className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  View
                                  <span>
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="transform transition-transform duration-500 ease-in-out"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="flex px-4">
                          <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                            <svg
                              className="w-9 h-9 fill-current text-red-50"
                              viewBox="0 0 36 36"
                            >
                              <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                            </svg>
                          </div>
                          <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                            <div className="flex-grow flex justify-between items-center">
                              <div className="self-center">
                                Pull request closed by{" "}
                                <a
                                  className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  {" "}
                                </a>
                                <a
                                  className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  Nick Mark
                                </a>
                              </div>
                              <div className="flex-shrink-0 ml-2">
                                <a
                                  className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  View
                                  <span>
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="transform transition-transform duration-500 ease-in-out"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Yesterday
                      </div>
                      <ul className="my-1">
                        <li className="flex px-4">
                          <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3">
                            <svg
                              className="w-9 h-9 fill-current text-light-blue-50"
                              viewBox="0 0 36 36"
                            >
                              <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                            </svg>
                          </div>
                          <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                            <div className="flex-grow flex justify-between items-center">
                              <div className="self-center">
                                <a
                                  className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  Mirko Fisuk
                                </a>{" "}
                                Pull request opened by{" "}
                                <a
                                  className="font-medium text-gray-800 dark:text-gray-50 dark:hover:text-gray-100"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  Newsletter #1
                                </a>
                              </div>
                              <div className="flex-shrink-0 ml-2">
                                <a
                                  className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                                  href="#0"
                                  style={{ outline: "none" }}
                                >
                                  View
                                  <span>
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="transform transition-transform duration-500 ease-in-out"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 pt-11 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <h2 className="text-gray-800 text-3xl font-semibold">
                    Daily meeting
                  </h2>
                  <a
                    className="text-blue-400"
                    href="https://meet.google.com/gsh-pnen-mfr?pli=1&authuser=0"
                  >
                    Link to google meet
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-800 text-2xl font-semibold">
                    Record of today's meeting
                  </h3>

                  <div className="mt-8">
                    <img
                      className=""
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UCunLvGRjOOC4Yp3z05ALvO-y92NaCwcvUT7tJmPC8-GmKq9jMxN_jM9kMDNG3EvgPE&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
