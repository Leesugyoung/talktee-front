import { ReactNode } from "react";
import Content from "./content/Content";
import Footer from "./footer/Foooter";
import Header from "./header/Header";

interface IMainProps {
  children: ReactNode;
}

const MainLayout: React.FC<IMainProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container w-500 bg-white h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Content>{children}</Content>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
