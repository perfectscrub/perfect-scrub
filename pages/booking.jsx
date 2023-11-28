import Script from "next/script";
import React from "react";

const Booking = () => {
  return (
    <div className="pt-20">
      <iframe
        src="https://perfectscrubcleaning.bookingkoala.com/booknow?embed=true"
        style={{ border: "none", height: "1000px", overflow: "hidden" }}
        width="100%"
      ></iframe>
      <Script
        id="booking-script"
        src="https://perfectscrubcleaning.bookingkoala.com/resources/embed.js"
        strategy="afterInteractive"
      ></Script>
    </div>
  );
};

export default Booking;
