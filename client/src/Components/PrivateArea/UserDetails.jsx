import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function UserDetails() {
  const [user, setUser] = useState({});
  const [score, setScore] = useState([])
  const [projects, setProjects] = useState([]);

  const getUser = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/users/63b2e9a3ee0d39ddb4a237f4`
    );
    setUser(data);
    setScore(data.score)
  };
  const getProject = async () => {
    const { data } = await axios.get(`http://localhost:8000/project`);
    setProjects(data);
  };
  useEffect(() => {
    getUser();
    getProject();
  }, []);
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <img
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-32"
                alt="tailus logo"
              />
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src={user.image}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {user.userName}
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Categories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Other data</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Finance</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
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
                      ></path>
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
                  ></path>
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
                    strokeWidth="2"
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-1 rounded-xl border border-gray-200">
              <div className="mt-8 text-center">
                <img
                  src={user.image}
                  alt=""
                  className="w-44 h-52 m-auto rounded-full object-cover border border-gray-300"
                  width="150px"
                  height="200px"
                />
                <h5 className="mt-4 text-xl font-semibold text-gray-600 lg:block">
                  {user.userName}
                </h5>
                <div className="p-7">
                <span className="text-gray-400 lg:block">{user.about}</span>
                </div>
              </div>
              <div className=" p-2 bg-gray-300 rounded-lg border-2-black text-center">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <h3>Email: {user.email}</h3>
                <h3>Role: {user.role}</h3>
              </div>
            </div>
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">Lasts project</h5>
                <div className="my-8">
                  <h1 className="text-5xl font-bold text-gray-800">
                    2 Projects
                  </h1>
                </div>
                <div>
                  <table className="border-collapse w-full">
                    <thead>
                      <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Company name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Project name
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          Status
                        </th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                          description
                        </th>
                      </tr>
                    </thead>
                    {projects.map((project, index) => {
                      return (
                        <tbody key={index}>
                          <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto  text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Company name
                              </span>
                              {project.companyName}
                            </td>
                            <td className="w-full lg:w-auto text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Country
                              </span>
                              {project.projectName}
                            </td>
                            <td className="w-full lg:w-auto text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Status
                              </span>
                              <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">
                                active
                              </span>
                            </td>
                            <td className="w-full lg:w-auto text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Actions
                              </span>
                              <Link to="AllMissions">{project.description}</Link>
                              
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                <svg
                  className="w-40 m-auto"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.9985 2.84071C31.2849 2.84071 34.539 3.488 37.5752 4.74562C40.6113 6.00324 43.3701 7.84657 45.6938 10.1703C48.0176 12.4941 49.861 15.2529 51.1186 18.289C52.3762 21.3252 53.0235 24.5793 53.0235 27.8657C53.0235 31.152 52.3762 34.4061 51.1186 37.4423C49.861 40.4785 48.0176 43.2372 45.6938 45.561C43.3701 47.8848 40.6113 49.7281 37.5752 50.9857C34.539 52.2433 31.2849 52.8906 27.9985 52.8906C24.7122 52.8906 21.4581 52.2433 18.4219 50.9857C15.3857 49.7281 12.627 47.8848 10.3032 45.561C7.97943 43.2372 6.1361 40.4785 4.87848 37.4423C3.62086 34.4061 2.97357 31.152 2.97357 27.8657C2.97357 24.5793 3.62086 21.3252 4.87848 18.289C6.13611 15.2529 7.97943 12.4941 10.3032 10.1703C12.627 7.84656 15.3857 6.00324 18.4219 4.74562C21.4581 3.488 24.7122 2.84071 27.9985 2.84071L27.9985 2.84071Z"
                    stroke="#e4e4f2"
                    strokeWidth="3"
                  />
                  <path
                    d="M27.301 2.50958C33.0386 2.35225 38.6614 4.13522 43.26 7.57004C47.8585 11.0049 51.1637 15.8907 52.641 21.437C54.1182 26.9834 53.6811 32.8659 51.4002 38.133C49.1194 43.4001 45.1283 47.7437 40.0726 50.4611C35.0169 53.1785 29.1923 54.1108 23.541 53.1071C17.8897 52.1034 12.7423 49.2225 8.93145 44.9305C5.12062 40.6384 2.86926 35.1861 2.54159 29.4558C2.21391 23.7254 3.82909 18.0521 7.12582 13.3536"
                    stroke="url(#paint0_linear_622:13696)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.3279 30.7467C13.3912 29.48 13.8346 28.5047 14.6579 27.8207C15.4939 27.124 16.5896 26.7757 17.9449 26.7757C18.8696 26.7757 19.6612 26.9404 20.3199 27.2697C20.9786 27.5864 21.4726 28.0234 21.8019 28.5807C22.1439 29.1254 22.3149 29.746 22.3149 30.4427C22.3149 31.2407 22.1059 31.9184 21.6879 32.4757C21.2826 33.0204 20.7949 33.3877 20.2249 33.5777V33.6537C20.9596 33.8817 21.5296 34.287 21.9349 34.8697C22.3529 35.4524 22.5619 36.1997 22.5619 37.1117C22.5619 37.8717 22.3846 38.5494 22.0299 39.1447C21.6879 39.74 21.1749 40.2087 20.4909 40.5507C19.8196 40.88 19.0089 41.0447 18.0589 41.0447C16.6276 41.0447 15.4622 40.6837 14.5629 39.9617C13.6636 39.2397 13.1886 38.1757 13.1379 36.7697H15.7219C15.7472 37.3904 15.9562 37.8907 16.3489 38.2707C16.7542 38.638 17.3052 38.8217 18.0019 38.8217C18.6479 38.8217 19.1419 38.6444 19.4839 38.2897C19.8386 37.9224 20.0159 37.4537 20.0159 36.8837C20.0159 36.1237 19.7752 35.579 19.2939 35.2497C18.8126 34.9204 18.0652 34.7557 17.0519 34.7557H16.5009V32.5707H17.0519C18.8506 32.5707 19.7499 31.969 19.7499 30.7657C19.7499 30.221 19.5852 29.7967 19.2559 29.4927C18.9392 29.1887 18.4769 29.0367 17.8689 29.0367C17.2736 29.0367 16.8112 29.2014 16.4819 29.5307C16.1652 29.8474 15.9816 30.2527 15.9309 30.7467H13.3279ZM25.6499 37.9477C26.8659 36.9344 27.8349 36.092 28.5569 35.4207C29.2789 34.7367 29.8806 34.0274 30.3619 33.2927C30.8433 32.558 31.0839 31.836 31.0839 31.1267C31.0839 30.4807 30.9319 29.974 30.6279 29.6067C30.3239 29.2394 29.8553 29.0557 29.2219 29.0557C28.5886 29.0557 28.1009 29.271 27.7589 29.7017C27.4169 30.1197 27.2396 30.696 27.2269 31.4307H24.6429C24.6936 29.9107 25.1433 28.758 25.9919 27.9727C26.8533 27.1874 27.9426 26.7947 29.2599 26.7947C30.7039 26.7947 31.8123 27.181 32.5849 27.9537C33.3576 28.7137 33.7439 29.7207 33.7439 30.9747C33.7439 31.9627 33.4779 32.9064 32.9459 33.8057C32.4139 34.705 31.8059 35.4904 31.1219 36.1617C30.4379 36.8204 29.5449 37.6184 28.4429 38.5557H34.0479V40.7597H24.6619V38.7837L25.6499 37.9477Z"
                    fill="currentColor"
                  />
                  <path
                    d="M36.1948 28.8842C36.1948 29.4438 36.2557 29.8634 36.3775 30.1432C36.4992 30.423 36.6967 30.5628 36.9699 30.5628C37.5097 30.5628 37.7796 30.0033 37.7796 28.8842C37.7796 27.7717 37.5097 27.2155 36.9699 27.2155C36.6967 27.2155 36.4992 27.3537 36.3775 27.6302C36.2557 27.9067 36.1948 28.3247 36.1948 28.8842ZM38.456 28.8842C38.456 29.6347 38.3293 30.2024 38.0758 30.5875C37.8257 30.9693 37.457 31.1602 36.9699 31.1602C36.5091 31.1602 36.1504 30.9644 35.8936 30.5727C35.6402 30.181 35.5135 29.6182 35.5135 28.8842C35.5135 28.1371 35.6352 27.5742 35.8788 27.1957C36.1257 26.8172 36.4894 26.6279 36.9699 26.6279C37.4472 26.6279 37.8142 26.8238 38.0709 27.2155C38.3276 27.6071 38.456 28.1634 38.456 28.8842ZM40.5395 31.7774C40.5395 32.3402 40.6003 32.7615 40.7221 33.0413C40.8439 33.3178 41.043 33.456 41.3195 33.456C41.596 33.456 41.8001 33.3194 41.9317 33.0462C42.0634 32.7697 42.1292 32.3468 42.1292 31.7774C42.1292 31.2145 42.0634 30.7982 41.9317 30.5283C41.8001 30.2551 41.596 30.1185 41.3195 30.1185C41.043 30.1185 40.8439 30.2551 40.7221 30.5283C40.6003 30.7982 40.5395 31.2145 40.5395 31.7774ZM42.8056 31.7774C42.8056 32.5245 42.6789 33.0906 42.4254 33.4757C42.1753 33.8575 41.8067 34.0484 41.3195 34.0484C40.8521 34.0484 40.4917 33.8526 40.2383 33.4609C39.9881 33.0693 39.8631 32.5081 39.8631 31.7774C39.8631 31.0302 39.9849 30.4674 40.2284 30.0889C40.4753 29.7104 40.839 29.5211 41.3195 29.5211C41.7869 29.5211 42.1506 29.7153 42.4106 30.1037C42.6739 30.4888 42.8056 31.0467 42.8056 31.7774ZM41.5318 26.7316L37.5278 33.9497H36.8021L40.8061 26.7316H41.5318Z"
                    fill="white"
                  />
                  <path
                    d="M23.5776 18.4198H25.5424V22.8407H23.5776V18.4198ZM30.4545 16.455H32.4193V22.8407H30.4545V16.455ZM27.0161 13.5078H28.9809V22.8407H27.0161V13.5078Z"
                    fill="#6A6A9F"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_622:13696"
                      x1="5.54791e-07"
                      y1="42.0001"
                      x2="54.6039"
                      y2="41.9535"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E323FF" />
                      <stop offset="1" stopColor="#7517F8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="mt-6">
                  <h5 className="text-xl text-gray-700 text-center">
                    Total points
                  </h5>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700">28</h3>
                    <div className="flex items-end gap-1 text-green-500">
                      <svg
                        className="w-3"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>2%</span>
                    </div>
                  </div>
                  <span className="block text-center text-gray-500">
                    Compared to last week
                  </span>
                </div>
                <table className="mt-6 -mb-2 w-full text-gray-600">
                  {score.map((score, index) => {
                      return (
                          <tbody key={index}>
                            <tr>
                              <td className="py-2">Team work</td>
                              <td className="text-gray-500">
                                {score.TeamWork}
                              </td>
                              <td>
                                <svg
                                  className="w-16 ml-auto"
                                  viewBox="0 0 68 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.4"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="19"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="35"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="51"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <path
                                    d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                                    stroke="url(#paint0_linear_622:13631)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_622:13631"
                                      x1="68"
                                      y1="7.74997"
                                      x2="1.69701"
                                      y2="8.10029"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#E323FF" />
                                      <stop offset="1" stopColor="#7517F8" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2">communication</td>
                              <td className="text-gray-500">
                                {score.communication}
                              </td>
                              <td>
                                <svg
                                  className="w-16 ml-auto"
                                  viewBox="0 0 68 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.4"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="19"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="35"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="51"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <path
                                    d="M0 7C8.62687 7 7.61194 16 17.7612 16C27.9104 16 25.3731 9 34 9C42.6269 9 44.5157 5 51.2537 5C57.7936 5 59.3731 14.5 68 14.5"
                                    stroke="url(#paint0_linear_622:13631)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_622:13631"
                                      x1="68"
                                      y1="7.74997"
                                      x2="1.69701"
                                      y2="8.10029"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#E323FF" />
                                      <stop offset="1" stopColor="#7517F8" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2">technological Knowledge</td>
                              <td className="text-gray-500">
                                {score.technologicalKnowledge}
                              </td>
                              <td>
                                <svg
                                  className="w-16 ml-auto"
                                  viewBox="0 0 68 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.4"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="19"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="35"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="51"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <path
                                    d="M0 12.929C8.69077 12.929 7.66833 9.47584 17.8928 9.47584C28.1172 9.47584 25.5611 15.9524 34.2519 15.9524C42.9426 15.9524 44.8455 10.929 51.6334 10.929C58.2217 10.929 59.3092 5 68 5"
                                    stroke="url(#paint0_linear_622:13640)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_622:13640"
                                      x1="34"
                                      y1="5"
                                      x2="34"
                                      y2="15.9524"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#8AFF6C" />
                                      <stop offset="1" stopColor="#02C751" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </td>
                            </tr>
                            <tr>
                              <td className="py-2">leadership</td>
                              <td className="text-gray-500">
                                {score.leadership}
                              </td>
                              <td>
                                <svg
                                  className="w-16 ml-auto"
                                  viewBox="0 0 68 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.4"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="19"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="35"
                                    width="14"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <rect
                                    opacity="0.4"
                                    x="51"
                                    width="17"
                                    height="21"
                                    rx="1"
                                    fill="#e4e4f2"
                                  />
                                  <path
                                    d="M0 6C8.62687 6 6.85075 12.75 17 12.75C27.1493 12.75 25.3731 9 34 9C42.6269 9 42.262 13.875 49 13.875C55.5398 13.875 58.3731 6 67 6"
                                    stroke="url(#paint0_linear_622:13649)"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                  />
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_622:13649"
                                      x1="67"
                                      y1="7.96873"
                                      x2="1.67368"
                                      y2="8.44377"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stopColor="#FFD422" />
                                      <stop offset="1" stopColor="#FF7D05" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </td>
                            </tr>
                          </tbody>
                      );
                    })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
