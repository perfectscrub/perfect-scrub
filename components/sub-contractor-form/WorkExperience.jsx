import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const WorkExperience = ({ newContractor, setNewContractor }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold flex items-center">Experience</h2>
      <p className="mb-7 font-medium text-xs">
        Please indicate the locations you are willing to work
      </p>
      <div className="md:max-w-[400px] col-span-2 flex flex-col gap-6 px-2">
        <div>
          <Label htmlFor="experience">
            Select your type of cleaning experience
          </Label>
          <div className="pt-2">
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
            className=""
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
      </div>
    </section>
  );
};

export default WorkExperience;
