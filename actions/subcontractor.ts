"use server";

import { revalidatePath } from "next/cache";
import type { ContractorModelData } from "@/utils/types";
import { SubContractorSchema } from "@/schemas";
import { createSubcontractor, deleteSubContractor } from "@/data/subcontractor";

export async function addContractor(data: ContractorModelData) {
  //validate on server
  const validatedFields = SubContractorSchema.safeParse(data);
  if (!validatedFields.success) {
    console.log("validatedFields", validatedFields);
    return { error: "Invalid fields" };
  }

  try {
    const result = await createSubcontractor(data);
    console.log("createSubcontractor result: ", result);
    if (result?.error) {
      throw new Error(result.error);
    }
    revalidatePath("/admin");
    return result;
  } catch (err) {
    throw new Error(err);
  }
}

// delete references and emergency contact relations
export async function deleteContractor(id: string) {
  try {
    await deleteSubContractor(id);
    revalidatePath("/admin");
    return { success: "Contractor deleted" };
  } catch (error) {
    console.error("Error while deleting subcontractor");
  }
}

// export async function updateContractor(id: string){}
