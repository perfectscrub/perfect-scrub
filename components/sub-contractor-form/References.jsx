import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const References = ({ referenceInfo, setReferenceInfo }) => {
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
              <Input
                className="mt-2"
                id="ref1Phone"
                value={referenceInfo[0].phone}
                onChange={(e) =>{
                  const val = e.target.value.trim();
                  if(isNaN(val)) return
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 0 ? { ...r, phone: val } : r
                    )
                  )}
                }
                required
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
              <Input
                className="mt-2"
                id="ref2Phone"
                value={referenceInfo[1].phone}
                onChange={(e) =>{
                  const val = e.target.value;
                  if(isNaN(val)) return
                  setReferenceInfo((prev) =>
                    prev.map((r, i) =>
                      i === 1 ? { ...r, phone: e.target.value } : r
                    )
                  )}
                }
                required
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
