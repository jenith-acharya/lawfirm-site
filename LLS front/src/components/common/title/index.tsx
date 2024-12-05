import { ReactNode } from "react";

export const Heading1 = ({ children }: { children: ReactNode }) => {
  
  return (
    <>
      <h1 className="text-bold text-red-800 text-center text-5xl ">
        {children}
      </h1>
      <br/>
      
    </>
  );
};