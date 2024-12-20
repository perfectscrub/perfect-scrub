import prisma from "@/lib/db";
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
  } catch (error) {
    return null;
  }
};

export const deleteSubContractor = async (id: string) => {
  try {
    await prisma.contractor.delete({ where: { id } });
  } catch (error) {
    return null;
  }
};
