import type { ReactNode } from "react";
import { Button } from "../ui/button";

type props = {
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ children, className }: props) {
  return (
    <Button
      className={`bg-blue-500 hover:bg-blue-600 rounded-sm ${className && className}`}
    >
      {children}
    </Button>
  );
}
