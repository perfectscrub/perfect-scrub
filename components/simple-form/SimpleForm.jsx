"use client";
import { useRouter } from "next/navigation";
import { submitHandler } from "@/utils/form";

const SimpleForm = () => {
  const router = useRouter();

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const form = e.currentTarget
    submitHandler(form, "quote");
    router.push("/success");

  }

  return (
    <form
            className="quote-form py-3 mt-8 sm:w-1/2"
            name="quote"
            data-netlify="true"
            autoComplete="off"
            netlify-honeypot="bot-field"
            onSubmit={handleFormSubmit}
          >
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
            <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-4">
              <div className="flex flex-col lg:w-1/2 gap-y-4 lg:gap-6">
                <input
                  className="quote-form-input"
                  type="text"
                  id="name"
                  name="name"
                  required
                  pattern="\S+.*"
                  placeholder="Name"
                  autoComplete="off"
                />
                <input
                  className="quote-form-input"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col lg:w-1/2 gap-y-4 lg:gap-6">
                <input
                  className="quote-form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="^\d{10}$"
                  minLength="10"
                  maxLength="10"
                  placeholder="Phone"
                  autoComplete="off"
                />
                <input
                  className="quote-form-btn"
                  type="submit"
                  id="submit-button"
                  value="Get Quote"
                  autoComplete="off"
                />
              </div>
            </div>
          </form>
  )
}

export default SimpleForm;