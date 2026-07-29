export default function About() {

  return (

    <main className="min-h-screen bg-white">


      {/* Hero */}

      <section className="bg-[#0B1F3A] text-white py-20 px-6 text-center">

        <h1 className="text-5xl font-bold">
          About Synapse Atlas
        </h1>


        <p className="mt-5 text-xl text-gray-300 max-w-3xl mx-auto">
          Building a central platform for students to discover
          Model United Nations conferences and academic opportunities.
        </p>

      </section>



      {/* Mission */}

      <section className="max-w-6xl mx-auto px-6 py-16">


        <div className="grid md:grid-cols-2 gap-10">


          <div className="border rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Our Mission
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">

              Synapse Atlas aims to simplify the way students discover
              conferences, competitions and leadership opportunities.

              We connect delegates with verified organisers while helping
              organisers reach the right audience.

            </p>

          </div>




          <div className="border rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Our Vision
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">

              To create India's most trusted student opportunity
              discovery platform where every learner can find,
              participate and grow.

            </p>

          </div>


        </div>


      </section>




      {/* Values */}

      <section className="bg-gray-50 py-16 px-6">


        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl font-bold text-center text-[#0B1F3A]">
            What We Believe
          </h2>



          <div className="grid md:grid-cols-3 gap-8 mt-12">


            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                Accessibility
              </h3>

              <p className="mt-3 text-gray-600">
                Every student should easily find opportunities to learn and compete.
              </p>

            </div>



            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                Quality
              </h3>

              <p className="mt-3 text-gray-600">
                Verified listings ensure students receive reliable information.
              </p>

            </div>




            <div className="bg-white rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-bold">
                Growth
              </h3>

              <p className="mt-3 text-gray-600">
                Encouraging debate, leadership and global awareness.
              </p>

            </div>


          </div>


        </div>


      </section>


    </main>

  );

}