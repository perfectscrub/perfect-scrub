import { UserRole } from "@prisma/client";
import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password is required" }),
 });

 export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
 });

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string())
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "Minimum 8 characters required" }),
});

export const SubContractorSchema = z.object({
  slug: z.string(),
  firstname: z.string().min(1, { message: "Enter a first name" }),
  lastname: z.string().min(1, { message: "Enter a last name" }),
  email: z.string().email({ message: "Enter a email" }),
  address: z.string().min(1, { message: "Enter your address" }),
  city: z.string().min(1, { message: "Enter a city" }),
  postcode: z
    .string()
    .regex(
      new RegExp(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      ),
      { message: "Enter a valid postal code" }
    ),
  province: z.string().min(1, { message: "Enter province" }),
  phone: z.string(),
  businessName: z.string().min(1, { message: "Name of your business" }),
  businessType: z.string().min(1, { message: "Select a business type" }),
  businessAddress: z.string().min(1, { message: "Enter business address" }),
  businessCity: z.string().min(1, { message: "Business city" }),
  businessPostcode: z
    .string()
    .regex(
      new RegExp(
        /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
      ),
      { message: "Enter a valid business postal code" }
    ),
  hasVehicle: z.string({ message: "Do you have access to a vehicle" }),
  driversLicence: z.string().optional(),
  // refine((val) => data.hasVehicle==="Yes" && val==="", { message: "Enter your drivers licence" }),
  insurance: z.string().min(1, { message: "Insurance coverage" }),
  employmentStatus: z
    .string()
    .min(1, { message: "Select a category that describes you" }),
  availabilityDays: z
    .string()
    .min(1, { message: "Please choose the days you are available to work" }),
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
    .min(1, { message: "Indicate if you have a work equipment" }),
  references: z.array(
    z.object({
      name: z.string().min(1, { message: "Enter a name for your reference" }),
      relationship: z
        .string()
        .min(1, { message: "Relationship with reference" }),
      phone: z.string({ message: "Phone number of reference" }),
    })
  ),
  emergencyContacts: z.array(
    z.object({
      name: z
        .string()
        .min(1, { message: "Enter the name of your emergency contact" }),
      email: z.string().email({ message: "Enter a valid contact email" }),
      phone: z.string({ message: "Phone number of emergency contact" }),
    })
  ),
});


export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(8)),
  newPassword: z.optional(z.string().min(8)),
})
.refine((data)=>{
  if(data.password && !data.newPassword) {
    return false;
  }
  return true;
}, {
  message: "New password is required!",
  path:["newPassword"]
})
.refine((data)=>{
  if(data.newPassword && !data.password) {
    return false;
  }
  return true;
}, {
  message: "Password is required!",
  path:["password"]
})