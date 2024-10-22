import {
  Contractor,
  DayOfWeek,
  EmergencyContact,
  Experience,
  Facilities,
  IndexFacilities,
  Link,
  Locations,
  Reference,
  SliderImage,
  Steps,
  Testimonials,
} from "./types";

export const services: Link[] = [
  { id: 0, href: "/services/standard-cleaning", title: "Standard Clean" },
  { id: 1, href: "/services/deep-cleaning", title: "Deep Clean" },
  {
    id: 2,
    href: "/services/disinfecting-services",
    title: "Disinfecting Services",
  },
  {
    id: 3,
    href: "/services/janitorial-services",
    title: "Janitorial Services",
  },
  { id: 4, href: "/services/carpet-cleaning", title: "Carpet Clean" },
  {
    id: 5,
    href: "/services/washroom-cleaning-and-consumables",
    title: "Washroom & Consumables",
  },
];

export const facilities: Facilities[] = [
  {
    href: "/commercial-cleaning/office-buildings-cleaning",
    title: "Office Buildings",
    alt: "",
  },
  {
    href: "/commercial-cleaning/retail-stores-cleaning",
    title: "Retail & Shopping centers",
    alt: "",
  },
  {
    href: "/commercial-cleaning/day-care-cleaning",
    title: "DayCare & Preschool",
    alt: "",
  },
  {
    href: "/commercial-cleaning/school-cleaning",
    title: "Schools & Universities",
    alt: "",
  },
  {
    href: "/commercial-cleaning/medical-offices-cleaning",
    title: "Medical Offices & Clinics",
    alt: "",
  },
  {
    href: "/commercial-cleaning/hotel-cleaning",
    title: "Hotels & Resorts",
    alt: "",
  },
  {
    href: "/commercial-cleaning/recreational-facilities-cleaning",
    title: "Sports & Recreational Centers",
    alt: "",
  },
  {
    href: "/commercial-cleaning/post-construction-cleaning",
    title: "Post Construction Clean",
    alt: "",
  },
];

export const footerCompanyLinks: Link[] = [
  { id:0, href: "/", title: "Home" },
  { id:1, href: "/blog", title: "Blog" },
  { id:2, href: "/about", title: "About us" },
  { id:3, href: "/contact", title: "Contact" },
  { id:4, href: "/commercial-cleaning", title: "Commercial" },
  // { id:5, href: "/residential-cleaning", title: "Residential" },
  { id:6, href: "/quote", title: "Get a quote" },
  { id:7, href: "/subcontractor-form", title: "Work with us" },
];


export const indexFacilitiesList: IndexFacilities[] = [
  {
    title: "Office buildings",
    href: "/commercial-cleaning/office-buildings-cleaning",
    imgUrl: "/office-building.svg",
    src: "/facilities/office-interior.jpg",
    alt: "",
  },
  {
    title: "Stores & centers",
    href: "/commercial-cleaning/retail-stores-cleaning",
    imgUrl: "/supermarket.svg",
    src: "/facilities/retail-store.jpg",
    alt: "",
  },
  {
    title: "Day Care and Preschool",
    href: "/commercial-cleaning/day-care-cleaning",
    imgUrl: "/day-care-center.svg",
    src: "/facilities/day-care.jpg",
    alt: "",
  },
  {
    title: "Schools and universities",
    href: "/commercial-cleaning/school-cleaning",
    imgUrl: "/university.svg",
    src: "/facilities/school.jpg",
    alt: "",
  },
  {
    title: "Medical Offices",
    href: "/commercial-cleaning/medical-offices-cleaning",
    imgUrl: "/hospital.svg",
    src: "/facilities/medical-office.jpg",
    alt: "",
  },
  {
    title: "Hotels and resorts",
    href: "/commercial-cleaning/hotel-cleaning",
    imgUrl: "/hotel.svg",
    src: "/facilities/hotel-lobby.jpg",
    alt: "",
  },
  {
    title: "Gyms & Recreation centers",
    href: "/commercial-cleaning/recreational-facilities-cleaning",
    imgUrl: "/gym.svg",
    src: "/facilities/gym-cleaner.jpg",
    alt: "",
  },
  {
    title: "Construction Cleaning",
    href: "/commercial-cleaning/post-construction-cleaning",
    imgUrl: "/construction.svg",
    src: "/facilities/new-construction.jpg",
    alt: "",
  },
];


export const testimonials: Testimonials[] = [
  {
    text: "It was a great pleasure engaging your services at our office and for the impressive services at your most inconvenient time frame. This depicts commitment, reliability and positive business drive.",
    author: "Alex Emmanuel",
    business: "VSF CONSULTING INC",
    id: 1,
  },
  {
    text: "Wow! I've never seen my apartment this clean...best deep cleaning service i've experienced so far. Thanks for exceeding my expectations. I would always recommend Perfect scrub to friends and family 👍",
    author: "Adebimpe Coker",
    business: "N/A",
    id: 2,
  },
  {
    text: `I recently hired the Perfect Scrub team to clean my retail store (Daveenah), and I must say that I am thoroughly impressed with their services. From the moment I contacted them, they were professional, courteous, and efficient.
    
    The team arrived on time and got straight to work. They were thorough in their cleaning, paying attention to every detail, and ensuring that every nook and cranny was spotless. They even went above and beyond by cleaning areas that I hadn't even thought of.
    
    What impressed me the most was their attention to detail. They took the time to clean every surface, including the floors, walls, and windows. They even cleaned the shelves and display cases, making sure that everything was dust-free and sparkling clean.
    
    Overall, I am extremely satisfied with the services provided by this cleaning business. They exceeded my expectations in every way, and I would highly recommend them to anyone looking for a reliable and professional cleaning service. Thank you for making my store look and feel brand new again!`,
    author: "Ola Olufelo",
    business: "N/A",
    id: 3,
  },
  {
    text: `@houzeofglam Brampton our experience with Perfect Scrub Cleaning has been nothing but spectacular. They are super detailed and efficient. We will surely continue to use your service. Thanks for bringing back the shine in my salon.`,
    author: "omotolani Akinwale",
    business: "N/A",
    id: 4,
  },
  {
    text: `What an excellent service at a short notice!
    Committed, articulated, diligent and impressive services.
    Worth patronizing! Recommended. An evolving Janitorial company within the GTA.`,
    author: "Kinetics IRS",
    business: "N/A",
    id: 5,
  },
  {
    text: `It's in the name "Peferct Scrub" . Great job, timely and no mess left behind. Thank you guys, I will definitely be recommending your services.`,
    author: "kanmi Olu",
    business: "N/A",
    id: 6,
  },
  {
    text: `Thank you for helping me by cleaning after my reno.  It was certainly needed and feels so much better to have it clean. I will definitely recommend you and your company to my friends for a job well done.`,
    author: "Kathy Lewis",
    business: "Carpe Diem",
    id: 7,
  },
  {
    text: `Awesome, thank you so much! I definitely will use you again and refer you to others. Thank you so much again.`,
    author: "Kandi Roy",
    business: "Director, Absolute Angels Daycare",
    id: 8,
  },
];

export const sliderImgs: SliderImage = {
  0: {
    id: 1,
    img: "/office-cleaning-indoors.jpg",
    text: "Take care of business and leave the clean up to us.",
    effect: "fadeIn",
  },
  1: {
    id: 2,
    img: "/buffing-floor.jpg",
    text: "Customize pricing to meet your needs.",
    effect: "fadeIn",
  },
  2: {
    id: 3,
    img: "/hero-office-interior.jpg",
    text: "Reliability and quality you can trust.",
    effect: "fadeIn",
  },
};

export const residential_steps: Steps[] = [
  {
    title: "Book Online",
    text: "Fill out our quick and easy booking Form in just a few minutes",
    src: "/booking-a-clean.jpg",
    alt: "a woman using a laptop",
  },
  {
    title: "Confirmation",
    text: "Your booking is confirmed and you are assigned a professional Service Provider.",
    src: "/confirmation.jpg",
    alt: "two happy friends with thumbs up",
  },
  {
    title: "We clean your home",
    text: "We come in and clean your residence at the scheduled time.",
    src: "/we-clean.jpg",
    alt: "a professional house-cleaner",
  },
];

export const commercial_steps: Steps[] = [
  {
    title: "Fill quote form",
    text: "Use our get a quote form to inform us about your cleaning needs",
    src: "/booking-a-clean.jpg",
    alt: "a woman using a laptop",
  },
  {
    title: "We Contact you",
    text: "We will get in touch with you and process your cleaning request",
    src: "/confirmation.jpg",
    alt: "two happy friends with thumbs up",
  },
  {
    title: "We clean your Office",
    text: "A cleaning crew will be at your location on your designated start date",
    src: "/we-clean.jpg",
    alt: "a professional house-cleaner",
  },
];

export const bookingBenefits: string[] = [
  "customer service- we respond quickly",
  "Multiple ways to get in touch with us- by call, text, email",
  "your own dedicated log-in page- if you choose",
  "you can schedule and reschedule your clean",
];

export const daysOfWeek: DayOfWeek[] = [
  { text: "Monday", value: false },
  { text: "Tuesday", value: false },
  { text: "Wednesday", value: false },
  { text: "Thursday", value: false },
  { text: "Friday", value: false },
  { text: "Saturday", value: false },
  { text: "Sunday", value: false },
];

export const locations: Locations[] = [
  { text: "All locations", value: false },
  { text: "Acton", value: false },
  { text: "Ajax", value: false },
  { text: "Ancaster", value: false },
  { text: "Aurora", value: false },
  { text: "Barrie", value: false },
  { text: "Bolton", value: false },
  { text: "Bradford", value: false },
  { text: "Brampton", value: false },
  { text: "Brantford", value: false },
  { text: "Burlington", value: false },
  { text: "Caledon", value: false },
  { text: "Cambridge", value: false },
  { text: "Concord", value: false },
  { text: "Dundas", value: false },
  { text: "Erin", value: false },
  { text: "Etobicoke", value: false },
  { text: "Georgetown", value: false },
  { text: "Georgina", value: false },
  { text: "Grimsby", value: false },
  { text: "Guelph", value: false },
  { text: "Halton Hills", value: false },
  { text: "Hamilton", value: false },
  { text: "Innisfil", value: false },
  { text: "Keswick", value: false },
  { text: "King City", value: false },
  { text: "Kitchener", value: false },
  { text: "Klienburg", value: false },
  { text: "Lindsay", value: false },
  { text: "London", value: false },
  { text: "Maple", value: false },
  { text: "Markham", value: false },
  { text: "Milton", value: false },
  { text: "Mississauga", value: false },
  { text: "Newmarket", value: false },
  { text: "New Tecumseth", value: false },
  { text: "Niagara Falls", value: false },
  { text: "Oakville", value: false },
  { text: "Orangeville", value: false },
  { text: "Orillia", value: false },
  { text: "Oshawa", value: false },
  { text: "Paris Ontario", value: false },
  { text: "Peterborough", value: false },
  { text: "Pickering", value: false },
  { text: "Richmond Hill", value: false },
  { text: "Rockwood", value: false },
  { text: "Scarborough", value: false },
  { text: "St Catherine's", value: false },
  { text: "Stoney Creek", value: false },
  { text: "Stouffville", value: false },
  { text: "Sunderland", value: false },
  { text: "Toronto-Downtown", value: false },
  { text: "Toronto-East", value: false },
  { text: "Toronto-North York", value: false },
  { text: "Toronto-West", value: false },
  { text: "Uxbridge", value: false },
  { text: "Vaughn", value: false },
  { text: "Waterdown", value: false },
  { text: "Waterloo", value: false },
  { text: "Way North", value: false },
  { text: "Way North East", value: false },
  { text: "Whitby", value: false },
  { text: "Woodbridge", value: false },
];



export const defaultContractor: Contractor = {
  slug: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postcode: "",
  province: "",
  businessName: "",
  businessType: "",
  bestDescribes: "",
  businessAddress: "",
  businessCity: "",
  businessPostcode: "",
  employmentStatus: "",
  insurance: "",
  hasVehicle: "No",
  driversLicence: "",
  availabilityDays: "",
  experienceDescription: "",
  hasEquipment: "",
  locations: [],
};

export const defaultReferences: Reference[] = [
  {
    name: "",
    relationship: "",
    phone: "",
  },
  {
    name: "",
    relationship: "",
    phone: "",
  },
];

export const defaultEmergencyContacts: EmergencyContact[] = [
  {
    name: "",
    email: "",
    phone: "",
  },
  {
    name: "",
    email: "",
    phone: "",
  },
  // {
  //   name: "",
  //   email: "",
  //   phone: "",
  // },
];

export const defaultExperience: Experience[] = [
  {
    experience: "Commercial Office Cleaning",
    checked: false
  },
  {
    experience: "Residential Cleaning",
    checked: false
  },
  {
    experience: "Window Cleaning",
    checked: false
  },
  {
    experience: "Post Construction Cleaning",
    checked: false
  },
  {
    experience: "Floor Care (including Floor Strip, Wax and Carpet Cleaning)",
    checked: false
  },
  {
    experience: "No Cleaning Experience",
    checked: false
  },
]