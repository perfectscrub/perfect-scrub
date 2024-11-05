import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data for contractors
const initialContractors = [
  {
    id: "cuid1",
    slug: "Alices-Cleaning-Services",
    fullname: "Alice Johnson",
    businessName: "Alice's Cleaning Services",
    businessCategory: "Residential",
    email: "alice@example.com",
    phone: "111-222-3333",
    address: "123 Main St",
    city: "Springfield",
    postcode: "12345",
    businessAddress: "456 Business Ave",
    businessCity: "Springfield",
    province: "IL",
    businessPostcode: "12345",
    hasVehicle: true,
    driversLicence: "DL123456",
    insurance: "INS789012",
    employmentStatus: "Self-employed",
    availabilityDays: "Mon-Fri",
    locations: "Springfield, Shelbyville",
    experience: "5 years",
    experienceDescription: "Experienced in residential and commercial cleaning",
    hasEquipment: true,
  },
  {
    id: "cuid2",
    slug: "Bobs-Janitorial",
    fullname: "Bob Williams",
    businessName: "Bob's Janitorial",
    businessCategory: "Commercial",
    email: "bob@example.com",
    phone: "444-555-6666",
    address: "789 Oak Rd",
    city: "Shelbyville",
    postcode: "67890",
    businessAddress: "101 Commerce St",
    businessCity: "Shelbyville",
    province: "IL",
    businessPostcode: "67890",
    hasVehicle: false,
    driversLicence: null,
    insurance: "INS345678",
    employmentStatus: "Contract",
    availabilityDays: "Mon-Sat",
    locations: "Shelbyville",
    experience: "3 years",
    experienceDescription: "Specialized in office and retail space cleaning",
    hasEquipment: true,
  },
];

const ContractorTab = ({ data, contractorCount }) => {
  return (
    <Card className="max-w-[800px] overflow-x-auto lg:overflow-visible">
      <CardHeader className="mb-3">
        <CardTitle className="text-2xl">
          Contractors ({contractorCount})
        </CardTitle>
        <CardDescription >
          View and manage contractor information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>View</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Business Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Has Vehicle</TableHead>
              <TableHead>Has Equipment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((contractor) => (
              <TableRow key={contractor.id}>
                <TableCell>
                  <Link
                    href={`/admin/sub-contractor/${contractor.slug}`}
                    className="text-blue-500 underline underline-offset-2 hover:no-underline"
                  >
                    View
                  </Link>
                </TableCell>
                <TableCell>{contractor.fullname}</TableCell>
                <TableCell>{contractor.businessName}</TableCell>
                <TableCell>{contractor.businessCategory}</TableCell>
                <TableCell>{contractor.email}</TableCell>
                <TableCell>{contractor.phone}</TableCell>
                <TableCell>{contractor.city}</TableCell>
                <TableCell>
                  <Checkbox checked={contractor.hasVehicle} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox checked={contractor.hasEquipment} disabled />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContractorTab;
