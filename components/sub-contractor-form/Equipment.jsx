import React from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Equipment = ({ newContractor, setNewContractor }) => {
  return (
    <section className="border-t-2 border-[#d7d7d7] pt-5">
      <h2 className="mb-1 font-semibold flex items-center">Equipment</h2>
      <p className="mb-7 font-medium text-xs">
        Please confirm you have all Cleaning tools and Equipment or you are
        willing to buy
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {/* <Label htmlFor="hasEquipment">
          Please confirm you have all Cleaning tools and Equipment or you are
          willing to buy{" "}
        </Label> */}
        <RadioGroup
          name="hasEquipment"
          onValueChange={(value) =>
            setNewContractor({
              ...newContractor,
              hasEquipment: value,
            })
          }
        >
          <div className="flex items-center space-x-2 gap">
            <RadioGroupItem
              value="Yes, I have all cleaning tools and Equipment"
              id="r1"
            />
            <Label htmlFor="r1">
              Yes, I have all cleaning tools and Equipment
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="No, I do not have all tools but I am willing to buy"
              id="r2"
            />
            <Label htmlFor="r2">
              No, I do not have all tools but I am willing to buy
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="No I do not have tool and I am not willing to buy"
              id="r3"
            />
            <Label htmlFor="r3">
              No I do not have tool and I am not willing to buy
            </Label>
          </div>
        </RadioGroup>
      </div>
    </section>
  );
};

export default Equipment;
