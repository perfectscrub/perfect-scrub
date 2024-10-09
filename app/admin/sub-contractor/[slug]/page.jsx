import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import prisma from "@/lib/db";

// jspdf to convert to pdf
async function SubContractorPage({ params }) {
  const { slug } = params;
  const contractorData = await prisma.contractor.findUnique({
    where: {
      slug,
    },
    include: {
      references: true,
      emergencyContacts: true,
    },
  });

  // console.log("contractorData", contractorData);

  return (
    <main className="min-h-screen py-40 max-w-[1200px] px-6 mx-auto">
      <Link href={"/admin?tab=contractors"} className="flex gap-3">
        <ArrowLeft /> Back to Dashboard
      </Link>
      <h1 className="mt-10 text-center text-xl md:text-3xl underline underline-offset-2">
        Subcontractor Applicant Information
      </h1>
      <section className="max-w-1200px mx-auto">
        <h3 className="mt-8 text-xl md:text-2xl">Personal Information</h3>
        <div className="mt-4 px-5 flex flex-col md:flex-row md:justify-around">
          <div className="mt-4 px-5">
            <p className="mt-4">
              {" "}
              <span className="font-bold">First Name:</span>{" "}
              {contractorData?.firstname}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Last Name:</span>{" "}
              {contractorData?.lastname}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Email:</span> {contractorData?.email}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Address:</span>{" "}
              {contractorData?.address}
            </p>
          </div>
          <div className="mt-4 px-5">
            <p className="mt-4">
              {" "}
              <span className="font-bold">City:</span> {contractorData?.city}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Postcode:</span>{" "}
              {contractorData?.postcode}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Province:</span>{" "}
              {contractorData?.email}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Phone:</span>{" "}
              {contractorData?.address}
            </p>
          </div>
        </div>

        <h3 className="mt-8 text-xl md:text-2xl">Business</h3>
        <div className="mt-10 px-5 flex flex-col md:flex-row md:justify-around">
          <div className="mt-4 px-5">
            <p className="mt-4">
              {" "}
              <span className="font-bold">Business Name:</span>{" "}
              {contractorData?.businessName}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Business Type:</span>{" "}
              {contractorData?.businessType}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Business Address:</span>{" "}
              {contractorData?.businessAddress}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Business City:</span>{" "}
              {contractorData?.businesscity}
            </p>
          </div>
          <div className="mt-4 px-5">
            <p className="mt-4">
              {" "}
              <span className="font-bold">City:</span> {contractorData?.city}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Business Postcode:</span>{" "}
              {contractorData?.businessPostcode}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Insurance:</span>{" "}
              {contractorData?.insurance}
            </p>
            <p className="mt-4">
              {" "}
              <span className="font-bold">Phone:</span>{" "}
              {contractorData?.address}
            </p>
          </div>
        </div>

        <h3 className="mt-10 text-xl md:text-2xl">References</h3>
        <div className="mt-5 max-w-[1200px] mx-auto flex flex-col gap-5">
          {contractorData.references.map((r) => (
            <Reference key={r.phone} {...r} />
          ))}
        </div>
        <h3 className="mt-8 text-xl md:text-2xl">Emergency Contacts</h3>
        <div className="mt-10 max-w-[1200px] mx-auto flex flex-col gap-5">
          {contractorData.emergencyContacts.map((contact) => (
            <EmergencyContact key={contact.phone} {...contact} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SubContractorPage;

const Reference = ({ name, relationship, phone }) => {
  return (
    <ul className="md:text-center mx-auto flex flex-col md:flex-row gap-3">
      <li className="min-w-[200px] border p-3 rounded-[6px]">{name}</li>
      <li className="min-w-[200px] border p-3 rounded-[6px]">{relationship}</li>
      <li className="min-w-[200px] border p-3 rounded-[6px]">{phone}</li>
    </ul>
  );
};

const EmergencyContact = ({ name, email, phone }) => {
  return (
    <ul className="md:text-center mx-auto flex flex-col md:flex-row gap-3">
      <li className="min-w-[200px] border p-3 rounded-[6px]">{name}</li>
      <li className="min-w-[200px] border p-3 rounded-[6px]">{email}</li>
      <li className="min-w-[200px] border p-3 rounded-[6px]">{phone}</li>
    </ul>
  );
};
