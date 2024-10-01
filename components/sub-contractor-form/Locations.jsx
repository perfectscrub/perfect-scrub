import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const Locations = ({ locationsData, setLocationsData }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold flex items-center">Locations</h2>
      <p className="mb-7 font-medium text-xs">
        Please indicate the locations you are willing to work
      </p>
      <div className="col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-3">
          {locationsData.map((location, index) => (
            <div className="flex gap-3">
              <Checkbox
                key={location.text}
                id={location.text}
                checked={location.value}
                onCheckedChange={(checked) => {
                  if (index === 0 && checked) {
                    setLocationsData((prev) =>
                      prev.map((el) => ({ ...el, value: true }))
                    );
                    return;
                  } else if (index === 0 && !checked) {
                    setLocationsData((prev) =>
                      prev.map((el) => ({ ...el, value: false }))
                    );
                    return;
                  }
                  setLocationsData((prev) => {
                    return prev.map((el, idx) => {
                      if (index === idx) return { ...el, value: checked };
                      return el;
                    });
                  });
                }}
              />
              <Label htmlFor={location.text}>{location.text}</Label>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Locations;
