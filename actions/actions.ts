"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import type { ContractorModelData } from "@/utils/types";

export async function addContractor(data: ContractorModelData) {
  try {
    await prisma.contractor.create({
      data: {
        slug: data.slug,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        address: data.address,
        city: data.city,
        postcode: data.postcode,
        province: data.province,
        phone: data.phone,
        businessName: data.businessName,
        businessType: data.businessType,
        businessAddress: data.businessAddress,
        businessCity: data.businessCity,
        businessPostcode: data.businessPostcode,
        driversLicence: data.driversLicence,
        hasVehicle: data.hasVehicle,
        insurance: data.insurance,
        employmentStatus: data.employmentStatus,
        availabilityDays: data.availabilityDays,
        locations: data.locations,
        experience: data.experience,
        experienceDescription: data.experienceDescription,
        hasEquipment: data.hasEquipment,
        references: {
          create: data.references,
        },
        emergencyContacts: {
          create: data.emergencyContacts,
        },
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    console.log("error", error);
    const message = error.meta.target.reduce((acc:string,curr:string)=>(`${acc} ${curr}`),"")
    throw new Error("Error during submit: " + message);
  }
}

export async function deleteContractor(id: string) {
  await prisma.contractor.delete({ where: { id } });
}

// export async function editContractor(id: string){}
