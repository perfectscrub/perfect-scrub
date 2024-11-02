import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import PSLogo from "@/public/perfect-scrub-logo.png"
const poppins = Poppins({ weight: ["600"], subsets: ["latin"] })

interface HeaderProps {
    label: string;
    title: string;
}

export const Header = ({ title, label }: HeaderProps) => {
    return (
        <div className={cn("w-full flex flex-col gap-y-4 items-center justify-center text-center", poppins.className)}>
            <Image src={PSLogo} width={300} height={135} alt="" className="self-start w-[80px] h-auto" />
            <div>
                <h1 className={cn("text-[22px] font-semibold mb-2")}>{title}</h1>
                <p className={cn("text-muted-foreground text-xs tracking-wide")}>{label}</p>
            </div>
        </div>
    )
}