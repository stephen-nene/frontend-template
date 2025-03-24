import React from "react";
import { useState } from "react";

import { Handshake, Eye, Lightbulb, Star } from "lucide-react";


const AboutUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const faqs = [
    {
      question: "How do I sign up for the Tender?",
      answer:
        "You can sign up by visiting our website and following the registration process.",
    },
    {
      question: "What things should I prepare before starting?",
      answer:
        "Ensure you have all necessary documentation, including business registration and compliance certificates.",
    },
    {
      question: "Does the company need to subscribe?",
      answer:
        "Yes, a subscription is required to access premium features and tendering opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full h-80  bg-center flex items-center justify-center text-white text-8xl font-bold"
        style={{ backgroundImage: 'url("src/assets/images/aboutusbg.png")' }}
      >
        About Us
      </div>

      {/* Additional Text Above Mission Section */}
      <div className="max-w-full mx-auto p-4 md:p-8">
        <p className="text-gray-600 mb-6 text-justify">
          At Tender Hub, our mission is to empower businesses by providing a
          centralized platform for discovering and managing tender
          opportunities. We aim to simplify the tender search process, enhance
          efficiency, and foster success for our users.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="max-w-full mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
          Our Mission
        </h2>
        <p>
          At Tender Hub, our mission is to empower businesses by providing a
          centralized platform for discovering and managing tender
          opportunities. We aim to simplify the tender search process, enhance
          efficiency, and foster success for our users.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <img
              src="src/assets/images/mission1.png"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold text-green-600">
                1. Simplify Tender Discovery
              </h3>
              <p className="text-gray-600 mt-2">
                We strive to make it easy for businesses to find relevant tender
                opportunities by aggregating tenders from diverse sources into
                one intuitive platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                2. Foster Success
              </h3>
              <p className="text-gray-600 mt-2">
                We are committed to helping our users win more contracts by
                providing them with the tools and resources they need to craft
                winning bids.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold text-green-600">
                3. Promote Transparency And Fairness
              </h3>
              <p className="text-gray-600 mt-2">
                We believe in transparency and fairness in the procurement
                process. Our platform ensures that all users have equal access
                to tender information, promoting fair competition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600">
                4. Enhance Efficiency
              </h3>
              <p className="text-gray-600 mt-2">
                Our goal is to streamline the tender search process, reducing
                the time and effort required to find and manage tender
                opportunities.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="src/assets/images/mission2.png"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-full mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Handshake className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Collaboration
              </h3>
              <p className="text-gray-600 mt-2">
                We foster collaboration between businesses and tender issuers,
                promoting fair competition and mutual growth.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Eye className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Transparency
              </h3>
              <p className="text-gray-600 mt-2">
                We believe in transparency and ensure that all tender
                information is accurate and up-to-date.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Lightbulb className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Customer Focus
              </h3>
              <p className="text-gray-600 mt-2">
                Our users are at the heart of everything we do. We strive to
                provide exceptional support and resources to help them succeed.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <Star className="text-green-600 w-10 h-10 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                Innovation
              </h3>
              <p className="text-gray-600 mt-2">
                We continuously innovate and improve our platform to meet the
                evolving needs of our users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq-section" className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Providing valuable insights and practical advice related to the
          tendering process and eProcurement solutions.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
          {/* FAQ Items */}
          <div className="w-full md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <button className="text-green-600 text-xl font-bold">
                    {openFAQ === index ? "−" : "+"}
                  </button>
                </div>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Image beside FAQ */}
          <div className="w-full md:w-1/2">
            <img
              src="/src/assets/faqs.png"
              alt="Support Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-grey text-green py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">
          Stay updated with the latest tender opportunities and industry
          insights.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded text-gray-800 w-full md:w-80"
          />
          <button className="bg-green-500 text-white font-bold p-3 rounded w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/src/assets/images/john.png"
              alt="John Doe"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <h3 className="text-lg font-bold text-green-600 mt-4">John Doe</h3>
            <p className="text-gray-500">Procurement</p>
            <p className="text-gray-600 mt-2 italic">
              “Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development.”
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/src/assets/images/ann.png"
              alt="Annie Sasha"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <h3 className="text-lg font-bold text-green-600 mt-4">
              Annie Sasha
            </h3>
            <p className="text-gray-500">CEO</p>
            <p className="text-gray-600 mt-2 italic">
              “Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development.”
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/src/assets/images/johnie.png"
              alt="Jonnie Walker"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <h3 className="text-lg font-bold text-green-600 mt-4">
              Jonnie Walker
            </h3>
            <p className="text-gray-500">Finance</p>
            <p className="text-gray-600 mt-2 italic">
              “Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
