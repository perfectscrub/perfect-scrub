import React, { useState } from "react";
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

// Mock data for job requests
const jobRequests = [
  {
    id: 1,
    client: "ABC Corp",
    service: "Office Cleaning",
    date: "2023-05-15",
    status: "Pending",
  },
  {
    id: 2,
    client: "XYZ Inc",
    service: "Home Cleaning",
    date: "2023-05-16",
    status: "Approved",
  },
];

const JobRequestTab = ({}) => {
  return (
    <Card className="max-w-[800px] overflow-x-auto lg:overflow-visible">
      <CardHeader className="mb-3">
        <CardTitle className="text-2xl">Job Requests</CardTitle>
        <CardDescription>
          View and manage cleaning service requests from clients.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Client</TableHead>
              <TableHead className="w-[150px]">Service</TableHead>
              <TableHead className="w-[150px]">Date</TableHead>
              <TableHead className="w-[150px]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.client}</TableCell>
                <TableCell>{request.service}</TableCell>
                <TableCell>{request.date}</TableCell>
                <TableCell>{request.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default JobRequestTab;
