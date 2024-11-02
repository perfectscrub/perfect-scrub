import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Availability = ({ availabilityData, setAvailabilityData }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold">Availability</h2>
      <p className="mb-7 font-medium text-xs">
        What days of the Week are you available to work (Select all that
        applies)
      </p>
      <div className="col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-3">
          {availabilityData.map((day, index) => (
            <div key={day.text} className="flex gap-3">
              <Checkbox
                key={day.text}
                id={day.text}
                name={day.text}
                checked={day.value}
                onCheckedChange={(checked) => {
                  setAvailabilityData((prev) => {
                    return prev.map((el, idx) => {
                      if (index === idx) return { ...el, value: checked };
                      return el;
                    });
                  });
                }}
              />
              <Label htmlFor={day.text}>{day.text}</Label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Availability;
