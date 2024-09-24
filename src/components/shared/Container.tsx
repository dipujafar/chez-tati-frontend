import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
      <div className="max-w-[2520px] mx-auto lg:px-48 md:px-10  px-4">
        {children}
      </div>
    );
  };
  
  export default Container;