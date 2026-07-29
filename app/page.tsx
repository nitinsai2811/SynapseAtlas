import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";
export default function Home() {

  return (
    <main className="min-h-screen bg-white">


      {/* Hero */}

      <section className="bg-[#0B1F3A] text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            Discover MUNs.
            <br />
            Build Your Voice.
          </h1>


          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Synapse Atlas helps students discover Model United Nations
            conferences, academic events and leadership opportunities.
          </p>


          <div className="flex justify-center gap-5 mt-10 flex-wrap">


            <Link
              href="/opportunities"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold"
            >
              Explore MUNs
            </Link>


            <Link
              href="/submit"
              className="border border-white px-8 py-4 rounded-xl font-bold"
            >
              List Your Opportunity
            </Link>


          </div>


        </div>

      </section>



      {/* Search */}

      <section className="max-w-5xl mx-auto px-6 -mt-10">

        <div className="bg-white shadow-xl rounded-2xl p-8">


          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            Find Your Next Opportunity
          </h2>


          <input
            placeholder="Search MUNs, committees, cities..."
            className="mt-5 w-full border p-4 rounded-xl outline-none"
          />


        </div>

      </section>




      {/* Stats */}

      <section className="max-w-6xl mx-auto px-6 py-20">


        <div className="grid md:grid-cols-4 gap-6">


          {[
            ["500+", "Students Reached"],
            ["50+", "MUN Opportunities"],
            ["100+", "Committees"],
            ["24/7", "Discovery"]
          ].map((item)=>(
            
            <div
              key={item[1]}
              className="border rounded-2xl p-8 text-center"
            >

              <h2 className="text-4xl font-bold text-[#0B1F3A]">
                {item[0]}
              </h2>

              <p className="mt-3 text-gray-600">
                {item[1]}
              </p>

            </div>

          ))}


        </div>


      </section>





      {/* Why Synapse */}

      <section className="max-w-6xl mx-auto px-6 py-20">


        <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
          Why Synapse Atlas?
        </h2>



        <div className="grid md:grid-cols-3 gap-8 mt-12">


          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-bold">
              Verified Opportunities
            </h3>

            <p className="mt-3 text-gray-600">
              Every conference is reviewed before listing.
            </p>

          </div>



          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-bold">
              Easy Discovery
            </h3>

            <p className="mt-3 text-gray-600">
              Find MUNs by location, mode and committees.
            </p>

          </div>




          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-bold">
              Organiser Network
            </h3>

            <p className="mt-3 text-gray-600">
              Help conferences reach delegates.
            </p>

          </div>


        </div>


      </section>




{/* Featured Conferences */}

<section className="bg-gray-50 py-20 px-6">

  <div className="max-w-6xl mx-auto">


    <div className="flex justify-between items-center mb-10">

      <h2 className="text-4xl font-bold text-[#0B1F3A]">
        Featured Conferences
      </h2>


      <Link
        href="/opportunities"
        className="text-[#D4AF37] font-bold"
      >
        View All →
      </Link>

    </div>



    <div className="grid md:grid-cols-3 gap-8">


      {opportunities.slice(0,3).map((opportunity) => (

        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
        />

      ))}


    </div>


  </div>


</section>

      {/* How it works */}

      <section className="bg-gray-50 py-20 px-6">


        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            How It Works
          </h2>


          <div className="grid md:grid-cols-3 gap-8 mt-12">


            <div>
              <h3 className="text-xl font-bold">
                1. Discover
              </h3>

              <p className="mt-2">
                Browse upcoming MUN conferences.
              </p>
            </div>



            <div>
              <h3 className="text-xl font-bold">
                2. Register
              </h3>

              <p className="mt-2">
                Apply through organiser forms.
              </p>
            </div>



            <div>
              <h3 className="text-xl font-bold">
                3. Participate
              </h3>

              <p className="mt-2">
                Debate and build your skills.
              </p>
            </div>


          </div>


        </div>


      </section>



    </main>
  );
}