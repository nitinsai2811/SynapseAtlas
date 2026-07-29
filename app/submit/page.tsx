import Link from "next/link";

export default function SubmitOpportunity() {

  return (

    <main className="min-h-screen bg-white">


      <section className="bg-[#0B1F3A] text-white py-20 px-6 text-center">


        <h1 className="text-5xl font-bold">
          Submit Your MUN Opportunity
        </h1>


        <p className="mt-5 text-xl text-gray-300 max-w-3xl mx-auto">
          Help delegates discover your conference through Synapse Atlas.
          All submissions are reviewed before publishing.
        </p>


      </section>



      <section className="max-w-5xl mx-auto py-16 px-6">


        <div className="grid md:grid-cols-3 gap-8">


          <div className="border rounded-2xl p-6">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              1. Submit Details
            </h2>

            <p className="mt-3 text-gray-600">
              Provide conference details, committees, dates and registration link.
            </p>

          </div>




          <div className="border rounded-2xl p-6">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              2. Review Process
            </h2>

            <p className="mt-3 text-gray-600">
              Our team verifies the information before publishing.
            </p>

          </div>




          <div className="border rounded-2xl p-6">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              3. Reach Delegates
            </h2>

            <p className="mt-3 text-gray-600">
              Your opportunity becomes visible to students.
            </p>

          </div>


        </div>





        <div className="mt-16 text-center">


          <Link

            href="https://forms.gle/Fk1DMkDa7ke72N437"

            target="_blank"

            className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-bold text-lg"

          >

            Submit Opportunity Form

          </Link>


        </div>




      </section>


    </main>

  );

}