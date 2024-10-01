import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const PersonalInfo = ({newContractor, setNewContractor}) => {
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
          <Input
            className="mt-2"
            id="phone"
            value={newContractor.phone}
            onChange={(e) =>
              setNewContractor({ ...newContractor, phone: e.target.value })
            }
            required
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
