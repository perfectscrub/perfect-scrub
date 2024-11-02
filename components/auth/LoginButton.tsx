"use client";

type LoginButtonProps = {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild: boolean;
};

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
    const onClick = () => {
        console.log("Login clicked");
    }

    if(mode==="modal") {
        
    }
    return (
        <span className="cursor-pointer"
            onClick={onClick} 
        >
            {children}
        </span>
    )
}