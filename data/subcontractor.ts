import prisma from "@/lib/db";
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
  } catch (error) {
    return null;
  }
};
