"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import type { ContractorModelData } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function addContractor(data: ContractorModelData) {
  console.log("data as received: ", data);

  const schema = z.object({
    firstname: z.string().min(1, { message: "Enter a first name" }),
    lastname: z.string().min(1, { message: "Enter a last name" }),
    email: z.string().min(1, { message: "Enter a name" }),
    address: z.string().min(1, { message: "Enter address" }),
    city: z.string().min(1, { message: "Enter a city" }),
    postcode: z.string().min(1, { message: "Enter a postcode" }),
    province: z.string().min(1, { message: "Enter business province" }),
    phone: z.string(),
    businessName: z.string().min(1, { message: "Select a business type" }),
    businessType: z.string().min(1, { message: "Enter a business type" }),
    businessAddress: z.string().min(1, { message: "Enter business address" }),
    businessCity: z.string().min(1, { message: "Enter business city" }),
    businessPostcode: z.string().min(1, { message: "Enter business postcode" }),
    hasVehicle: z.string(),
    driversLicence: z.string().optional(),
    // refine((val) => data.hasVehicle==="Yes" && val==="", { message: "Enter your drivers licence" }),
    insurance: z.string().min(1, { message: "Insurance coverage" }),
    employmentStatus: z
      .string()
      .min(1, { message: "Select a category that describes you" }),
    availabilityDays: z
      .string()
      .min(1, { message: "Please choose days you are available" }),
    locations: z
      .string()
      .array()
      .min(1, { message: "Please select suitable locations" }),
    experience: z.string().min(1, { message: "Select prior experience" }),
    experienceDescription: z
      .string()
      .min(2, { message: "Enter details of past experience" }),
    hasEquipment: z
      .string()
      .min(1, { message: "Indicate if you have work equipment" }),
    references: z.array(
      z.object({
        name: z.string(),
        relationship: z.string(),
        phone: z.string(),
      })
    ),
    emergencyContacts: z.array(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
      })
    ),
  });

  const validatedFields = schema.safeParse(data);
  if (!validatedFields.success) {
    console.log("validatedFields.error", validatedFields.error);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  data.slug = data.businessName.replace(/\s+/g, "-").toLowerCase();

  const contractor = await prisma.contractor.create({
    data: {
      slug: data.slug,
      firstname: validatedFields.data.firstname,
      lastname: validatedFields.data.lastname,
      email: validatedFields.data.email,
      address: validatedFields.data.address,
      city: validatedFields.data.city,
      postcode: validatedFields.data.postcode,
      province: validatedFields.data.province,
      phone: validatedFields.data.phone,
      businessName: validatedFields.data.businessName,
      businessType: validatedFields.data.businessType,
      businessAddress: validatedFields.data.businessAddress,
      businessCity: validatedFields.data.businessCity,
      businessPostcode: validatedFields.data.businessPostcode,
      driversLicence: validatedFields.data.driversLicence,
      hasVehicle: validatedFields.data.hasVehicle,
      insurance: validatedFields.data.insurance,
      employmentStatus: validatedFields.data.employmentStatus,
      availabilityDays: validatedFields.data.availabilityDays,
      locations: validatedFields.data.locations,
      experience: validatedFields.data.experience,
      experienceDescription: validatedFields.data.experienceDescription,
      hasEquipment: validatedFields.data.hasEquipment,
      references: {
        create: validatedFields.data.references,
      },
      emergencyContacts: {
        create: validatedFields.data.emergencyContacts,
      },
    },
  });
}

export async function deleteContractor(id: string) {
  await prisma.contractor.delete({ where: { id } });
}

// export async function editContractor(id: string){}
