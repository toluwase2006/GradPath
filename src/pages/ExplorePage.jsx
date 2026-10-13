import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Opportunities } from '../components/Opportunities';
import { FaRegBookmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const ExplorePage = () => {
  return (
    <main className="">

      {/* Hero Section */}

      <section className="bg-[var(--color-border-strong)] text-center h-72 w-full flexItemsCenter flex-col">
        <h1 className='text-[1.5rem] md:text-[3rem] font-bold'>Kickstart Your Career in Nigeria</h1>
        <p className='text-[0.75rem] text-[1rem]'>Curated internships, graduate trainee roles, and fellowships all in one place.</p>
      </section>

      {/* Opportunity Listing Section */}

      <section className="relative flex justify-center items-center">
        <div className='container absolute -top-20'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bg-[var(--color-surface)] text-[var(--color-text)] p-4 rounded-md shadow-md'>
            <div>
              <label className="">Role or Company</label>
              <div className='flex gap-2 items-center mt-2'>
                <input type="text" className='inputField' placeholder='Role or Company' />
                <button className='bg-[var(--color-primary)] cursor-pointer hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-md'>
                  <FaSearch size={16} />
                </button>
              </div>
            </div>
            <div className="filterGroup">
              <label htmlFor="category" className='m'>Category</label>
              <select id="category" className="inputField mt-2" defaultValue="">
                <option value="" disabled>
                  Select category
                </option>
                <option value="scholarship">Scholarship</option>
                <option value="internship">Internship</option>
                <option value="job">Job</option>
                <option value="fellowship">Fellowship</option>
                <option value="grant">Grant</option>
              </select>
            </div>

            <div className="filterGroup">
              <label htmlFor="location">Location</label>
              <select id="location" className="inputField mt-2" defaultValue="">
                <option value="" disabled>
                  Select location
                </option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="port-harcourt">Port Harcourt</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {Opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-[var(--color-surface)] text-[var(--color-text)] p-4 flex flex-col h-full rounded-md shadow-md mb-4">
                <span className={`self-start p-2 bg-blue-100 text-blue-800 rounded-md ${opportunity.mode === "Internship" ? "bg-blue-100 text-blue-800" : opportunity.mode === "Graduate Programme" ? "bg-green-100 text-green-800" : opportunity.mode === "Job" ? "bg-yellow-100 text-yellow-800" : opportunity.mode === "Scholarship" ? "bg-purple-100 text-purple-800" : opportunity.mode === "Fellowship" ? "bg-pink-100 text-pink-800" : ""}`}>
                  {opportunity.mode}
                </span>
                <h2 className='mt-4 text-xl font-bold'>{opportunity.title}</h2>
                <p className='mt-2 text-sm font-bold'>{opportunity.company}</p>
                <p className="flex items-center text-sm mt-2">
                  <IoLocationOutline size={16} className='inline-block mr-1' />
                  {opportunity.location}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Deadline:</span>
                  {opportunity.deadline}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <p className='text-md text-[var(--color-primary-hover)] cursor-pointer'>View Details</p>
                  <FaRegBookmark size={24} className='text-[var(--color-primary-hover)] cursor-pointer' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default ExplorePage