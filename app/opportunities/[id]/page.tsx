import Link from "next/link";
import { opportunities } from "@/data/opportunities";

export default async function OpportunityDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const opportunity = opportunities.find(
    (item) => item.id === Number(id)
  );


  if (!opportunity) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Opportunity Not Found
        </h1>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-white">


      {/* Header */}

      <section className="bg-[#0B1F3A] text-white py-20 px-6">

        <div className="max-w-5xl mx-auto">


          <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-bold">
            Featured Conference
          </span>


          <h1 className="text-5xl font-bold mt-8">
            {opportunity.name}
          </h1>


          <p className="mt-5 text-xl text-gray-300">
            Organised by {opportunity.organiser}
          </p>


        </div>


      </section>





      {/* Details */}

      <section className="max-w-5xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-2 gap-10">



          <div className="border rounded-2xl p-8">


            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Conference Details
            </h2>



            <div className="mt-6 space-y-4 text-gray-700">


              <p>
                📍 Location: {opportunity.location}
              </p>


              <p>
                🌐 Mode: {opportunity.mode}
              </p>


              <p>
                📅 Date: {opportunity.date}
              </p>


              <p>
                ⏳ Registration Deadline: {opportunity.deadline}
              </p>


              <p>
                💰 Fee: {opportunity.fee}
              </p>


            </div>


          </div>





          <div className="border rounded-2xl p-8">


            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              Committees
            </h2>



            <div className="flex flex-wrap gap-3 mt-6">


              {opportunity.committees.map((committee)=>(
                
                <span
                  key={committee}
                  className="bg-[#0B1F3A] text-white px-4 py-2 rounded-full"
                >
                  {committee}
                </span>

              ))}


            </div>



            <Link
              href={opportunity.registration}
              target="_blank"
              className="block text-center mt-10 bg-[#D4AF37] text-black py-4 rounded-xl font-bold"
            >
              Register Now
            </Link>



          </div>



        </div>



      </section>



    </main>

  );

}