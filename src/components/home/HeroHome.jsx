import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HeroHome() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute xl:left-1/2 lg:left-1/3 hidden lg:block transform -translate-x-1/2 bottom-0 pointer-events-none -z-30"
        aria-hidden="true"
      >
        <svg
          width="1200"
          height="490"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#A685FA" offset="0%" />
              <stop stopColor="#8254F8" offset="77.402%" />
              <stop stopColor="#703BF7" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Make your Outfit{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purpleshade-400 to-lightColor-300 dark:to-grayshade-400">
                wonderful
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-grayshade-50 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                soluta iusto expedita veniam asperiores, cumque id, tempora
                numquam voluptatibus.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    className="btn text-white bg-purpleshade-400 hover:bg-purpleshade-300 w-full mb-4 sm:w-auto sm:mb-0"
                    to={"/products"}
                  >
                    Start Shopping
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-grayshade-300 hover:bg-grayshade-200 w-full sm:w-auto sm:ml-4"
                    to={"/about"}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
