"use client";

import { useState } from "react";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function Opportunities() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  const filteredOpportunities = opportunities.filter((item) => {

    const text = `
      ${item.name}
      ${item.organiser}
      ${item.location}
      ${item.mode}
      ${item.committees.join(" ")}
      ${item.fee}
    `.toLowerCase();


    const matchesSearch =
      text.includes(search.toLowerCase());


    const matchesFilter =
      filter === "All" ||
      item.mode === filter ||
      item.fee === filter;


    return matchesSearch && matchesFilter;

  });



  return (

    <main className="min-h-screen bg-white">


      {/* Header */}

      <section className="bg-[#0B1F3A] text-white py-20 px-6 text-center">

        <h1 className="text-5xl font-bold">
          Explore MUN Opportunities
        </h1>


        <p className="mt-5 text-xl text-gray-300">
          Discover verified Model United Nations conferences.
        </p>



        <div className="max-w-4xl mx-auto mt-10">


          <input

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            placeholder="Search MUNs, committees, cities..."

            className="w-full p-6 rounded-xl text-black outline-none border"

          />


        </div>


      </section>




      {/* Filters + Cards */}


      <section className="max-w-6xl mx-auto py-16 px-6">


        <div className="flex flex-wrap gap-3 mb-10">



          <button

            onClick={() => setFilter("All")}

            className={`px-5 py-2 rounded-full border ${
              filter === "All"
                ? "bg-[#0B1F3A] text-white"
                : "bg-white"
            }`}

          >
            All

          </button>




          <button

            onClick={() => setFilter("Online")}

            className={`px-5 py-2 rounded-full border ${
              filter === "Online"
                ? "bg-[#0B1F3A] text-white"
                : "bg-white"
            }`}

          >
            Online

          </button>





          <button

            onClick={() => setFilter("Offline")}

            className={`px-5 py-2 rounded-full border ${
              filter === "Offline"
                ? "bg-[#0B1F3A] text-white"
                : "bg-white"
            }`}

          >
            Offline

          </button>





          <button

            onClick={() => setFilter("Free")}

            className={`px-5 py-2 rounded-full border ${
              filter === "Free"
                ? "bg-[#0B1F3A] text-white"
                : "bg-white"
            }`}

          >
            Free

          </button>





          <button

            onClick={() => setFilter("Paid")}

            className={`px-5 py-2 rounded-full border ${
              filter === "Paid"
                ? "bg-[#0B1F3A] text-white"
                : "bg-white"
            }`}

          >
            Paid

          </button>


        </div>





        {
          filteredOpportunities.length > 0 ? (

            <div className="grid md:grid-cols-3 gap-8">


              {
                filteredOpportunities.map((opportunity) => (

                  <OpportunityCard

                    key={opportunity.id}

                    opportunity={opportunity}

                  />

                ))
              }


            </div>


          ) : (


            <div className="text-center py-20">


              <h2 className="text-2xl font-bold">

                No opportunities found

              </h2>



              <p className="text-gray-500 mt-3">

                Try searching for another committee, city or organiser.

              </p>


            </div>


          )
        }



      </section>



    </main>

  );

}