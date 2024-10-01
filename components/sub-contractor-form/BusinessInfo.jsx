import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Link from "next/link";

const BusinessInfo = ({ newContractor, setNewContractor }) => {
  return (
    <section className="border-t-2 pt-5">
      <h2 className="mb-3 font-semibold">Business Information</h2>
      <p className="mb-5">
        (Note: If you do not have a business, you can register a sole
        proprietorship in Ontario{" "}
        <Link
          href={
            "https://www.ontario.ca/page/business/start/register-your-business-online"
          }
          className="text-blue-600 hover:underline underline-offset-1"
        >
          here
        </Link>{" "}
        )
      </p>

      <div className="grid md:grid-cols-2 gap-4 px-2">
        <div>
          <Label htmlFor="businessName">Business Name</Label>
          <Input
            className="mt-2"
            id="businessName"
            value={newContractor.businessName}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                businessName: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="businessCategory" className="">
            Business Category
          </Label>
          <div className="pt-2">
            <Select
              value={newContractor.businessCategory}
              onValueChange={(value) =>
                setNewContractor({
                  ...newContractor,
                  businessCategory: value,
                })
              }
              className="flex flex-col gap-4"
            >
              <SelectTrigger id="businessCategory">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sole Proprietorship: I work alone and can provide my own tools and cleaning supplies">
                  Sole Proprietorship: I work alone and can provide my own tools
                  and cleaning supplies
                </SelectItem>
                <SelectItem value="Federally Incorporated Business: I have a crew of cleaners working with me and tools and supplies">
                  Federally Incorporated Business: I have a crew of cleaners
                  working with me and tools and supplies
                </SelectItem>
                <SelectItem value="I own a cleaning company, I have staff but I need more clients for my business.">
                  I own a cleaning company, I have staff but I need more clients
                  for my business.
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="businessAddress">Business Address</Label>
          <Input
            className="mt-2"
            id="businessAddress"
            value={newContractor.businessAddress}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                businessAddress: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="businessCity">Business City</Label>
          <Input
            className="mt-2"
            id="businessCity"
            value={newContractor.businessCity}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                businessCity: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="businessPostcode">Business Postcode</Label>
          <Input
            className="mt-2"
            id="businessPostcode"
            value={newContractor.businessPostcode}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                businessPostcode: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="insurance">Insurance</Label>
          <Input
            className="mt-2"
            id="insurance"
            value={newContractor.insurance}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                insurance: e.target.value,
              })
            }
            required
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
