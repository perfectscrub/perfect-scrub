"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./BackButton";
import { Header } from "./Header";
import Social from "./Social";

type CardWrapperProps = {
    children: React.ReactNode;
    headerTitle: string;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({ children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial }: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md mx-3">
            <CardHeader>
                <Header title={headerTitle} label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}