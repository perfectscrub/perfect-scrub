import Script from 'next/script';

const Login = () => {
  return (
    <div className="pt-20">
      <iframe
        src="https://perfectscrubcleaning.bookingkoala.com/login?embed=true"
        style={{border: "none", height: "981px",overflow: "hidden"}}
        width="100%"

      ></iframe>
      <Script
        id="login-script"
        src="https://perfectscrubcleaning.bookingkoala.com/resources/embed.js"
        strategy="afterInteractive"
      ></Script>
    </div>
  )
}

export default Login