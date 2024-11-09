import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const BusinessInfo = ({
  newContractor,
  setNewContractor,
  sameAddress,
  setSameAddress,
}) => {
  
  return (
    <section className="border-t-2 pt-5">
      <div className="mb-3 flex items-center gap-5">
        <h2 className="font-semibold">Business Information</h2>
        <div className="flex gap-2">
          <Checkbox
            id={"same-address"}
            checked={sameAddress}
            onCheckedChange={(checked) => {
              setSameAddress(checked);
              if(sameAddress){
                setNewContractor({
                  ...newContractor, 
                  businessAddress: "",
                  businessCity: "",
                  businessPostcode: "",
                })
              }else{
                setNewContractor({
                  ...newContractor, 
                  businessAddress: newContractor.address,
                  businessCity: newContractor.city,
                  businessPostcode: newContractor.postcode,
                })
              }
            }}
          />
          <Label htmlFor={"same-address"} className="text-xs">
            Same address as above
          </Label>
        </div>
      </div>
      <p className="mb-5 text-xs font-medium">
        Note: If you do not have a business, you can register a sole
        proprietorship in Ontario{" "}
        <Link
          href={
            "https://www.ontario.ca/page/business/start/register-your-business-online"
          }
          className="text-blue-600 hover:underline underline-offset-1"
        >
          here
        </Link>{" "}
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
          <Label htmlFor="employmentStatus" className="">
            Which Category best describes you
          </Label>
          <div className="pt-2">
            <Select
              name="employmentStatus"
              value={newContractor.employmentStatus}
              onValueChange={(value) =>
                setNewContractor({
                  ...newContractor,
                  employmentStatus: value,
                })
              }
            >
              <SelectTrigger id="employmentStatus">
                <SelectValue placeholder="Choose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1. Individual: No tools">
                  I am an individual looking to begin work as an Employee. I do
                  not have my own tools.
                </SelectItem>
                <SelectItem value="2. Individual: Contract work">
                  I am an individual and I can provide my own work tools and
                  cleaning products
                </SelectItem>
                <SelectItem value="3. Company: Contract work">
                  I have my own Cleaning business and a team I work with. I
                  would like more cleaning contracts
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="businessType" className="">
            Business Type
          </Label>
          <div className="pt-2">
            <Select
              name="businessType"
              value={newContractor.businessType}
              onValueChange={(value) =>
                setNewContractor({
                  ...newContractor,
                  businessType: value,
                })
              }
              className="flex flex-col gap-4"
            >
              <SelectTrigger id="businessType">
                <SelectValue placeholder="Choose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sole Proprietorship">
                  Sole Proprietorship: I work alone and can provide my own tools
                  and cleaning supplies
                </SelectItem>
                <SelectItem value="Federally Incorporated">
                  Federally Incorporated Business: I have a crew of cleaners
                  working with me and tools and supplies
                </SelectItem>
                <SelectItem value="Owner of company">
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
            onChange={(e) => {
              if (sameAddress) {
               
                return;
              }
              setNewContractor({
                ...newContractor,
                businessAddress: e.target.value,
              });
            }}
            required
          />
        </div>
        <div>
          <Label htmlFor="businessCity">Business City</Label>
          <Input
            className="mt-2"
            id="businessCity"
            value={
              sameAddress ? newContractor.city : newContractor.businessCity
            }
            onChange={(e) => {
              if (sameAddress) {
                return;
              }
              setNewContractor({
                ...newContractor,
                businessCity: e.target.value,
              });
            }}
            required
          />
        </div>
        <div>
          <Label htmlFor="businessPostcode">Business Postcode</Label>
          <Input
            className="mt-2"
            id="businessPostcode"
            value={newContractor.businessPostcode}
            onChange={(e) => {
              if (sameAddress) {
                return;
              }
              setNewContractor({
                ...newContractor,
                businessPostcode: e.target.value,
              });
            }}
            required
          />
        </div>
        <div className="">
          <h3>Do you have Insurance Coverage</h3>
          <RadioGroup
            id="insurance"
            name="insurance"
            className="mt-2 ml-2"
            onValueChange={(value) =>
              setNewContractor({
                ...newContractor,
                insurance: value,
              })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Yes" id="i1" name="i1" />
              <Label htmlFor="i1">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="No" id="i2" name="i2" />
              <Label htmlFor="i2">No</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="In the process of obtaining one"
                id="i3"
                name="i3"
              />
              <Label htmlFor="i3">In the process of obtaining one</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Expired" id="i4" name="i4" />
              <Label htmlFor="i4">Expired</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
