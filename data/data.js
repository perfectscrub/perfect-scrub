// On the job performance and feedback
// Employee stats
// Monthly and weekly statistics of:
// number_of_cleans_completed
// number_of_complaints_ on each job
// total_five_star_ratings
// total_incidents_reported: staff incident, client incident

// Ability to make notes to provide details of the incidents.
// Clock_in and clock out data per job
// Ability to view calendar to know when an employee is scheduled for work during the week. 


// The requirements below are not employee specific. 

// 1.New Job details: This is the process of booking a new job. This can be created by a Perfect Scub staff if a client calls in to book.
// Client should also be able to create a user name and password and have access to create a new job for review and acceptance by Perfect Scrub team
// A page to book a new job should include  the following details
// Name of client
// Address of client with zipcode
// Client email
// Client phone number
// Type of job:
// What does client do: such as school, daycare, show room etc, 
// Job details: deep clean or standard clean or specialty clean
// Number of offices: size parameters 
// Number of Washrooms: Male, female, universal
// Kitchenette: yes or no
// Other spaces: note space to make detailed notes.
// Based on job details, client gets a price and can either make full payment or a down payment. 
// Any specific client request or complaint
// Credit card payment : client can enter card details to make payment.
// Client contract : client can click on PDF of contract and check a box to say agreed before leaving the page and completing the process.

// create a job when you create a profile 
const new_job={
   name:"",
   address:"",
   client_email:"",
   client_phone_number:"",
   job_type:"",
   job_details:"",
   number_of_offices:"",
   number_of_washrooms:"",
   kitchette: true,
   other_spaces:"",
   specific_requests:"",
   specific_complaints:"",
}
// Perfect Scrub receives notification of new job details. 
// Client receives email confirmation of job and payment

// A supervisor should be able to see the following information about the job above except card details.

// 2.Job pricing: the system should be able to calculate  a price based on customer information provided..
// Job Scheduling: Job is scheduled and assigned to 2 people, one of which should be a supervisor. 
// Job is assigned and appears on the calender of the people assigned. 
// Employees get a notification or new job alert with details of job: when and type of job.
// Employee accepts the job( employee cannot be on leave. Such employee should not be able to receive job Notification. 
// Any employee currently clocked in should not receive notification or be able to accept a new job
// Jobs MAY be assigned based on employee location: where employee lives and location of job. ( need to think some more on this)

// 3. Supplies/inventory database
// Ability to add and take away from inventory
// Ability to make notes on damaged items, misplaced items
// Ability to check out items for each job
// Ability to check back in all items taken ( except consumables) before a job can be completed

// 4.Laundry data: to be updated weekly
// Items ready to be used
// Kitchen cloths
// Washroom cloths
// General cleaning cloths
// Mop heads
// 4b.Items in laundry
// Items returned and date

// I know this is not everything. I will fill the gaps as we go. For example, I will provide information on the backend processing for sales and marketing that we should be able to track.