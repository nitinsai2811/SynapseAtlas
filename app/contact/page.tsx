export default function Contact() {

  return (

    <main className="min-h-screen bg-white">


      {/* Header */}

      <section className="bg-[#0B1F3A] text-white py-20 px-6 text-center">

        <h1 className="text-5xl font-bold">
          Contact Synapse Atlas
        </h1>

        <p className="mt-5 text-xl text-gray-300">
          Have questions, suggestions or partnership ideas?
          Get in touch with us.
        </p>

      </section>




      {/* Contact Cards */}

      <section className="max-w-5xl mx-auto py-16 px-6">


        <div className="grid md:grid-cols-3 gap-8">


          <div className="border rounded-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Organisers
            </h2>

            <p className="mt-3 text-gray-600">
              Want to list your conference on Synapse Atlas?
            </p>

          </div>




          <div className="border rounded-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Students
            </h2>

            <p className="mt-3 text-gray-600">
              Need help finding an opportunity?
            </p>

          </div>




          <div className="border rounded-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Partnerships
            </h2>

            <p className="mt-3 text-gray-600">
              Interested in collaborating with us?
            </p>

          </div>


        </div>





        {/* Contact Information */}

        <div className="mt-16 bg-gray-50 rounded-2xl p-10 text-center">


          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Get In Touch
          </h2>


          <p className="mt-5 text-gray-600">
            Email: contact@synapseatlas.com
          </p>


          <p className="mt-3 text-gray-600">
            We usually respond within 24-48 hours.
          </p>


        </div>


      </section>



    </main>

  );

}