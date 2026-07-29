"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <nav className="bg-white border-b shadow-sm">


      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold text-[#0B1F3A]"
        >
          Synapse <span className="text-[#D4AF37]">Atlas</span>
        </Link>




        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">


          <Link
            href="/"
            className="hover:text-[#D4AF37]"
          >
            Home
          </Link>


          <Link
            href="/opportunities"
            className="hover:text-[#D4AF37]"
          >
            Explore MUNs
          </Link>


          <Link
            href="/submit"
            className="hover:text-[#D4AF37]"
          >
            Submit
          </Link>


          <Link
            href="/about"
            className="hover:text-[#D4AF37]"
          >
            About
          </Link>


          <Link
            href="/contact"
            className="hover:text-[#D4AF37]"
          >
            Contact
          </Link>



          <Link
            href="/opportunities"
            className="bg-[#D4AF37] px-5 py-2 rounded-xl font-bold text-black"
          >
            Find MUNs
          </Link>


        </div>





        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#0B1F3A]"
        >
          ☰
        </button>


      </div>





      {/* Mobile Menu */}

      {
        open && (

          <div className="md:hidden border-t px-6 py-5 space-y-4">


            <Link
              href="/"
              className="block"
            >
              Home
            </Link>


            <Link
              href="/opportunities"
              className="block"
            >
              Explore MUNs
            </Link>


            <Link
              href="/submit"
              className="block"
            >
              Submit Opportunity
            </Link>


            <Link
              href="/about"
              className="block"
            >
              About
            </Link>


            <Link
              href="/contact"
              className="block"
            >
              Contact
            </Link>


          </div>

        )
      }


    </nav>

  );

}