import Link from "next/link";

export default function Submit() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#0B1F3A] text-white py-20 px-6 text-center">

        <h1 className="text-5xl font-bold">
          List Your MUN Opportunity
        </h1>

        <p className="mt-5 text-xl text-gray-300 max-w-3xl mx-auto">
          Reach thousands of delegates through Synapse Atlas.
          Submit your conference details and get featured on our platform.
        </p>


        <Link
          href="https://forms.gle/cUkbwxoBLrn1YP817"
          target="_blank"
          className="inline-block mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold"
        >
          Submit Your Conference
        </Link>

      </section>


      <section className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-[#0B1F3A]">
          Why list with Synapse Atlas?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Reach Delegates
            </h3>
            <p className="mt-3 text-gray-600">
              Connect with students interested in MUNs and leadership events.
            </p>
          </div>


          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Verified Platform
            </h3>
            <p className="mt-3 text-gray-600">
              Build trust through a curated opportunity marketplace.
            </p>
          </div>


          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-xl">
              Easy Submission
            </h3>
            <p className="mt-3 text-gray-600">
              Share your details through our organiser form.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}