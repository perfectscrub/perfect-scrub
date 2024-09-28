import Link from "next/link";
import React from 'react'

const NotFound = () => {
    return (
        <main role="main">
            <section className="h-screen flex flex-col place-content-center p-4">
                <h4 className="max-w-prose text-center text-gray-700 tracking-wider text-3xl lg:text-5xl font-bold">
                    You seem to have taken a wrong turn&#33;
                </h4>
                <p className="px-10 pt-10 text-center self-center font-normal text-xl lg:text-2xl">
                    Sorry about that. Let's get you back on track. &#58; &#41;
                </p>
                <Link
                    className="self-center text-white bg-blue-900 px-6 py-4 mt-5 rounded"
                    href="/"
                >
                    Back to Homepage
                </Link>
            </section>
        </main>
    );
}

export default NotFound;