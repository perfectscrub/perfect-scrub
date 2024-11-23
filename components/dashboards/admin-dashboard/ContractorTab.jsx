import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { mkConfig, generateCsv, download } from "export-to-csv";

const ContractorTab = ({ contractorData, contractorCount }) => {
  const exportData = contractorData.map((contractor)=>{
    return {
      ...contractor,
      locations: contractor.locations.join(", "),
      createdAt: format(new Date(contractor.createdAt), "PP"),
      updatedAt: format(new Date(contractor.updatedAt), "PP"),
    }
  })
  const csvConfig = mkConfig({ useKeysAsHeaders: true });
  const csv = generateCsv(csvConfig)(exportData)
  return (
    <Card className="">
      <CardHeader className="mb-3 flex md:flex-row justify-between items-center gap-6">
        <div className="">
          <CardTitle className="text-2xl">
            Contractors ({contractorCount})
          </CardTitle>
          <CardDescription>
            View and manage contractor information.
          </CardDescription>
        </div>
        <Button 
          onClick={() => download(csvConfig)(csv)}
          className="self-end"
        >Export</Button>
      </CardHeader>
      <CardContent className="">
        <Table className="whitespace-nowrap overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Business Name</TableHead>
              <TableHead>Full Name</TableHead>
              {/* <TableHead>Category</TableHead> */}
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>City</TableHead>
              {/* <TableHead>Has Vehicle</TableHead>
              <TableHead>Has Equipment</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {contractorData.map((contractor) => (
              <TableRow key={contractor.id}>
                <TableCell>
                  {format(new Date(contractor.createdAt), "PP")}
                </TableCell>
                <TableCell className="max-w-[200px] truncate">
                  <Link
                    href={`/admin-dashboard/contractors/${contractor.slug}`}
                    title={contractor.businessName}
                    className="hover:text-blue-500 no-underline underline-offset-2 hover:underline"
                  >
                    {contractor.businessName}
                  </Link>
                </TableCell>
                <TableCell className="capitalize">
                  {`${contractor.firstname} ${contractor.lastname}`}
                </TableCell>
                {/* <TableCell>{contractor.businessCategory}</TableCell> */}
                <TableCell>{contractor.email}</TableCell>
                <TableCell>{contractor.phone}</TableCell>
                <TableCell className="capitalize">{contractor.city}</TableCell>
                {/* <TableCell>
                  <Checkbox checked={contractor.hasVehicle} disabled />
                </TableCell>
                <TableCell>
                  <Checkbox checked={contractor.hasEquipment} disabled />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ContractorTab;
