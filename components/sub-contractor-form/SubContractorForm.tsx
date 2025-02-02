"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { addContractor } from "@/actions/subcontractor";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import Locations from "./Locations";
import Availability from "./Availability";
import WorkExperience from "./WorkExperience";
import Equipment from "./Equipment";
import HasVehicle from "./HasVehicle";
import {
  daysOfWeek,
  defaultContractor,
  defaultEmergencyContacts,
  defaultExperience,
  defaultReferences,
  locations,
} from "../../utils/data";
import References from "./References";
import EmergencyContacts from "./EmergencyContacts";
import { z } from "zod";
import type { ContractorModelData } from "@/utils/types";
import { SubContractorSchema } from "@/schemas/index";
import SubmitButton from "./SubmitButton";
import { toast } from "sonner";

const SubContractorForm = ({}) => {
  const [newContractor, setNewContractor] = useState(defaultContractor);
  const [locationsData, setLocationsData] = useState(locations);
  const [availabilityData, setAvailabilityData] = useState(daysOfWeek);
  const [experience, setExperience] = useState(defaultExperience);
  const [referenceInfo, setReferenceInfo] = useState(defaultReferences);
  const [phone, setPhone] = useState("");
  const [refPhone1, setRefPhone1] = useState("");
  const [refPhone2, setRefPhone2] = useState("");
  const [contactPhone1, setContactPhone1] = useState("");
  const [contactPhone2, setContactPhone2] = useState("");
  const [sameAddress, setSameAddress] = useState(false);
  const [emergencyContactInfo, setEmergencyContactInfo] = useState(
    defaultEmergencyContacts
  );
  const [count, setCount] = useState(0);

  const resetForm = () => {
    setNewContractor(defaultContractor);
    setLocationsData(locations);
    setAvailabilityData(daysOfWeek);
    setReferenceInfo(defaultReferences);
    setExperience(defaultExperience), setPhone("");
    setRefPhone1("");
    setRefPhone2("");
    setContactPhone1("");
    setContactPhone2("");
    setEmergencyContactInfo(defaultEmergencyContacts);
    setSameAddress(false);
    setCount(0);
  };

  // const formRef = useRef<HTMLFormElement>(null);

  const arrLocations: string[] = locationsData
    .filter((curr) => curr.value)
    .map((curr) => curr.text);

  function parseData<T extends z.ZodTypeAny>(
    data: ContractorModelData,
    schema: T
  ) {
    return schema.safeParse(data);
  }

  const addValues: ContractorModelData = {
    ...newContractor,
    slug: newContractor.businessName.replace(/\s+/g, "-").toLowerCase(),
    phone,
    experience: experience.reduce(
      (acc, current) =>
        current.checked ? `${acc} ${current.experience}` : acc,
      ""
    ),
    locations: locationsData[0].value ? ["All locations"] : arrLocations,

    availabilityDays: availabilityData.reduce(
      (acc, current) => (current.value ? `${acc} ${current.text}` : acc),
      ""
    ),
    references: [
      { ...referenceInfo[0], phone: refPhone1 },
      { ...referenceInfo[1], phone: refPhone2 },
    ],
    emergencyContacts: [
      { ...emergencyContactInfo[0], phone: contactPhone1 },
      { ...emergencyContactInfo[1], phone: contactPhone2 },
    ],
  };

  const handleSubmit = async () => {
    if (refPhone1 === refPhone2) {
      toast.error("Please provide unique phone numbers for references");
      return;
    }
    if (contactPhone1 === contactPhone2) {
      toast.error(
        "Please provide unique phone numbers for your emergency contacts"
      );
      return;
    }

    try {
      const validatedData = parseData(addValues, SubContractorSchema);

      if (!validatedData?.success) {
        validatedData.error.issues.map((issue) => {
          toast.error(issue.message);
        });
        return;
      }

      const result = await addContractor(addValues);

      if (result?.error) {
        throw new Error(result.error);
      }
      resetForm();
      toast.success(
        `The form was submitted. Please allow for 5 working days to process.\nContact hr@perfectscrubcleaning.com for inquiries`,
        { duration: 8000, closeButton: true }
      );
    } catch (error) {
      console.log("submit error",error);
      toast.error(error, { duration: 8000, closeButton: true });
      return;
    }
  };

  return (
    <section className="max-w-[900px] mx-auto pt-28 px-4">
      <h1 className="text-2xl font-medium mb-5">Application Form</h1>
      <p className="text-[18px] font-medium mb-10">
        Please fill the form below
      </p>
      <form
        // ref={formRef}
        action={handleSubmit}
        className="flex flex-col gap-8 mb-8"
      >
        {/* Personal Info */}
        <PersonalInfo
          newContractor={newContractor}
          setNewContractor={setNewContractor}
          phone={phone}
          setPhone={setPhone}
          sameAddress={sameAddress}
          setSameAddress={setSameAddress}
        />
        {/* Business Info */}
        <BusinessInfo
          newContractor={newContractor}
          setNewContractor={setNewContractor}
          setSameAddress={setSameAddress}
          sameAddress={sameAddress}
        />

        {/* Availability */}
        <Availability
          availabilityData={availabilityData}
          setAvailabilityData={setAvailabilityData}
        />

        {/* Locations */}

        <Locations
          locationsData={locationsData}
          setLocationsData={setLocationsData}
        />

        {/*Experience*/}
        <WorkExperience
          newContractor={newContractor}
          setNewContractor={setNewContractor}
          experience={experience}
          setExperience={setExperience}
          count={count}
          setCount={setCount}
        />

        {/*Equipment*/}
        <Equipment
          newContractor={newContractor}
          setNewContractor={setNewContractor}
        />

        {/*Has vehicle*/}
        <HasVehicle
          newContractor={newContractor}
          setNewContractor={setNewContractor}
        />

        {/*References*/}
        <References
          referenceInfo={referenceInfo}
          setReferenceInfo={setReferenceInfo}
          refPhone1={refPhone1}
          setRefPhone1={setRefPhone1}
          refPhone2={refPhone2}
          setRefPhone2={setRefPhone2}
        />

        {/*Emergency Contacts*/}
        <EmergencyContacts
          emergencyContactInfo={emergencyContactInfo}
          setEmergencyContactInfo={setEmergencyContactInfo}
          contactPhone1={contactPhone1}
          setContactPhone1={setContactPhone1}
          contactPhone2={contactPhone2}
          setContactPhone2={setContactPhone2}
        />

        <SubmitButton />
      </form>
    </section>
  );
};

export default SubContractorForm;
