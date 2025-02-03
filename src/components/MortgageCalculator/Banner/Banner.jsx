import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-6xl flex-col justify-between py-10 font-medium text-white md:flex-row md:items-center"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <motion.a
              href="#"
              className=" font-semibold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Product
            </motion.a>
            <motion.a
              href="#"
              className=" font-semibold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Features
            </motion.a>
            <motion.a
              href="#"
              className=" font-semibold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              Marketplace
            </motion.a>
            <motion.a
              href="#"
              className=" font-semibold text-gray-900"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              Company
            </motion.a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
            <button class="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-[#124E66] py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span class="z-10 pr-2">LOGIN</span>
              <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#748D92] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div class="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-neutral-50"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </nav>
        <motion.div
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              className="mt-6 flow-root"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <motion.a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-900 hover:bg-gray-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    Product
                  </motion.a>
                  <motion.a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-900 hover:bg-gray-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  >
                    Features
                  </motion.a>
                  <motion.a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-900 hover:bg-gray-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    Marketplace
                  </motion.a>
                  <motion.a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2  font-semibold text-gray-900 hover:bg-gray-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    Company
                  </motion.a>
                </div>
                <div className="py-6">
                  <motion.a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5  font-semibold text-gray-900 hover:bg-gray-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                  >
                    Log in
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

      <motion.div
        className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center min-h-screen -mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative">
              <motion.div
                className=" relative rounded-full px-3 py-1  bg-[#124E66] text-white   ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.7, 1] }}
                transition={{
                  duration: 35,
                  ease: "easeInOut",
                }}
              >
                Unlock your dream home with our easy financing options.
              </motion.div>
            </div>
          </div>
          <div className="sm:text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl my-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              Calculate Your Mortgage{" "}
              <span className="text-[#124E66]  "> Instantly </span>
            </motion.h1>
            <motion.p
              className="my-10 text-2xl leading-8 text-gray-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Estimate your monthly payments and find the best loan options
              tailored to your needs. Empower your home-buying journey today
            </motion.p>
            <motion.div
              className="mt-8 flex gap-x-4 sm:justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* <motion.a
                href="/MortgageCalculator"
                className="inline-block rounded-md bg-[#124E66] px-4 py-4  font-semibold text-white shadow-sm hover:bg-indigo-700"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                Get Started without Login
              </motion.a> */}

              <motion.a href = "/MortgageCalculator" class="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-[#124E66] py-1 pl-6 pr-14 font-medium text-neutral-50">
                <span class="z-10 pr-2">Get Started Without Login</span>
                <div class="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#748D92] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div class="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </motion.a>
              {/* <motion.a
                href="/contact"
                className="inline-block rounded-md px-4 py-4  font-semibold text-gray-900 ring-1 bg-[#124E66] ring-gray-900/10 hover:ring-gray-900/20"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                Contact Us
              </motion.a> */}
              <motion.a href = "https://sijan-dahal-portfolio.vercel.app/" target= {"_blank"}  class="relative h-14 flex items-center overflow-hidden rounded-full border border-neutral-200 bg-transparent px-6 text-neutral-950 before:absolute before:bottom-0 before:left-0 before:block before:h-full before:w-full before:-translate-x-full before:bg-[#124E66]  before:transition-transform hover:before:translate-x-0 hover:text-white"  initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.2 }}><span class="relative">Contact Author</span></motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
};
