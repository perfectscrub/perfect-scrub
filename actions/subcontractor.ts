"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import type { ContractorModelData } from "@/utils/types";
import { SubContractorSchema } from "@/schemas";
import { z } from "zod";

export async function addContractor(data: ContractorModelData) {
  const validatedFields = SubContractorSchema.safeParse(data)
  if(!validatedFields.success) return {error: "Invalid fields"}
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
    return {success:"Form submitted successfully"}
  } catch (error) {
    console.log("error", error);
    if(error.code==="P2002"){
      // TODO: implement specific error return  
    }
    const message = error.meta.target.reduce((acc:string,curr:string)=>(`${acc} ${curr}`),"")
    throw new Error("Error during submit: " + message);
  }
}

// delete references and emergency contact relations
export async function deleteContractor(id: string) {
  await prisma.contractor.delete({ where: { id } });
}

// export async function editContractor(id: string){}
