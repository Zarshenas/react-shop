import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-grayshade-50">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            
            <div className="text-sm text-grayshade-400 dark:text-lightColor-100">
              <Link
                to="#"
                className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 hover:underline transition duration-150 ease-in-out"
              >
                Terms
              </Link>{" "}
              ·{" "}
              <Link
                to="#"
                className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-purpleshade-300 font-bold mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Web Studio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  DynamicBox Flex
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Programming Forms
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Integrations
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Command-line
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-purpleshade-300 font-bold mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-purpleshade-300 font-bold mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Company values
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-grayshade-400 dark:text-lightColor-100 hover:text-grayshade-50 transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-purpleshade-300 font-bold mb-2">Subscribe</h6>
            <p className="text-sm text-grayshade-400 dark:text-lightColor-100 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full dark:bg-grayshade-500 p-4 focus:outline-none px-3 bold-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-grayshade-50"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-purpleshade-300 mx-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-grayshade-50">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link
                to="https://github.com/Zarshenas"
                target="_blank"
                className="flex justify-center items-center text-grayshade-400  hover:text-grayshade-50 bg-white hover:bg-white-100 rounded-full shadow-md transition duration-150 ease-in-out"
                aria-label="github"
              >
                <FaGithub  className="w-8 h-8 fill-current p-1" />
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-grayshade-400 dark:text-lightColor-100 mr-4">
            Made with <span className='text-purpleshade-300 '>♥</span> by{" "}
            <a
              className="text-purpleshade-300 hover:underline"
              href="https://github.com/Zarshenas"
            >
              Siza
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
