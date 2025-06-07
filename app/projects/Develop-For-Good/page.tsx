"use client"

import Image from "next/image";
import dfg_proj from "@/lib/cover/dfg_proj.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";

export default function DevelopForGoodPage() {
  return (
    <div className="-mt-28 sm:-mt-36 px-4 sm:px-6 lg:px-12">
      <div className="w-full mx-auto mt-4 mb-10 p-4 sm:p-6 md:p-8 bg-pink rounded-lg shadow-md flex flex-col sm:flex-row gap-6 transition-all duration-200 hover:backdrop-blur-lg">
        <Image
          src={dfg_proj}
          alt="DFG Project visual"
          width={800}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
          priority
        />
        <div className="w-full">
          <Link
            href="/"
            className=" inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
          >
            <FaArrowCircleLeft size={16} />
            Back Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">AGC i-Ready Data Dashboard</h1>
          <p className="mt-3">Develop For Good - Winter 2025 (Oct. 2024 - Feb, 2025)</p>
          <p className="mt-3">Data pipeline powering an analytics dashboard that delivers educational insights and visualizations for a nonprofit.</p>
        </div>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">About Nonprofit 💼</h1>
        <p>The Academy for Global Citizenship (AGC) is a Chicago public school and teacher training institute that utilizes a teaching model involving social justice, environmental education, entrepreneurship, dual language learning, and health and wellness, in an effort to address educational, environmental, and racial health care inequities.</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Objective 🌟</h1>
        <p>AGC currently has student testing data in multiple large datasets, for Math and ELA subjects, which are subdivided into further subject domains. These datasets are from i-Ready, an educational platform. They would like to utilize this data for insights to understand student performance and make adaptations as necessary. As such, they have requested our team to clean, organize, and visualize this data in a way that would provide insights into student performance holistically and individually, and put everything into an organized dashboard. This dashboard would serve as an educational tool for AGC students, staff and community members to understand how AGC’s teaching models are positively impacting AGC site and community, ultimately impacting 1500+ individuals.</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Demo Video 🎥</h1>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/D3mFfe6sgQc"
            title="Project video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-5"
          ></iframe>
        </div>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Project Objective 🌟</h1>
        <p>AGC currently has student testing data in multiple large datasets, for Math and ELA subjects, which are subdivided into further subject domains. These datasets are from i-Ready, an educational platform. They would like to utilize this data for insights to understand student performance and make adaptations as necessary. As such, they have requested our team to clean, organize, and visualize this data in a way that would provide insights into student performance holistically and individually, and put everything into an organized dashboard. This dashboard would serve as an educational tool for AGC students, staff and community members to understand how AGC’s teaching models are positively impacting AGC site and community, ultimately impacting 1500+ individuals.</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Process 💭</h1>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Client loads raw datasets into a Google Drive Folder</li>
          <li>The data in the Google Drive Folder gets cleaned, processed, and transferred into a bucket in Google Cloud Storage</li>
          <li>From a Google Cloud Storage bucket, a cloud function loads data into a table in <b>Google BigQuery</b>.</li>
          <li>Views are generated from the BigQuery tables, consolidating and calculating specific data for visualizations</li>
          <li>Looker Studio sources the views, and presents <b>interactive visualizations</b> for client use</li>
        </ol>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Development 💻</h1>
        <p>Infrastructure: Google Cloud Platform (Google Cloud Storage, Google BigQuery, Google Cloud Run, Google Looker Studio)</p>
        <p>Programming Languages: Python, SQL</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Results 💯</h1>
        <p>33+ interactive visualizations showcasing student testing data in an organized dashboard</p>
        <p>Automated process for client to upload data files and view visualizations from that data</p>
      </div>
      <div className="w-full m-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Reflection 🪞</h1>
        <p>(tbd)</p>
      </div>
    </div>
  );
}
