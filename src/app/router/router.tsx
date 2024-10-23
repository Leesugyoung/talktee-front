import { createBrowserRouter } from "react-router-dom";
import { ComponentType, lazy, Suspense } from "react";
import Home from "../../component/main/Home";

const Loadable = (importFunc: () => Promise<{ default: ComponentType }>) => {
  const LazyComponent = lazy(importFunc);

  return (props: React.ComponentProps<typeof LazyComponent>) => (
    <Suspense fallback={"loading..."}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// const NotFound = Loadable(() => import("NotFound"));

export const router = createBrowserRouter([
  {
    path: "login",
    element: <div>login</div>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    // 404
    errorElement: <>not found</>,
  },
]);
