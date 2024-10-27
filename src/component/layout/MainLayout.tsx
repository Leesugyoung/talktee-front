import { ReactNode, useState } from "react";
import Content from "./content/Content";
import Footer from "./footer/Foooter";
import Header from "./header/Header";
import HeaderSliceMenu from "./header/HeaderSliceMenu";

interface IMainProps {
  children: ReactNode;
}

const MainLayout: React.FC<IMainProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container w-500 bg-white h-screen flex flex-col relative">
        <Header setOpen={setOpen} />

        {/* HeaderSliceMenu를 레이아웃 위에 표시 */}
        {open && (
          <div className="absolute inset-0 z-50">
            <HeaderSliceMenu onClose={() => setOpen(false)} />
          </div>
        )}

        <div className="flex-grow">
          <Content>{children}</Content>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
