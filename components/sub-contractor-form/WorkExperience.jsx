import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const WorkExperience = ({
  newContractor,
  setNewContractor,
  experience,
  setExperience,
}) => {
  const [count, setCount] = useState(0);

  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold flex items-center">Experience</h2>
      <p className="mb-7 font-medium text-xs">
        Please indicate your work experience
      </p>
      <div className="md:max-w-[400px] col-span-2 flex flex-col gap-6 px-2">
        <div>
          <h2 className="mb-4">Select your type of cleaning experience <span className="text-sm italic text-gray-500">(max. 3)</span></h2>
          <div className="flex flex-col gap-4 pt-2">
            {experience.map(({ experience, checked }) => (
              <div key={experience} className="flex gap-3">
                <Checkbox
                  id={experience}
                  checked={checked}
                  onCheckedChange={(c) => {
                    // console.log(`${experience}`, c, count);

                    if (count < 3 || !c) {
                      setExperience((prev) => {
                        return prev.map((exp) => {
                          if (exp.experience === experience) {
                            if (c === true) {
                              setCount(count + 1);
                            } else {
                              setCount(count - 1);
                            }
                            return { ...exp, checked: c };
                          }
                          return exp;
                        });
                      });
                    } else {
                      toast.error("Maximum of 3 allowed");
                      return;
                    }
                  }}
                />
                <Label htmlFor={experience}>{experience}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 mt-5 text-base">
          <Label htmlFor="experienceDescription" className="text-base">
            A brief description of prior experience
          </Label>
          <Textarea
            id="experienceDescription"
            className="border-2"
            value={newContractor.experienceDescription}
            onChange={(e) =>
              setNewContractor({
                ...newContractor,
                experienceDescription: e.target.value,
              })
            }
            placeholder="e.g years of experience and other relevant information"
            rows={8}
            required
          />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
