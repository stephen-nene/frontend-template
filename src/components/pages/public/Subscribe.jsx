import React from 'react'
import Newsbg from "../../../assets/News.png";

export default function About() {
  return (
    <section
            className="newsLetter py-6 sm:py-8 md:py-12 px-2 sm:px-4 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Newsbg})` }}
          >
            <div className="mx-auto max-w-3xl">
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <div>
                  <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    Subscribe Newsletter & <br className="hidden sm:block" /> Get Latest News
                  </h1>
                </div>
              </div>
              <form className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full py-2 pl-4 pr-24 sm:pr-32 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6BC22E] text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#6BC22E] text-white font-medium py-1 px-4 sm:px-6 rounded-md hover:bg-[#5AA028] transition-colors text-xs sm:text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </section>
  )
}
