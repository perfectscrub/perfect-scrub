import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CanadaPhoneInput from "./PhoneInput";

const EmergencyContacts = ({
  emergencyContactInfo,
  setEmergencyContactInfo,
  contactPhone1,
  setContactPhone1,
  contactPhone2,
  setContactPhone2,
}) => {
  return (
    <section className="border-t-2 pt-5">
      <h2 className="mb-3 font-semibold">Emergency contacts</h2>
      <p className="mb-8 text-xs font-medium">
        Please note emergency contacts will be used in emergency situations once
        hiring is complete
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-around md:justify-start md:flex-wrap">
        {/* 1st Contact */}
        <div className="max-w-[340px] w-full py-6 px-3">
          <h3>First Emergency Contact</h3>
          <div className="max-w-[300px] flex flex-col gap-4 px-2 py-5">
            <div>
              <Label htmlFor="contact1name">Name</Label>
              <Input
                className="mt-2"
                id="contact1name"
                value={emergencyContactInfo[0].name}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 0 ? { ...r, name: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact1email">Email</Label>
              <Input
                className="mt-2"
                id="contact1email"
                value={emergencyContactInfo[0].email}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 0 ? { ...r, email: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact1phone">Phone</Label>
              <CanadaPhoneInput
                className={
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                }
                id="contact1phone"
                value={contactPhone1}
                setValue={setContactPhone1}
                required
              />
            </div>
          </div>
        </div>
        {/* 2nd Contact */}
        <div className="max-w-[340px] w-full  py-6 px-3">
          <h3>Second Emergency Contact</h3>
          <div className="max-w-[300px] flex flex-col gap-4 px-2 py-5">
            <div>
              <Label htmlFor="contact2name">Name</Label>
              <Input
                className="mt-2"
                id="contact2name"
                value={emergencyContactInfo[1].name}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 1 ? { ...r, name: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact2email">Email</Label>
              <Input
                className="mt-2"
                id="contact2email"
                value={emergencyContactInfo[1].email}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 1 ? { ...r, email: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact2Phone">Phone</Label>
              <CanadaPhoneInput
                className={
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                }
                id="contact2Phone"
                value={contactPhone2}
                setValue={setContactPhone2}
                required
              />
            </div>
          </div>
        </div>
        {/* 3rd Contact */}
        {/* <div className="max-w-[340px] w-full py-6 px-3">
          <h3>Third Emergency Contact</h3>
          <div className="max-w-[300px] flex flex-col gap-4 px-2 py-5">
            <div>
              <Label htmlFor="contact3name">Name</Label>
              <Input
                className="mt-2"
                id="contact3name"
                value={emergencyContactInfo[2].name}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 2 ? { ...r, name: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact3email">Email</Label>
              <Input
                className="mt-2"
                id="contact3email"
                value={emergencyContactInfo[2].email}
                onChange={(e) =>
                  setEmergencyContactInfo((prev) =>
                    prev.map((r, i) =>
                      i === 2 ? { ...r, email: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="contact3Phone">Phone</Label>
              <CanadaPhoneInput
                className={
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                }
                id="contact3Phone"
                value={contactPhone3}
                setValue={setContactPhone3}
                required
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EmergencyContacts;
