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
import {
  daysOfWeek,
  defaultContractor,
  defaultEmergencyContacts,
  defaultReferences,
  locations,
} from "../../utils/data";
import References from "./References";
import EmergencyContacts from "./EmergencyContacts";

const SubContractorForm = ({}) => {
  const [newContractor, setNewContractor] = useState(defaultContractor);
  const [locationsData, setLocationsData] = useState(locations);
  const [availabilityData, setAvailabilityData] = useState(daysOfWeek);
  const [referenceInfo, setReferenceInfo] = useState(defaultReferences);
  const [phone, setPhone] = useState("");
  const [refPhone1, setRefPhone1] = useState("");
  const [refPhone2, setRefPhone2] = useState("");
  const [contactPhone1, setContactPhone1] = useState("");
  const [contactPhone2, setContactPhone2] = useState("");
  const [contactPhone3, setContactPhone3] = useState("");
  const [emergencyContactInfo, setEmergencyContactInfo] = useState(
    defaultEmergencyContacts
  );

  return (
    <section className="max-w-[900px] mx-auto pt-28 px-4">
      <h1 className="text-2xl font-medium mb-5">Application Form</h1>
      <p className="text-[18px] font-medium mb-10">
        Please fill the form below
      </p>
      <form
        action={() => {
          addContractor({
            ...newContractor,
            phone,
            locations: locationsData[0].value
              ? ["All locations"]
              : locationsData
                  .filter((curr) => curr.value)
                  .map((curr) => curr.text),
            availabilityDays: availabilityData.reduce(
              (acc, current) =>
                current.value ? `${acc} ${current.text}` : acc,
              ""
            ),
            references: [
              { ...referenceInfo[0], phone: refPhone1 },
              { ...referenceInfo[1], phone: refPhone2 },
            ],
            emergencyContacts: [
              { ...emergencyContactInfo[0], phone: contactPhone1 },
              { ...emergencyContactInfo[1], phone: contactPhone2 },
              { ...emergencyContactInfo[2], phone: contactPhone3 },
            ],
          });
        }}
        className="flex flex-col gap-8 mb-8"
      >
        {/* Personal Info */}
        <PersonalInfo
          newContractor={newContractor}
          setNewContractor={setNewContractor}
          phone={phone}
          setPhone={setPhone}
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
          contactPhone3={contactPhone3}
          setContactPhone3={setContactPhone3}
        />

        <Button
          type="submit"
          className="text-[18px] md:max-w-[400px] w-full self-center bg-blue-600 my-10 py-7 rounded-[12px]"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default SubContractorForm;
