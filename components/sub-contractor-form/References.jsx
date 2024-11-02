import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CanadaPhoneInput from "./PhoneInput";

const References = ({
  referenceInfo,
  setReferenceInfo,
  refPhone1,
  setRefPhone1,
  refPhone2,
  setRefPhone2,
}) => {
  return (
    <section className="border-t-2 pt-5">
      <h2 className="mb-3 font-semibold">References</h2>
      <p className="mb-8 text-xs font-medium">
        We need to contact reliable references who are willing to share their
        knowledge about you. We will contact them by phone and ask questions
        about you and your cleaning experience. Please note that we cannot
        accept immediate family members, common law partners, partners or other
        people who would have a conflict of interest by providing us information
        about you.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-around">
        {/* 1st Ref */}
        <div className="max-w-[360px] w-full py-6 px-3">
          <h3>First reference</h3>
          <div className="max-w-[300px] flex flex-col gap-4 px-2 py-5">
            <div>
              <Label htmlFor="ref1name">Name</Label>
              <Input
                className="mt-2"
                id="ref1name"
                value={referenceInfo[0].name}
                onChange={(e) =>
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 0 ? { ...r, name: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="ref1relationship">Relationship</Label>
              <Input
                className="mt-2"
                id="ref1relationship"
                value={referenceInfo[0].relationship}
                onChange={(e) =>
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 0 ? { ...r, relationship: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="ref1Phone">Phone</Label>
              <CanadaPhoneInput
                id="ref1Phone"
                value={refPhone1}
                setValue={(val) => setRefPhone1(val)}
                required
                className={
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                }
              />
            </div>
          </div>
        </div>
        {/* 2nd Ref */}
        <div className="max-w-[360px] w-full  py-6 px-3">
          <h3>Second reference</h3>
          <div className="max-w-[300px] flex flex-col gap-4 px-2 py-5">
            <div>
              <Label htmlFor="ref2name">Name</Label>
              <Input
                className="mt-2"
                id="ref2name"
                value={referenceInfo[1].name}
                onChange={(e) =>
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 1 ? { ...r, name: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="ref2relationship">Relationship</Label>
              <Input
                className="mt-2"
                id="ref2relationship"
                value={referenceInfo[1].relationship}
                onChange={(e) =>
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 1 ? { ...r, relationship: e.target.value } : r
                    )
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="ref2Phone">Phone</Label>
              <CanadaPhoneInput
                id="ref2Phone"
                value={refPhone2}
                setValue={(val) => setRefPhone2(val)}
                required
                className={
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mt-2"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
