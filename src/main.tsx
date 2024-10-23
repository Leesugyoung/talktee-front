import "./globals.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
