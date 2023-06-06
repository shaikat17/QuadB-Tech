import { createBrowserRouter } from "react-router-dom";
import CommonLayOut from "../layOut/CommonLayOut";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CommonLayOut />
    }
  ]);