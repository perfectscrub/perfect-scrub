"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PSLogo from "@/public/perfect-scrub-logo.png";

const NotFound = () => {
    const pathname = usePathname();
    return (
        <main role="main">
            <section className="h-screen flex flex-col items-center justify-center p-4">
                <Image src={PSLogo} alt="" width={300} height={135} className="mb-5 w-[150px] h-auto"/>
                <h4 className="max-w-prose text-center text-gray-700 tracking-wider text-3xl lg:text-5xl font-bold">
                    You seem to have taken a wrong turn&#33;
                </h4>
                <p className="px-10 pt-10 text-center self-center font-normal text-xl lg:text-2xl">
                    Sorry about that. Let's get you back on track. &#58; &#41;
                </p>
                <Link
                    className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
                    href={pathname.includes("admin")? "/admin":"/"}
                >
                    Back to {pathname.includes("admin")? "Dashboard":"Homepage"}
                </Link>
            </section>
        </main>
    );
}

export default NotFound;