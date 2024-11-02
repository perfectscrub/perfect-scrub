"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/db";
import type { ContractorModelData } from "@/utils/types";
import { SubContractorSchema } from "@/schemas";
import { z } from "zod";
import { createSubcontractor } from "@/data/subcontractor";

export async function addContractor(data: ContractorModelData) {
  const validatedFields = SubContractorSchema.safeParse(data);
  if(!validatedFields.success) return {error: "Invalid fields"}

  try {
    await createSubcontractor(data);
    revalidatePath("/admin");
    return {success:"Form submitted successfully"}

  } catch (error) {
    // console.log("error", error);
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
