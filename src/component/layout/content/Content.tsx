import React, { ReactNode } from "react";

interface IContentProps {
  children: ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;
