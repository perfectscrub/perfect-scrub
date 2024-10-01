"use server"

import prisma from "@/lib/db"
import { z } from "zod";

export async function addContractor(data) {
    const schema = z.object({
        firstname: z.string().min(1, { message: "Enter a name" }),
        lastname: z.string().min(1, { message: "Enter a last name" }),
        businessName: z.string().min(1, { message: "Enter a name" }),
        businessCategory: z.string().min(1, { message: "Enter a name" }),
        email: z.string().min(1, { message: "Enter a name" }),
        phone: z.string().min(1, { message: "Enter a name" }),
        address: z.string().min(1, { message: "Enter a name" }),
        city: z.string().min(1, { message: "Enter a name" }),
        postcode: z.string().min(1, { message: "Enter a name" }),
        businessAddress: z.string().min(1, { message: "Enter a name" }),
        businessCity: z.string().min(1, { message: "Enter a name" }),
        province: z.string().min(1, { message: "Enter a name" }),
        businessPostcode: z.string().min(1, { message: "Enter a name" }),
        hasVehicle: z.boolean(),
        driversLicence: z.string().min(1, { message: "Enter a name" }),
        insurance: z.string().min(1, { message: "Enter a name" }),
        employmentStatus: z.string().min(1, { message: "Enter a name" }),
        availabilityDays: z.string().min(1, { message: "Enter a name" }),
        locations: z.string().min(1, { message: "Enter a name" }),
        experience: z.string().refine((val) => !val.includes("Choose"), { message: "Select an option" }),
        experienceDescription: z.string().min(10, { message: "Enter details of past experience" }),
        hasEquipment: z.boolean(),
    })

    data.slug = data.businessName.replace(/\s+/g, "-").toLowerCase();

    await prisma.contractor.create({
        data
    })
}