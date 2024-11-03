"use client";
import Image from "next/image";
import Link from "next/link";
import PSLogo from "@/public/perfect-scrub-logo.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-items-center gap-5">
      <Image src={PSLogo} alt="" width={300} height={135} className="self-start mb-5 w-[80px] h-auto" />
      <h2 className="text-2xl text-center">Something went wrong!</h2>
      <div className="flex items-center justify-centergap-4">
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
        <Link href={"/"}>Home</Link>
      </div>
    </main>
  );
}
