import prisma, {PrismaNameSpace} from "@/lib/db";
import { newContractorEmail } from "@/lib/mail";
import { ContractorModelData } from "@/utils/types";

export const createSubcontractor = async (data: ContractorModelData) => {
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
    // send email to admin
    await newContractorEmail();
    return { success: "Form submitted" };
  } catch (err) {
    if (err instanceof PrismaNameSpace.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002":
          // handling duplicate key errors
          return { error: `Value already exists: ${err.meta.target}` };
        case "P2014":
          // handling invalid id errors
          return { error: `Invalid ID: ${err.meta.target}` };
        case "P2003":
          // handling invalid data errors
          return { error: `Invalid input: ${err.meta.target}` };
        default:
          // handling all other errors
          return { error: `Something went wrong: ${err.message}` };
        }
      }
      return { error: `Something went wrong. Please try again later` };
  }
};

export const deleteSubContractor = async (id: string) => {
  try {
    await prisma.contractor.delete({ where: { id } });
  } catch (error) {
    return null;
  }
};
