import { useNavigate } from "react-router-dom";

export const menuList = [
  {
    link: "/chat",
    title: "채팅 기록",
  },
  {
    link: "/bookmark",
    title: "북마크",
  },
  {
    link: "/mypage",
    title: "마이페이지",
  },
];

interface IProps {
  title: string;
  link: string;
}

export const MenuItem = ({ title, link }: IProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(link)}
      className="flex items-center justify-start h-20 pl-5 text-lg font-semibold cursor-pointer"
    >
      {title}
    </div>
  );
};
