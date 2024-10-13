import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const schema = z.object({
  firstname: z.string().min(1, { message: "Enter a first name" }),
  lastname: z.string().min(1, { message: "Enter a last name" }),
  email: z.string().min(1, { message: "Enter a name" }),
  address: z.string().min(1, { message: "Enter address" }),
  city: z.string().min(1, { message: "Enter a city" }),
  postcode: z.string().regex(new RegExp(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i), { message: "Enter a valid postal code" }),
  province: z.string().min(1, { message: "Enter business province" }),
  phone: z.string(),
  businessName: z.string().min(1, { message: "Select a business type" }),
  businessType: z.string().min(1, { message: "Enter a business type" }),
  businessAddress: z.string().min(1, { message: "Enter business address" }),
  businessCity: z.string().min(1, { message: "Enter business city" }),
  businessPostcode: z.string().regex(new RegExp(/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i), { message: "Enter a valid postal code" }),
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
      name: z.string().min(1, { message: "Enter a name" }),
      relationship: z.string().min(1, { message: "Relationship with reference" }),
      phone: z.string(),
    })
  ),
  emergencyContacts: z.array(
    z.object({
      name: z.string().min(1, { message: "Enter a name" }),
      email: z.string().email(1, { message: "Enter a valid email" }),
      phone: z.string(),
    })
  ),
});