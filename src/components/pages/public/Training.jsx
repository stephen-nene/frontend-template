import React from "react";
import Tenderbg from "../../../assets/Tenderbg.png";
import Trainingbg from "../../../assets/Trainingbg.png";
import HubImage from "../../../assets/Hub.png";
import person1 from "../../../assets/person1.png";
import Tool1 from "../../../assets/HubV1.png";
import Tool2 from "../../../assets/Tool2.png";
import Tool3 from "../../../assets/Tool3.png";
import Insights1 from "../../../assets/Insights1.png";
import Insights2 from "../../../assets/Insights2.png";
import Insights3 from "../../../assets/Insights3.png";
import Insights4 from "../../../assets/Insights4.png";
import Insightsbg from "../../../assets/tenderIns.png";
import Newsbg from "../../../assets/News.png";
import Market1 from "../../../assets/Marketp1.png";
import Market2 from "../../../assets/Marketp2.png";
import Market3 from "../../../assets/Marketp3.png";
import John from "../../../assets/John.png";
import Annie from "../../../assets/Annie.png";
import Paul from "../../../assets/Paul.png";
import Learn1 from "../../../assets/Learn1.png";
import Learn2 from "../../../assets/Learn2.png";
import Learn3 from "../../../assets/Learn3.png";
import Learn4 from "../../../assets/Learn4.png";
import Catalog1 from "../../../assets/Catalog1.png";
import Catalog2 from "../../../assets/Catalog2.png";
import Catalog3 from "../../../assets/Catalog3.png";
import Catalog4 from "../../../assets/Catalog4.png";
import Catalog5 from "../../../assets/Catalog5.png";
import Assistance1 from "../../../assets/Assistance1.png";
import Assistance2 from "../../../assets/Assistance2.png";
import Assistance3 from "../../../assets/Assistance3.png";
// import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// lucid icons for the above


export default function Training() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section One Background */}
      <section
        className="section-one min-h-[200px] sm:min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat pl-4 sm:pl-8 md:pl-[100px]"
        style={{ backgroundImage: `url(${Trainingbg})` }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-8 sm:mt-12 md:mt-[100px] font-bold text-white mb-4 tracking-tight">
          Training & Webinars
        </h1>
      </section>

      {/* What You Will Learn Section */}
      <section className="expert-sessions py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                What you Will <span className="text-[#6BC22E]">Learn</span>
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
              <p className="mt-4 md:mt-[20px] text-xs sm:text-sm text-gray-500">
                Our interactive and practical courses cover:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Session 1 */}
            <div className="session-one bg-white border border-gray-300 rounded-md flex gap-2 sm:gap-[10px] pr-2 sm:pr-4 w-full">
              <img
                src={Learn1}
                alt="Session Thumbnail"
                className="w-24 sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-md m-0"
              />
              <div className="flex flex-col py-2 sm:py-4 gap-2 sm:gap-[15px]">
                <h2 className="text-sm sm:text-base font-bold text-gray-800">
                  Private Sector Opportunities
                </h2>
                <ul>
                  <li className="text-xs sm:text-xs">
                    Learn strategies for securing contracts with Kenyan corporates and multinationals.
                  </li>
                </ul>
              </div>
            </div>

            {/* Session 2 */}
            <div className="session-one bg-white border border-gray-300 rounded-md flex gap-2 sm:gap-[10px] pr-2 sm:pr-4 w-full">
              <img
                src={Learn2}
                alt="Session Thumbnail"
                className="w-24 sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-md m-0"
              />
              <div className="flex flex-col py-2 sm:py-4 gap-2 sm:gap-[15px]">
                <h2 className="text-sm sm:text-base font-bold text-gray-800">
                  Bid Writing Essentials
                </h2>
                <ul>
                  <li className="text-xs sm:text-xs">
                    Craft compelling bids that stand out in competitive tender processes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Session 3 */}
            <div className="session-one bg-white border border-gray-300 rounded-md flex gap-2 sm:gap-[10px] pr-2 sm:pr-4 w-full">
              <img
                src={Learn3}
                alt="Session Thumbnail"
                className="w-24 sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-md m-0"
              />
              <div className="flex flex-col py-2 sm:py-4 gap-2 sm:gap-[15px]">
                <h2 className="text-sm sm:text-base font-bold text-gray-800">
                  PPOA Compliance
                </h2>
                <ul>
                  <li className="text-xs sm:text-xs">
                    Understand and navigate the Public Procurement Oversight Authority’s guidelines.
                  </li>
                </ul>
              </div>
            </div>

            {/* Session 4 */}
            <div className="session-one bg-white border border-gray-300 rounded-md flex gap-2 sm:gap-[10px] pr-2 sm:pr-4 w-full">
              <img
                src={Learn4}
                alt="Session Thumbnail"
                className="w-24 sm:w-32 md:w-40 h-20 sm:h-24 object-cover rounded-md m-0"
              />
              <div className="flex flex-col py-2 sm:py-4 gap-2 sm:gap-[15px]">
                <h2 className="text-sm sm:text-base font-bold text-gray-800">
                  Bidding for Government Tenders
                </h2>
                <ul>
                  <li className="text-xs sm:text-xs">
                    Learn strategies for securing contracts with Kenyan corporates and multinationals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section className="tender-toolbox py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Course <span className="text-[#6BC22E]">Catalog</span>
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Catalog 1 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Catalog1}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Winning Public Sector Tenders in Kenya
              </h3>
              <p className="text-xs">The public sector offers numerous tender...</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Catalog 2 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Catalog2}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Winning Private Sector Contracts in Kenya
              </h3>
              <p className="text-xs">Unlike government tenders, private sector procurement</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Catalog 3 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Catalog3}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                How to Win AGPO Tenders
              </h3>
              <p className="text-xs">How to Win AGPO (Access to Government)</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Catalog 4 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Catalog4}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Common Mistakes When Bidding for Tenders
              </h3>
              <p className="text-xs">Many businesses lose tenders due to avoidable mistakes</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Catalog 5 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Catalog5}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                How to Prepare Tender Bid Documents Like a Pro
              </h3>
              <p className="text-xs">This hands-on training focuses on the technical</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Catalog 6 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Market2}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Tender Compliance & Legal Requirements in Kenya
              </h3>
              <p className="text-xs">Many businesses fail to secure tenders</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section
        className="newsLetter py-6 sm:py-8 md:py-12 px-2 sm:px-4 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Newsbg})` }}
      >
        <div className="mx-auto max-w-3xl">
          <div className="flex justify-between items-center text-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 md:mb-[20px]">
                Free Learning Resources
              </h1>
              <p className="text-xs sm:text-sm">
                Access valuable information about the Kenyan tendering market, including <br className="hidden sm:block" />
                guides, templates, and FAQs, in our Insights & Resources section.
              </p>
            </div>
          </div>
          <form className="">
            <button
              type="submit"
              className="bg-[#6BC22E] text-white font-medium py-1 sm:py-2 px-4 sm:px-6 rounded-md hover:bg-[#5AA028] transition-colors text-xs sm:text-sm"
            >
              Visit Knowledge Hub
            </button>
          </form>
        </div>
      </section>

      {/* Personalized Support */}
      <section className="tender-toolbox py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Need More <span className="text-[#6BC22E]">Personalized Support?</span>
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
              <p className="mt-4 md:mt-[20px] text-xs sm:text-sm text-gray-500">
                If you require specialized assistance with bid writing or tender management, we offer Customized Consultancy Services designed to address your <br className="hidden sm:block" />
                unique challenges and budget.
              </p>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Assistance 1 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Assistance1}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Bid Writing Assistance
              </h3>
              <p className="text-xs">Expert guidance on crafting compelling bids tailored to Kenyan procurement standards.</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Assistance 2 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Assistance2}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                Tender Management Support
              </h3>
              <p className="text-xs">Strategic advice on managing your tender pipeline and optimizing your bidding process.</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>

            {/* Assistance 3 */}
            <div className="course-catalog bg-white py-2 px-3 border border-gray-300 rounded-md shadow-md flex flex-col gap-3 w-full">
              <img
                src={Assistance3}
                alt="Tool Thumbnail"
                className="h-24 sm:h-32 md:h-35 object-cover rounded-md w-full"
              />
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">
                PPOA Compliance Review
              </h3>
              <p className="text-xs">Ensure your bids meet all Public Procurement Oversight Authority requirements.</p>
              <button className="bg-gradient-to-r from-[#1A523D] to-[#6BC22E] w-full sm:w-30 text-xs text-white font-semibold py-2 rounded-md">
                Full Details
              </button>
              <a href="" className="text-[#6BC22E] text-xs underline font-bold">
                Book Your Place
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}