import React from "react";
import { Button } from "@/components/shadcn/button";

export default function TenderTraining() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <div
        className="relative bg-gray-200 rounded-lg p-8 text-center"
        style={{ backgroundImage: 'url("src/assets/images/aboutusbg.png")' }}
      >
        <h1 className="text-3xl text-white font-bold">
          Winning Public Sector Tenders in Kenya
        </h1>
        <Button variant="default" className="mt-4  px-4 py-2 rounded">
          Register Interest
        </Button>
      </div>

      {/* Key Topics */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">Key Topics</h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Understanding the Public Procurement and Asset Disposal Act (PPADA)
          </li>
          <li>How to find & analyze government tenders</li>
          <li>
            Key compliance requirements (tax, registration, financials, etc.)
          </li>
          <li>How to correctly fill & submit tenders</li>
        </ul>
      </section>

      {/* Training Format */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">Training Format</h2>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Interactive Sessions: Engage in practical exercises and discussions.
          </li>
          <li>
            Real-Life Case Studies: Learn from successful Kenyan businesses.
          </li>
          <li>Q&A Sessions: Get answers to your specific questions.</li>
        </ul>
      </section>

      {/* Register Interest */}
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold">Register Interest</h2>
        <p className="mt-2">
          Enhance your tendering skills and increase your chances of winning.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Register Interest
        </button>
      </div>

      {/* Free Learning Resources */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg text-center">
        <h2 className="text-xl font-bold">Free Learning Resources</h2>
        <p className="mt-2">
          Access valuable information about the Kenya tendering market.
        </p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Visit Knowledge Hub
        </button>
      </div>

      {/* Other Related Training */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Other Related Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded shadow">
            <img
              src="src/assets/images/mission1.png"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="font-bold">Common Mistakes When Bidding</h3>
            <p>Tips to avoid tendering pitfalls.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Read Guide
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="src/assets/images/mission1.png"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="font-bold">How to Prepare Tender Documents</h3>
            <p>Step-by-step guide on structuring your documents.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Read Guide
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="src/assets/images/mission1.png"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="font-bold">
              Tender Compliance & Legal Requirements
            </h3>
            <p>Understanding procurement laws and compliance.</p>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
              Register Interest
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
