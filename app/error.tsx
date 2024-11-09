"use client";
import Image from "next/image";
import Link from "next/link";
import PSLogo from "@/public/perfect-scrub-logo.png";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="max-w-[800px] mx-auto min-h-screen flex flex-col items-center justify-center gap-5">
      <div className="space-y-10 max-h-[600px]">
        <Image
          src={PSLogo}
          alt=""
          width={300}
          height={135}
          className="self-start mb-5 w-[80px] h-auto"
        />
        <h2 className="text-2xl text-center">Something went wrong!</h2>
        <div className="flex items-center justify-center gap-4">
          <Button
            className="w-[95px]"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
          <Link href={"/"}>
            <Button className="w-[95px]">Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
