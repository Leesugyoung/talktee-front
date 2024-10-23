import { Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import useAxios from "../../app/hooks/useAxios";

const Home = () => {
  useAxios();
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default Home;
