"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { addContractor } from "@/actions/actions";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import Locations from "./Locations";
import Availability from "./Availability";
import WorkExperience from "./WorkExperience";
import Equipment from "./Equipment";
import HasVehicle from "./HasVehicle";
import { daysOfWeek, locations } from "@/data";
import Reference from "./References";
import References from "./References";
import EmergencyContacts from "./EmergencyContacts";

const defaultContractor = {
  firstname: "",
  lastname: "",
  businessName: "",
  businessCategory: "",
  bestDescribes: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postcode: "",
  businessAddress: "",
  businessCity: "",
  province: "",
  businessPostcode: "",
  hasVehicle: "",
  driversLicence: "",
  insurance: "",
  employmentStatus: "",
  availabilityDays: "",
  experience: "",
  experienceDescription: "",
  hasEquipment: "",
  locations: "",
};

const defaultReferences = [
  {
    name: "",
    relationship: "",
    phone: "",
  },
  {
    name: "",
    relationship: "",
    phone: "",
  },
];
const defaultEmergencyContacts = [
  {
    name: "",
    email: "",
    phone: "",
  },
  {
    name: "",
    email: "",
    phone: "",
  },
  {
    name: "",
    email: "",
    phone: "",
  },
];

const SubContractorForm = ({}) => {
  const [newContractor, setNewContractor] = useState(defaultContractor);
  const [locationsData, setLocationsData] = useState(locations);
  const [availabilityData, setAvailabilityData] = useState(daysOfWeek);
  const [referenceInfo, setReferenceInfo] = useState(defaultReferences);
  const [emergencyContactInfo, setEmergencyContactInfo] = useState(defaultEmergencyContacts);

  return (
    <section className="max-w-[900px] mx-auto pt-28 px-4">
      <h1 className="text-2xl font-medium mb-5">Application Form</h1>
      <p className="text-[18px] font-medium mb-10">
        Please fill out and submit the form
      </p>
      <form
        action={() => addContractor(newContractor)}
        className="flex flex-col gap-10 mb-8"
      >
        {/* Personal Info */}
        <PersonalInfo
          newContractor={newContractor}
          setNewContractor={setNewContractor}
        />
        {/* Business Info */}
        <BusinessInfo
          newContractor={newContractor}
          setNewContractor={setNewContractor}
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
        <References referenceInfo={referenceInfo} setReferenceInfo={setReferenceInfo} />

        {/*Emergency Contacts*/}
        <EmergencyContacts emergencyContactInfo={emergencyContactInfo} setEmergencyContactInfo={setEmergencyContactInfo} />

        <Button
          type="submit"
          className="md:max-w-[400px] w-full self-center bg-green-600 mt-10 py-7 rounded-[12px]"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default SubContractorForm;
