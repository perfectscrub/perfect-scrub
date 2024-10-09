export type Link = { id: number; href: string; title: string };
export type Facilities = {
  href: string;
  title: string;
  alt: string;
};
export type IndexFacilities = {
  title: string;
  href: string;
  imgUrl: string;
  src: string;
  alt: string;
};
export type Testimonials = {
  text: string;
  author: string;
  business: string;
  id: number;
};

export type SliderImage = {
  [keyof: number]: {
    id: number;
    img: string;
    text: string;
    effect: string;
  };
};

export type Steps = {
  title: string;
  text: string;
  src: string;
  alt: string;
};

export type Reference = {
  name: string;
  relationship: string;
  phone: string;
};

export type EmergencyContact = {
  name: "";
  email: "";
  phone: "";
};

export type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type DayOfWeek = {
  text: Day;
  value: boolean;
};

export type Locations = {
  text: string;
  value: boolean;
};

export type Contractor = {
  firstname: string;
  lastname: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  businessAddress: string;
  businessCity: string;
  bestDescribes: string;
  province: string;
  businessPostcode: string;
  hasVehicle: string;
  driversLicence: string;
  insurance: string;
  employmentStatus: string;
  availabilityDays: string;
  locations: string;
  experience: string;
  experienceDescription: string;
  hasEquipment: string;
};

export type ContractorModelData = {
  firstname: string;
  lastname: string;
  slug: string,
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postcode: string;
  businessAddress: string;
  businessCity: string;
  bestDescribes: string;
  province: string;
  businessPostcode: string;
  hasVehicle: string;
  driversLicence: string;
  insurance: string;
  employmentStatus: string;
  availabilityDays: string;
  locations: string;
  experience: string;
  experienceDescription: string;
  hasEquipment: string;
  references: Reference[];
  emergencyContacts: EmergencyContact[];
};
