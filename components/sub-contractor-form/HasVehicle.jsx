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
import { cn } from "@/lib/utils";

const HasVehicle = ({ newContractor, setNewContractor }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold flex items-center">
        Do you own your own Vehicle
      </h2>
      {/* <p className="mb-7 font-medium text-xs">
        Please confirm you have all Cleaning tools and Equipment or you are
        willing to buy
      </p> */}
      <div className="md:max-w-[400px] flex flex-col gap-4 px-2">
        <div className="pt-2">
          <Select
            name="hasVehicle"
            value={newContractor.hasVehicle}
            onValueChange={(value) =>
              setNewContractor({
                ...newContractor,
                hasVehicle: value,
              })
            }
            className="flex flex-col gap-4"
          >
            <SelectTrigger id="hasVehicle">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={"No"}>No</SelectItem>
              <SelectItem value={"Yes"}>Yes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div
          className={cn("hidden ", {
            block: newContractor.hasVehicle === "Yes",
          })}
        >
          <Label htmlFor="driversLicence">Driver's Licence</Label>
          <Input
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
    </section>
  );
};

export default HasVehicle;
