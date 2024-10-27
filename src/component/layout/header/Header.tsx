import titleImg from "../../../assets/image/타이틀이미지.png";
import { IHeaderType } from "./Header.type";

const Header = ({ setOpen }: IHeaderType) => {
  return (
    <header className="h-60 bg-white text-white flex items-center justify-between px-4">
      <img src={titleImg} width={"120px"} className="flex-shrink-0" />
      <button onClick={() => setOpen(true)}>
        <i
          className="fa-solid fa-bars"
          style={{ color: "#2b70af", fontSize: "1.5rem" }}
        ></i>
      </button>
    </header>
  );
};

export default Header;
