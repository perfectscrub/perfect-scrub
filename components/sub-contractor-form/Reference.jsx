import React from 'react'
import { Input } from "../ui/input"

const Reference = () => {
  return (
    <div>
        <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              className="mt-2"
              id="firstname"
              value={newContractor.firstname}
              onChange={(e) =>
                setNewContractor({
                  ...newContractor,
                  firstname: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="relationship">Last Name</Label>
            <Input
              className="mt-2"
              id="relationship"
              value={newContractor.relationship}
              onChange={(e) =>
                setNewContractor({ ...newContractor, relationship: e.target.value })
              }
              required
            />
          </div>
          <div>
            <Label htmlFor="refPhone">Phone</Label>
            <Input
              className="mt-2"
              id="refPhone"
              value={newContractor.phone}
              onChange={(e) =>
                setNewContractor({ ...newContractor, phone: e.target.value })
              }
              required
            />
          </div>
    </div>
  )
}

export default Reference