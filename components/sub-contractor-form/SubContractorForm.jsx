"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { addContractor } from "@/actions/actions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import Locations from "./Locations";
import Availability from "./Availability";

const defaultContractor = {
  firstname: "",
  lastname: "",
  businessName: "",
  businessCategory: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postcode: "",
  businessAddress: "",
  businessCity: "",
  province: "",
  businessPostcode: "",
  hasVehicle: false,
  driversLicence: "",
  insurance: "",
  employmentStatus: "",
  availabilityDays: "",
  experience: "",
  experienceDescription: "",
  hasEquipment: "",
  locations: "",
};

const SubContractorForm = ({}) => {
  const [newContractor, setNewContractor] = useState(defaultContractor);
  const [locationsData, setLocationsData] = useState(locations);
  const [availabilityData, setAvailabilityData] = useState(days);

  return (
    <section className="max-w-[900px] mx-auto pt-28 px-4">
      <h1 className="text-2xl font-medium mb-5">Application Form</h1>
      <p className="text-[18px] font-medium mb-10">
        Please fill out and submit the form
      </p>
      <form
        action={() => addContractor(newContractor)}
        className="flex flex-col gap-20 mb-8"
      >
        {/* Personal Info */}
        <PersonalInfo newContractor={newContractor} setNewContractor={setNewContractor}/>
        {/* Business Info */}
        <BusinessInfo newContractor={newContractor} setNewContractor={setNewContractor}/>

        {/* <div className="grid md:grid-cols-2 gap-4"> */}
          
          {/* Availability */}
          <Availability availabilityData={availabilityData} setAvailabilityData={setAvailabilityData}/>
          
          {/* Locations */}
          <Locations locationsData={locationsData} setLocationsData={setLocationsData}/>



          <h2>Experience</h2>
          <div>
            <Label htmlFor="employmentStatus">Employment Status</Label>
            <div className="pt-2 px-2">
              <Select
                value={newContractor.employmentStatus}
                onValueChange={(value) =>
                  setNewContractor({
                    ...newContractor,
                    employmentStatus: value,
                  })
                }
                className="flex flex-col gap-4"
              >
                <SelectTrigger id="employmentStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Self-employed">Self-employed</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="experience">
              Select your type of cleaning experience
            </Label>
            {/* <Input
              className="mt-2"
              id="experience"
              value={newContractor.experience}
              onChange={(e) =>
                setNewContractor({
                  ...newContractor,
                  experience: e.target.value,
                })
              }
              required
            /> */}
            <div className="pt-2 px-2">
              <Select
                value={newContractor.experience}
                onValueChange={(value) =>
                  setNewContractor({
                    ...newContractor,
                    experience: value,
                  })
                }
                className="flex flex-col gap-4"
              >
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Commercial Office Cleaning">
                    Commercial Office Cleaning
                  </SelectItem>
                  <SelectItem value="Residential Cleaning">
                    Residential Cleaning
                  </SelectItem>
                  <SelectItem value="Post Construction Cleaning">
                    Post Construction Cleaning
                  </SelectItem>
                  <SelectItem value="Floor Care (including Floor Strip, Wax and Carpet Cleaning)">
                    Floor Care (including Floor Strip, Wax and Carpet Cleaning)
                  </SelectItem>
                  <SelectItem value="No Cleaning Experience">
                    No Cleaning Experience
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="experienceDescription">
              Please give a brief description of your cleaning experience
            </Label>
            <Textarea
              id="experienceDescription"
              className="md:w-1/2"
              value={newContractor.experienceDescription}
              onChange={(e) =>
                setNewContractor({
                  ...newContractor,
                  experienceDescription: e.target.value,
                })
              }
              placeholder="e.g years of experience and other relevant information"
              required
            />
          </div>
          <div className="flex flex-col gap-4 mt-8">
            {/* <Checkbox
              id="hasEquipment"
              checked={newContractor.hasEquipment}
              onCheckedChange={(checked) =>
                setNewContractor({ ...newContractor, hasEquipment: checked })
              }
            /> */}
            <Label htmlFor="hasEquipment">
              Please confirm you have all Cleaning tools and Equipment or you
              are willing to buy{" "}
            </Label>
            <RadioGroup
              onValueChange={(value) =>
                setNewContractor({
                  ...newContractor,
                  hasEquipment: value,
                })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="Yes, I have all cleaning tools and Equipment"
                  id="r1"
                />
                <Label htmlFor="r1">
                  Yes, I have all cleaning tools and Equipment
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="No, I do not have all tools but I am willing to buy"
                  id="r2"
                />
                <Label htmlFor="r2">
                  No, I do not have all tools but I am willing to buy
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="No I do not have tool and I am not willing to buy"
                  id="r3"
                />
                <Label htmlFor="r3">
                  No I do not have tool and I am not willing to buy
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-2 mt-8">
              <Checkbox
                id="hasVehicle"
                checked={newContractor.hasVehicle}
                onCheckedChange={(checked) =>
                  setNewContractor({ ...newContractor, hasVehicle: checked })
                }
              />
              <Label htmlFor="hasVehicle">Has Vehicle</Label>
            </div>

            <div className={cn("flex gap-2")}>
              {/* <Label htmlFor="driversLicence">Driver's Licence</Label> */}
              <Input
                disabled={newContractor.hasVehicle !== true}
                className="mt-2"
                id="driversLicence"
                value={newContractor.driversLicence}
                placeholder="Driver's Licence"
                onChange={(e) =>
                  setNewContractor({
                    ...newContractor,
                    driversLicence: e.target.value,
                  })
                }
              />
            </div>
          </div>
        {/* </div> */}

        {/* 
        <hr />
        <h2>References</h2>
        <p>
          We need to contact reliable references who are willing to share their
          knowledge about you. We will contact them by phone and ask questions
          about you and your cleaning experience. Please note that we cannot
          accept immediate family members, common law partners, partners or
          other people who would have a conflict of interest by providing us
          information about you."
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          2 references contacts: name, relationship, phone 
        </div>
        <hr />
        <h2>Emergency Contacts</h2>
        <p>
          Please note emergency contacts will be used in emergency situations
          once hiring is complete
        </p>
        <div className="grid md:grid-cols-2 gap-4">
           3 emergency contacts 
        </div>*/}
        <Button type="submit" className="bg-green-600 mt-10 h-12 px-10">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default SubContractorForm;

const days = [
  { text: "Monday", value: false },
  { text: "Tuesday", value: false },
  { text: "Wednesday", value: false },
  { text: "Thursday", value: false },
  { text: "Friday", value: false },
  { text: "Saturday", value: false },
  { text: "Sunday", value: false },
];

const locations = [
  { text: "All locations", value: false },
  { text: "Acton", value: false },
  { text: "Ajax", value: false },
  { text: "Ancaster", value: false },
  { text: "Aurora", value: false },
  { text: "Barrie", value: false },
  { text: "Bolton", value: false },
  { text: "Bradford", value: false },
  { text: "Brampton", value: false },
  { text: "Brantford", value: false },
  { text: "Burlington", value: false },
  { text: "Caledon", value: false },
  { text: "Cambridge", value: false },
  { text: "Concord", value: false },
  { text: "Dundas", value: false },
  { text: "Erin", value: false },
  { text: "Etobicoke", value: false },
  { text: "GeorgeTown", value: false },
  { text: "Georgina", value: false },
  { text: "Grimsby", value: false },
  { text: "Guelph", value: false },
  { text: "Halton Hills", value: false },
  { text: "Hamilton", value: false },
  { text: "Innisfil", value: false },
  { text: "Keswick", value: false },
  { text: "King City", value: false },
  { text: "Kitchener", value: false },
  { text: "Klienburg", value: false },
  { text: "Lindsay", value: false },
  { text: "London", value: false },
  { text: "Maple", value: false },
  { text: "Markham", value: false },
  { text: "Milton", value: false },
  { text: "Mississauga", value: false },
  { text: "Newmarket", value: false },
  { text: "New Tecumseth", value: false },
  { text: "Niagara Falls", value: false },
  { text: "Oakville", value: false },
  { text: "Orangeville", value: false },
  { text: "Orillia", value: false },
  { text: "Oshawa", value: false },
  { text: "Paris Ontario", value: false },
  { text: "Peterborough", value: false },
  { text: "Pickering", value: false },
  { text: "Richmond Hill", value: false },
  { text: "Rockwood", value: false },
  { text: "Scarborough", value: false },
  { text: "St Catherine's", value: false },
  { text: "Stoney Creek", value: false },
  { text: "Stouffville", value: false },
  { text: "Sunderland", value: false },
  { text: "Toronto-Downtown", value: false },
  { text: "Toronto-East", value: false },
  { text: "Toronto-North York", value: false },
  { text: "Toronto-West", value: false },
  { text: "Uxbridge", value: false },
  { text: "Vaughn", value: false },
  { text: "Waterdown", value: false },
  { text: "Waterloo", value: false },
  { text: "Way North", value: false },
  { text: "Way North East", value: false },
  { text: "Whitby", value: false },
  { text: "Woodbridge", value: false },
];
