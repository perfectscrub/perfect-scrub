"use client";
import React from 'react'
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";

const SubmitButton = () => {
    const { pending, } = useFormStatus()
    return (
        <button
            disabled={pending}
            type="submit"
            className={cn("text-xl md:max-w-[400px] w-full self-center text-white bg-blue-600 my-10 py-4 rounded-[12px]",
                { "bg-blue-400": pending }
            )}
        >
            {pending? "Submitting":"Submit"}
        </button>
    )
}

export default SubmitButton;