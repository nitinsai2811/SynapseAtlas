import Link from "next/link";

export default function Footer() {

  return (

    <footer className="bg-[#0B1F3A] text-white mt-20">


      <div className="max-w-7xl mx-auto px-6 py-12">


        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-[#D4AF37]">
              Synapse Atlas
            </h2>


            <p className="mt-4 text-gray-300">

              Discover MUN conferences,
              academic events and leadership opportunities.

            </p>

          </div>





          {/* Explore */}

          <div>

            <h3 className="font-bold text-lg">
              Explore
            </h3>


            <div className="mt-4 space-y-3 text-gray-300">


              <Link
                href="/opportunities"
                className="block hover:text-[#D4AF37]"
              >
                Find MUNs
              </Link>


              <Link
                href="/submit"
                className="block hover:text-[#D4AF37]"
              >
                Submit Opportunity
              </Link>


            </div>

          </div>





          {/* Company */}

          <div>

            <h3 className="font-bold text-lg">
              Company
            </h3>


            <div className="mt-4 space-y-3 text-gray-300">


              <Link
                href="/about"
                className="block hover:text-[#D4AF37]"
              >
                About
              </Link>


              <Link
                href="/contact"
                className="block hover:text-[#D4AF37]"
              >
                Contact
              </Link>


            </div>


          </div>





          {/* Contact */}

          <div>

            <h3 className="font-bold text-lg">
              Connect
            </h3>


            <p className="mt-4 text-gray-300">
              contact@synapseatlas.com
            </p>


            <p className="mt-2 text-gray-300">
              India
            </p>


          </div>



        </div>




        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">


          © {new Date().getFullYear()} Synapse Atlas.
          All rights reserved.


        </div>



      </div>


    </footer>

  );

}