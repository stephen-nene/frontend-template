import React from "react";
import Tenderbg from "../../../assets/Tenderbg.png";
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
import Subscribe from "./Subscribe"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";



export default function Knowledgehub() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section One with Full-Height Background */}
      <section
        className="section-one min-h-[300px] sm:min-h-[400px] md:min-h-screen flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat px-4 sm:pl-8 md:pl-[100px]"
        style={{ backgroundImage: `url(${HubImage})` }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-8 sm:mt-12 md:mt-[100px] font-bold text-white mb-4 tracking-tight">
          Knowledge Hub
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white max-w-xl sm:max-w-2xl leading-relaxed">
          Your one-stop resource for insights, guides, and best <br className="hidden sm:block" />
          practices in African tendering
        </p>
      </section>

      {/* Expert Sessions Section */}
      <section className="expert-sessions py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-[#6BC22E]">Expert </span>Sessions
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer mt-2 sm:mt-0">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Session 1 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={person1}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                Mastering PPOA Guidelines <br className="hidden sm:block" /> for SMEs
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={Market2}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                Crafting Winning Bids for African Government Contracts
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>

            {/* Session 3 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={Market3}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                Unlocking Social Value in African <br className="hidden sm:block" /> Procurement
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Toolbox Section */}
      <section className="tender-toolbox py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Tender <span className="text-[#6BC22E]">Toolbox</span>
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer mt-2 sm:mt-0">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Tool 1 */}
            <div className="tool-item bg-white border border-gray-300 rounded-md shadow-md p-3 sm:p-4 flex flex-col items-center bg-cover bg-center bg-no-repeat w-full sm:w-[300px] md:w-[350px] mx-auto">
              <img
                src={Tool1}
                alt="Tool Thumbnail"
                className="w-10 sm:w-12 object-cover rounded-md mb-4"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                African Tender Proposal Template
              </h3>
            </div>

            {/* Tool 2 */}
            <div className="tool-item bg-white border border-gray-300 rounded-md shadow-md p-3 sm:p-4 flex flex-col items-center bg-cover bg-center bg-no-repeat w-full sm:w-[300px] md:w-[350px] mx-auto">
              <img
                src={Tool2}
                alt="Tool Thumbnail"
                className="w-10 sm:w-12 object-cover rounded-md mb-4"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                PPOA Compliance Checklist for SMEs
              </h3>
            </div>

            {/* Tool 3 */}
            <div className="tool-item bg-white border border-gray-300 rounded-md shadow-md p-3 sm:p-4 flex flex-col items-center bg-cover bg-center bg-no-repeat w-full sm:w-[300px] md:w-[350px] mx-auto">
              <img
                src={Tool3}
                alt="Tool Thumbnail"
                className="w-10 sm:w-12 object-cover rounded-md mb-4"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-800 text-center">
                Bid Writing Guide for County Government Tenders
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse Section */}
      <section className="market-pulse py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                <span className="text-[#6BC22E]">Market </span>Pulse
              </h1>
              <div className="w-full h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer mt-2 sm:mt-0">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Session 1 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={Market1}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                African Procurement Trends <br className="hidden sm:block" /> 2025
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={Market2}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                Top 5 Industries for Tender Opportunities in Africa
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>

            {/* Session 3 */}
            <div className="session-one bg-white border border-gray-300 rounded-md p-3 sm:p-4 flex flex-col">
              <img
                src={Market3}
                alt="Session Thumbnail"
                className="w-full h-40 sm:h-48 md:h-60 object-cover rounded-md mb-4"
              />
              <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                Impact of Africa’s Vision 2030 on <br className="hidden sm:block" /> Procurement
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">22 November 2025</p>
                <div className="bg-[#6BC22E] text-white w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full">
                  <ChevronRight className="text-xs sm:text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender Insights Section */}
      <section className="tender-insights py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Tender <span className="text-[#6BC22E]">Insights</span> Library
              </h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <p className="text-[#6BC22E] text-xs sm:text-sm font-medium hover:underline cursor-pointer mt-2 sm:mt-0">
              View All
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Insight 1 */}
            <div className="insight-item border border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center shadow-md min-h-[120px] sm:min-h-[150px] bg-cover bg-center bg-no-repeat">
              <div className="pt-8 sm:pt-[100px] flex flex-col justify-center items-center h-full">
                <div className="border border-gray-300 rounded-md p-1 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-4">
                  <img
                    src={Insights1}
                    alt="Insight Thumbnail"
                    className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 text-center pb-2">
                  Public Sector Trends
                </h3>
              </div>
            </div>

            {/* Insight 2 */}
            <div className="insight-item border border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center shadow-md min-h-[120px] sm:min-h-[150px] bg-cover bg-center bg-no-repeat">
              <div className="pt-8 sm:pt-[100px] flex flex-col justify-center items-center h-full">
                <div className="border border-gray-300 rounded-md p-1 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-4">
                  <img
                    src={Insights2}
                    alt="Insight Thumbnail"
                    className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 text-center pb-2">
                  Private Sector Opportunities
                </h3>
              </div>
            </div>

            {/* Insight 3 */}
            <div className="insight-item border border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center shadow-md min-h-[120px] sm:min-h-[150px] bg-cover bg-center bg-no-repeat">
              <div className="pt-8 sm:pt-[100px] flex flex-col justify-center items-center h-full">
                <div className="border border-gray-300 rounded-md p-1 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-4">
                  <img
                    src={Insights3}
                    alt="Insight Thumbnail"
                    className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 text-center pb-2">
                  Sustainable Procurement Practices
                </h3>
              </div>
            </div>

            {/* Insight 4 */}
            <div className="insight-item border border-gray-300 rounded-md p-4 sm:p-6 flex flex-col items-center shadow-md min-h-[120px] sm:min-h-[150px] bg-cover bg-center bg-no-repeat">
              <div className="pt-8 sm:pt-[100px] flex flex-col justify-center items-center h-full">
                <div className="border border-gray-300 rounded-md p-1 w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mb-4">
                  <img
                    src={Insights4}
                    alt="Insight Thumbnail"
                    className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-md"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 text-center pb-2">
                  PPOA Compliance
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Subscribe />

      {/* Testimonials Section */}
      <section className="testimonials py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-[40px]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Testimonials</h1>
              <div className="w-24 sm:w-32 md:w-40 h-[8px] md:h-[10px] mt-2 bg-gradient-to-r from-[#1A523D] to-[#6BC22E]"></div>
            </div>
            <div className="flex space-x-2 sm:space-x-4 mt-2 sm:mt-0">
              <button className="text-[#14AE5C] bg-[#F5F5FF] rounded-full p-1 sm:p-2">
                <ChevronLeft className="text-sm sm:text-base" />
              </button>
              <button className="text-[#14AE5C] bg-[#F5F5FF] rounded-full p-1 sm:p-2">
                <ChevronRight className="text-sm sm:text-base" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Testimonial 1 */}
            <div className="testimonial-item rounded-md shadow-md p-4 sm:p-6 flex flex-col bg-cover bg-center bg-no-repeat min-h-[120px] sm:min-h-[150px]">
              <div className="flex items-center mb-4">
                <img
                  src={John}
                  alt="Testimonial Image"
                  className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-full mr-3 sm:mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[#6BC22E] text-sm sm:text-base">John Doe</h3>
                  <p className="text-xs sm:text-sm text-gray-800">Procurement Officer</p>
                </div>
              </div>
              <p className="italic text-xs sm:text-xs text-gray-800 text-center">
                "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-item rounded-md shadow-md p-4 sm:p-6 flex flex-col bg-cover bg-center bg-no-repeat min-h-[120px] sm:min-h-[150px]">
              <div className="flex items-center mb-4">
                <img
                  src={Annie}
                  alt="Testimonial Image"
                  className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-full mr-3 sm:mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[#6BC22E] text-sm sm:text-base">Jane Smith</h3>
                  <p className="text-xs sm:text-sm text-gray-800">CEO</p>
                </div>
              </div>
              <p className="italic text-xs sm:text-xs text-gray-800 text-center">
                "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-item rounded-md shadow-md p-4 sm:p-6 flex flex-col bg-cover bg-center bg-no-repeat min-h-[120px] sm:min-h-[150px]">
              <div className="flex items-center mb-4">
                <img
                  src={Paul}
                  alt="Testimonial Image"
                  className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-full mr-3 sm:mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[#6BC22E] text-sm sm:text-base">Michael Okoro</h3>
                  <p className="text-xs sm:text-sm text-gray-800">Supply Chain Manager</p>
                </div>
              </div>
              <p className="italic text-xs sm:text-xs text-gray-800 text-center">
                "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}