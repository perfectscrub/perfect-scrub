import Image from "next/image";
import Link from 'next/link';
import { services } from "@/data";

const Footer = () => {
  return (
    <footer role="contentinfo" className="py-16 bg-gray-900">
    <div className="flex flex-col lg:flex-row items-center justify-around mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-center mb-6">
        {/* Logo Image */}
        <Link className="mb-10 ml-0 lg:ml-4" href="./" title="homepage">
          <Image width={160} height={64} className="lg:ml-12" src="/perfect-scrub-logo.png" alt="" />
        </Link>
        <div className="flex text-green-400">

          {/* Facebook Logo */}
          <Link className="hover:text-green-500" href="https://web.facebook.com/profile.php?id=100092968671969">
            <svg className="mx-4 fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              
              <path
                d="M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92V12.92H5.9V10.02H8.44V7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11V6.58H13.19C11.95 6.58 11.56 7.35 11.56 8.14V10.02H14.34L13.89 12.92H11.56V19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z" />
            </svg>
          </Link>
          {/* Instagram Logo */}
          <Link className="hover:text-green-500" href="https://www.instagram.com/perfectscrubcleaning/">
            <svg className="mx-4 fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              
              <path
                d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex w-full md:w-2/3 justify-around my-8">
        <div>
          <h3 className="text-gray-400 tracking-wider">SERVICES</h3>
          <ul className="flex flex-col items-start text-sm font-medium text-gray-400 py-2 lg:py-0">
            {services.map((service,i)=>(
            <li key={i} className="mx-1 pb-4 hover:text-gray-300 mb-2 lg:mb-0">
                <Link href={service.href}>{service.title}</Link>
            </li>))}
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 tracking-wider">COMPANY</h3>
          <ul className="flex flex-col items-start text-sm font-medium text-gray-400 py-2 lg:py-0">
            <li className="mx-1 pb-6 pt-4 hover:text-gray-300 lg:mb-0">
              <Link href="/">Home</Link>
            </li>

            <li className="mx-1 pb-6 hover:text-gray-300 lg:mb-0">
              <Link href="blog">Blog</Link>
            </li>

            <li className="mx-1 pb-6 hover:text-gray-300 lg:mb-0">
              <Link href="about">About</Link>
            </li>

            <li className="mx-1 pb-6 hover:text-gray-300 lg:mb-0">
              <Link href="contact">Contact</Link>
            </li>
            <li className="mx-1 pb-6 hover:text-gray-300 lg:mb-0">
              <Link href="quote">Get a quote</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>

    {/* Fine Print */}
    <div className="flex flex-col items-center mt-12 lg:mt-24 text-xs text-gray-400">
      <div className="mb-4">
        <Link className="mx-4 hover:text-gray-300" href="privacy-policy" >Privacy Policy</Link>
        <Link className="mx-4 hover:text-gray-300" href="terms-and-conditions" >Terms &amp; Conditions</Link>
      </div>
      <span>&copy; Perfect Scrub Cleaning Services</span>
    </div>
  </footer>
  )
}

export default Footer;

