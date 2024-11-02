import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import CanadaPhoneInput from "./PhoneInput";

const PersonalInfo = ({ newContractor, setNewContractor, phone, setPhone }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-5 font-semibold">Personal Information</h2>
      <div className="grid md:grid-cols-2 gap-4 px-2">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input
            className="mt-2"
            id="firstname"
            value={newContractor.firstname}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                firstname: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input
            className="mt-2"
            id="lastname"
            value={newContractor.lastname}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                lastname: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <CanadaPhoneInput
            id="phone"
            value={phone}
            setValue={setPhone}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            className="mt-2"
            id="email"
            type="email"
            value={newContractor.email}
            onChange={(e) =>
              setNewContractor({ ...newContractor, email: e.target.value })
            }
            required
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            className="mt-2"
            id="address"
            value={newContractor.address}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                address: e.target.value,
              })
            }
            required
            autoComplete="street-address"
          />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            className="mt-2"
            id="city"
            value={newContractor.city}
            onChange={(e) =>
              setNewContractor({ ...newContractor, city: e.target.value })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="postcode">Postcode</Label>
          <Input
            className="mt-2"
            id="postcode"
            value={newContractor.postcode}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                postcode: e.target.value,
              })
            }
            required
            autoComplete="postal-code"
          />
        </div>
        <div>
          <Label htmlFor="province">Province</Label>
          <Input
            className="mt-2"
            id="province"
            value={newContractor.province}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                province: e.target.value,
              })
            }
            required
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
