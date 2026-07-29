import Link from "next/link";
import { Opportunity } from "@/data/opportunities";

export default function OpportunityCard({
  opportunity,
}: {
  opportunity: Opportunity;
}) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl transition">

      <div className="flex justify-between items-start">

        <h2 className="text-xl font-bold text-[#0B1F3A]">
          {opportunity.name}
        </h2>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Verified
        </span>

      </div>


      <p className="mt-4 text-gray-600">
        🏛 {opportunity.organiser}
      </p>


      <p className="text-gray-600">
        📍 {opportunity.location} ({opportunity.mode})
      </p>


      <p className="text-gray-600">
        📅 {opportunity.date}
      </p>


      <div className="flex gap-2 mt-5 flex-wrap">

        {opportunity.committees.map((committee) => (
          <span
            key={committee}
            className="bg-[#0B1F3A] text-white px-3 py-1 rounded-full text-sm"
          >
            {committee}
          </span>
        ))}

      </div>


      <p className="mt-5 text-red-600">
        Deadline: {opportunity.deadline}
      </p>


      <p className="mt-2 text-gray-700">
        Fee: {opportunity.fee}
      </p>


      <Link
        href={`/opportunities/${opportunity.id}`}
        className="mt-5 block text-center w-full bg-[#D4AF37] py-3 rounded-xl font-bold"
      >
        View Details
      </Link>


    </div>
  );
}