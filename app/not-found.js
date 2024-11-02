"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PSLogo from "@/public/perfect-scrub-logo.png";
import NotFoundImage from "@/public/404-image.png";

const NotFound = () => {
    const pathname = usePathname();
    return (
        <main role="main" className="flex justify-center py-10">
            <section className="max-w-[1000px] min-h-screen flex flex-col items-center justify-center p-4">
                <Image src={PSLogo} alt="" width={300} height={135} className="self-start mb-5 w-[80px] h-auto" />
                <h4 className="text-center text-gray-600 tracking-wider text-xl lg:text-3xl font-bold my-5">
                    Oops! No one here but us cleaners&#33;
                </h4>
                <Image src={NotFoundImage} alt="" width={1378} height={723} className="max-w-[500px] w-full h-auto" />
                <p className="px-10 pt-5 text-center self-center font-normal lg:text-xl">
                    You might want to go back to the homepage
                </p>
                <Link
                    className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
                    href={pathname.includes("admin") ? "/admin-dashboard" : pathname.includes("dashboard") ? "/dashboard" : "/"}
                >
                    Back to {pathname.includes("dashboard") ? "Dashboard" : "Homepage"}
                </Link>
            </section>
        </main>
    );
}

export default NotFound;