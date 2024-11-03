"use client"
import { CardWrapper } from "@/components/auth/CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      headerTitle=""
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center pt-8">
        <ExclamationTriangleIcon  className="w-10 h-10 text-destructive"/>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
