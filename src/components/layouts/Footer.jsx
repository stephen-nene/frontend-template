import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Github,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 dark:text-white  pt-12  pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Tender
              <span className="text-green-600 dark:text-green-400">Hub</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Connecting businesses with tender opportunities worldwide. Find,
              bid, and win contracts with our comprehensive tender listing
              platform.
            </p>
            <div className="flex space-x-3 mt-6 text-black">
              <Button
                size="icon"
                className="bg-blue-400 hover:bg-blue-600 rounded-full h-8 w-8 p-0"
              >
                <Facebook size={18} className=" hover:text-white bg-" />
              </Button>
              <Button
                size="icon"
                className="bg-sky-400 hover:bg-sky-600 rounded-full h-8 w-8 p-0"
              >
                <Twitter size={18} />
              </Button>
              <Button
                // variant="ghost"
                size="icon"
                className="bg-fuchsia-400 hover:bg-fuchsia-600 rounded-full h-8 w-8 p-0"
              >
                <Instagram size={18} />
              </Button>
              <Button
                // variant="ghost"
                size="icon"
                className="bg-teal-400 hover:bg-teal-600 rounded-full h-8 w-8 p-0"
              >
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/tender"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Tender
                </Link>
              </li>
              <li>
                <Link
                  to="/work-with-us"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Work With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/private-coaching"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Private Coaching
                </Link>
              </li>
              <li>
                <Link
                  to="/business-advice"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Business Advices
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/advertise"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/commitment"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Our Commitment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Support Us
                </Link>
              </li>
              <li>
                <Link
                  to="/report-bug"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Report a Bug
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stay updated with the latest tender opportunities and industry
                insights.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-l-md focus:outline-none"
              />

              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Tender Hub. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              to="/privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
            >
              Terms of Service
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
            >
              <ArrowUp size={14} className="mr-1" /> Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
